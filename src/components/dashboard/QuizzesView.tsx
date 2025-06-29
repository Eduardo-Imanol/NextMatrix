"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { quizData } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle } from 'lucide-react';

export function QuizzesView() {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();

    const handleAnswerChange = (questionIndex: number, value: string) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: value }));
        setSubmitted(false);
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length !== quizData.length) {
            toast({
                title: "Incompleto",
                description: "Por favor, responde todas las preguntas.",
                variant: "destructive",
            });
            return;
        }
        setSubmitted(true);
    };
    
    const getScore = () => {
        return quizData.reduce((score, question, index) => {
            return score + (answers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline md:text-4xl">Exámenes</h1>
                <p className="mt-2 text-muted-foreground md:text-lg">
                    Evalúa tu conocimiento sobre Next.js.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Test de Conocimientos</CardTitle>
                    <CardDescription>Selecciona la respuesta correcta para cada pregunta.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {quizData.map((quizItem, index) => (
                        <div key={index} className="space-y-3">
                            <p className="font-semibold">{index + 1}. {quizItem.question}</p>
                            <RadioGroup onValueChange={(value) => handleAnswerChange(index, value)}>
                                <div className="space-y-2">
                                    {quizItem.options.map((option) => {
                                        const isCorrect = option === quizItem.correctAnswer;
                                        const isSelected = answers[index] === option;
                                        return (
                                        <div key={option} className="flex items-center space-x-2">
                                            <RadioGroupItem value={option} id={`${index}-${option}`} />
                                            <Label htmlFor={`${index}-${option}`} className="flex items-center gap-2">
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
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                    <Button onClick={handleSubmit}>Enviar Examen</Button>
                    {submitted && (
                        <div className="text-xl font-bold">
                            Tu puntuación: {getScore()} / {quizData.length}
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
