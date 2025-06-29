// @/components/dashboard/QuizModal.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { allQuizQuestions } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import type { Phase, Topic } from '@/lib/data';

interface QuizModalProps {
  phase: Phase | null;
  topic: Topic | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onQuizComplete: (passed: boolean) => void;
}

export function QuizModal({ phase, topic, isOpen, onOpenChange, onQuizComplete }: QuizModalProps) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();

    const quizItems = React.useMemo(() => {
        if (topic) {
            return allQuizQuestions.filter(q => q.topicId === topic.id);
        }
        if (phase) {
            const topicIdsInPhase = new Set(phase.topics.map(t => t.id));
            return allQuizQuestions.filter(q => topicIdsInPhase.has(q.topicId));
        }
        return [];
    }, [phase, topic]);

    useEffect(() => {
        if (isOpen) {
            setAnswers({});
            setSubmitted(false);
        }
    }, [isOpen]);

    const handleAnswerChange = (questionIndex: number, value: string) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: value }));
        if (submitted) setSubmitted(false);
    };

    const getScore = () => {
        return quizItems.reduce((score, question, index) => {
            return score + (answers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
    };

    const handleSubmit = () => {
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
        const passThreshold = topic ? 9 : Math.ceil(quizItems.length * 0.9);
        const passed = score >= passThreshold;

        if (passed) {
            toast({
                title: "¡Felicidades!",
                description: `Has aprobado el examen con una puntuación de ${score}/${quizItems.length}.`,
            });
            onQuizComplete(true);
        } else {
             toast({
                title: "Casi lo tienes",
                description: `Tu puntuación es ${score}/${quizItems.length}. Necesitas al menos ${passThreshold} para aprobar. ¡Sigue intentándolo!`,
                variant: "destructive",
            });
            onQuizComplete(false);
        }
    };
    
    if (!phase && !topic) return null;

    const score = getScore();
    const passThreshold = topic ? 9 : Math.ceil(quizItems.length * 0.9);
    const passed = score >= passThreshold;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Examen: {topic?.name || phase?.name}</DialogTitle>
                    <DialogDescription>
                        {topic ? 'Demuestra tus conocimientos sobre este tema.' : 'Demuestra tus conocimientos para desbloquear la siguiente fase.'}
                    </DialogDescription>
                </DialogHeader>
                {quizItems.length > 0 ? (
                    <>
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
                                                    <RadioGroupItem value={option} id={`${(topic?.id || phase?.phase)}-${index}-${option}`} disabled={submitted} />
                                                    <Label htmlFor={`${(topic?.id || phase?.phase)}-${index}-${option}`} className="flex items-center gap-2">
                                                        {option}
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
                        <DialogFooter className="flex-col items-center sm:flex-row sm:justify-between sm:items-center">
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
                    <p className="py-8 text-center text-muted-foreground">No hay preguntas de examen para este {topic ? 'tema' : 'fase'} todavía.</p>
                )}
            </DialogContent>
        </Dialog>
    );
}
