// @/components/dashboard/QuizModal.tsx
"use client";

/**
 * QuizModal - A modal dialog component for presenting quiz examinations.
 * Supports quizzes scoped to a specific topic, module, or phase.
 * Handles answer selection, score calculation, pass/fail evaluation,
 * and notifies the parent component of quiz completion results.
 */

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { allQuizQuestions } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import type { Phase, Topic, Module } from '@/lib/data';

// Props interface for the QuizModal component
interface QuizModalProps {
  phase: Phase | null;
  topic: Topic | null;
  module: Module | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onQuizComplete: (passed: boolean, score: number, total: number) => void;
}

// QuizModal component - renders a dialog with multiple-choice questions
export function QuizModal({ phase, topic, module, isOpen, onOpenChange, onQuizComplete }: QuizModalProps) {
    // Tracks user answers keyed by question index
    const [answers, setAnswers] = useState<Record<number, string>>({});
    // Tracks whether the quiz has been submitted for scoring
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();

    // Memoized list of quiz questions filtered and shuffled based on the current scope (topic, module, or phase)
    const quizItems = React.useMemo(() => {
        // Filter questions based on the active scope
        let questions = [];
        if (topic) {
            // Topic-level: only questions belonging to this topic
            questions = allQuizQuestions.filter(q => q.topicId === topic.id);
        } else if (module) {
            // Module-level: questions from all topics within this module
            const topicIdsInModule = new Set(module.topics.map(t => t.id));
            questions = allQuizQuestions.filter(q => topicIdsInModule.has(q.topicId));
        } else if (phase) {
            // Phase-level: questions from all topics across all modules in this phase
            const topicIdsInPhase = new Set(phase.modules.flatMap(m => m.topics.map(t => t.id)));
            questions = allQuizQuestions.filter(q => topicIdsInPhase.has(q.topicId));
        }

        // Randomize question order for variety
        const shuffled = [...questions].sort(() => Math.random() - 0.5);

        // Limit to 10 questions for module/phase quizzes; show all for topic quizzes
        const limit = (module || phase) ? 10 : shuffled.length;
        return shuffled.slice(0, limit);
    }, [phase, topic, module, isOpen]);

    // Reset answers and submission state whenever the modal opens or scope changes
    useEffect(() => {
        if (isOpen) {
            setAnswers({});
            setSubmitted(false);
        }
    }, [isOpen, topic, module, phase]);

    // Updates the selected answer for a given question index
    const handleAnswerChange = (questionIndex: number, value: string) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: value }));
        if (submitted) setSubmitted(false);
    };

    // Calculates the total score by counting correct answers
    const getScore = () => {
        return quizItems.reduce((score, question, index) => {
            return score + (answers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
    };
    
    // Dynamic title and description based on quiz scope
    const title = topic?.name || module?.name || phase?.name;
    const description = topic
      ? 'Demuestra tus conocimientos sobre este tema.'
      : module
      ? 'Supera este examen para desbloquear el siguiente módulo.'
      : 'Demuestra tus conocimientos para desbloquear la siguiente fase.';

    // Minimum number of correct answers required to pass
    const passThreshold = 7;
    
    // Validates all questions are answered, then evaluates the score
    const handleSubmit = () => {
        // Ensure no unanswered questions before submission
        if (Object.keys(answers).length !== quizItems.length) {
            toast({
                title: "Incompleto",
                description: "Por favor, responde todas las preguntas.",
                variant: "destructive",
            });
            return;
        }
        setSubmitted(true);
        const score = getScore();
        const passed = score >= passThreshold;

        // Notify parent component of quiz outcome via callback
        if (passed) {
            toast({
                title: "¡Felicidades!",
                description: `Has aprobado el examen con una puntuación de ${score}/${quizItems.length}.`,
            });
            onQuizComplete(true, score, quizItems.length);
        } else {
             toast({
                title: "Casi lo tienes",
                description: `Tu puntuación es ${score}/${quizItems.length}. Necesitas al menos ${passThreshold} para aprobar. ¡Sigue intentándolo!`,
                variant: "destructive",
            });
            onQuizComplete(false, score, quizItems.length);
        }
    };
    
    // Guard: don't render if no scope is provided
    if (!phase && !topic && !module) return null;

    // Compute current score and pass status for display
    const score = getScore();
    const passed = score >= passThreshold;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Examen: {title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                    {quizItems.length > 0 ? (
                    <>
                        {/* Scrollable container for quiz questions */}
                        <div className="space-y-6 max-h-[60vh] overflow-y-auto p-1 pr-4">
                            {quizItems.map((quizItem, index) => (
                                <div key={index} className="space-y-3">
                                    <p className="font-semibold">{index + 1}. {quizItem.question}</p>
                                    <RadioGroup onValueChange={(value) => handleAnswerChange(index, value)} value={answers[index]}>
                                        <div className="space-y-2">
                                            {quizItem.options.map((option) => {
                                                const isCorrect = option === quizItem.correctAnswer;
                                                const isSelected = answers[index] === option;
                                                return (
                                                <div key={option} className="flex items-center space-x-2">
                                                    <RadioGroupItem value={option} id={`${(topic?.id || module?.id || phase?.phase)}-${index}-${option}`} disabled={submitted} />
                                                    <Label htmlFor={`${(topic?.id || module?.id || phase?.phase)}-${index}-${option}`} className="flex items-center gap-2">
                                                        {option}
                                                        {/* Show feedback icons after submission */}
                                                        {submitted && isSelected && (
                                                            isCorrect ? <CheckCircle className="text-green-500" /> : <XCircle className="text-red-500" />
                                                        )}
                                                        {submitted && !isSelected && isCorrect && <CheckCircle className="text-green-500/70" />}
                                                    </Label>
                                                </div>
                                            )})}
                                        </div>
                                    </RadioGroup>
                                </div>
                            ))}
                        </div>
                        {/* Footer with score display and action buttons */}
                        <DialogFooter className="flex-col items-center sm:flex-row sm:justify-between sm:items-center">
                            {/* Score summary shown after submission */}
                            {submitted && (
                                <div className="text-xl font-bold flex items-center gap-2">
                                    {passed ? <Trophy className="text-yellow-400" /> : null}
                                    Puntuación: {score} / {quizItems.length}
                                </div>
                            )}
                            {!submitted ? (
                                <Button onClick={handleSubmit}>Enviar Examen</Button>
                            ) : (
                                <Button onClick={() => onOpenChange(false)}>
                                    {passed ? "Continuar" : "Cerrar"}
                                </Button>
                            )}
                        </DialogFooter>
                    </>
                ) : (
                    // Empty state when no questions are available for this scope
                    <p className="py-8 text-center text-muted-foreground">No hay preguntas de examen para este {topic ? 'tema' : (module ? 'módulo' : 'fase')} todavía.</p>
                )}
            </DialogContent>
        </Dialog>
    );
}
