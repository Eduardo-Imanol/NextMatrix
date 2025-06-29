"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { quizData } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import type { Phase } from '@/lib/data';

interface QuizModalProps {
  phase: Phase | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onQuizComplete: (passed: boolean) => void;
}

export function QuizModal({ phase, isOpen, onOpenChange, onQuizComplete }: QuizModalProps) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();

    const phaseQuizData = React.useMemo(() => {
        return phase ? quizData.filter(q => q.phase === phase.phase) : [];
    }, [phase]);

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
        return phaseQuizData.reduce((score, question, index) => {
            return score + (answers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length !== phaseQuizData.length) {
            toast({
                title: "Incompleto",
                description: "Por favor, responde todas las preguntas.",
                variant: "destructive",
            });
            return;
        }
        setSubmitted(true);
        const score = getScore();
        const passed = score === phaseQuizData.length;
        if (passed) {
            toast({
                title: "¡Felicidades!",
                description: "Has aprobado el examen y desbloqueado la siguiente fase.",
            });
            onQuizComplete(true);
        } else {
             toast({
                title: "Casi lo tienes",
                description: `Tu puntuación es ${score}/${phaseQuizData.length}. ¡Sigue intentándolo!`,
                variant: "destructive",
            });
            onQuizComplete(false);
        }
    };
    
    if (!phase) return null;

    const score = getScore();
    const passed = score === phaseQuizData.length;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Examen: {phase.name}</DialogTitle>
                    <DialogDescription>
                        Demuestra tus conocimientos para desbloquear la siguiente fase.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 max-h-[60vh] overflow-y-auto p-1 pr-4">
                    {phaseQuizData.map((quizItem, index) => (
                        <div key={index} className="space-y-3">
                            <p className="font-semibold">{index + 1}. {quizItem.question}</p>
                            <RadioGroup onValueChange={(value) => handleAnswerChange(index, value)} value={answers[index]}>
                                <div className="space-y-2">
                                    {quizItem.options.map((option) => {
                                        const isCorrect = option === quizItem.correctAnswer;
                                        const isSelected = answers[index] === option;
                                        return (
                                        <div key={option} className="flex items-center space-x-2">
                                            <RadioGroupItem value={option} id={`${phase.phase}-${index}-${option}`} disabled={submitted} />
                                            <Label htmlFor={`${phase.phase}-${index}-${option}`} className="flex items-center gap-2">
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
                            Puntuación: {score} / {phaseQuizData.length}
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
            </DialogContent>
        </Dialog>
    );
}
