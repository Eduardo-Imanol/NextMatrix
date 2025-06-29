// @/components/dashboard/PlaygroundModal.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { allPlaygrounds, type Topic } from '@/lib/data';
import type { PlaygroundExercise } from '@/lib/data/html-playgrounds';
import { ArrowLeft, ArrowRight, Code, Eye } from 'lucide-react';

interface PlaygroundModalProps {
    topic: Topic | null;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export function PlaygroundModal({ topic, isOpen, onOpenChange }: PlaygroundModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [code, setCode] = useState('');
    const [previewSrcDoc, setPreviewSrcDoc] = useState('');

    const topicPlaygrounds = React.useMemo(() => {
        return topic ? allPlaygrounds.filter(p => p.topicId === topic.id) : [];
    }, [topic]);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);
    
    useEffect(() => {
        if (topicPlaygrounds.length > 0) {
            const currentExercise = topicPlaygrounds[currentIndex];
            setCode(currentExercise.initialCode);
            setPreviewSrcDoc(currentExercise.initialCode);
        }
    }, [currentIndex, topicPlaygrounds]);

    const handleRunCode = () => {
        setPreviewSrcDoc(code);
    };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topicPlaygrounds.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? topicPlaygrounds.length - 1 : prevIndex - 1
        );
    };

    if (!topic || topicPlaygrounds.length === 0) {
        return (
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Playground no disponible</DialogTitle>
                    </DialogHeader>
                    <p>No hay ejercicios prácticos para este tema todavía.</p>
                </DialogContent>
            </Dialog>
        );
    }
    
    const currentExercise = topicPlaygrounds[currentIndex];

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-6xl h-[90vh] flex flex-col p-4 sm:p-6">
                <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl">{currentExercise.title}</DialogTitle>
                    <DialogDescription className="text-sm whitespace-pre-wrap">{currentExercise.description}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 pt-4">
                    <div className="flex flex-col gap-2 min-h-0">
                        <h3 className="text-lg font-semibold flex items-center"><Code className="mr-2 h-5 w-5"/> Editor</h3>
                        <Textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="h-full flex-1 font-code text-base resize-none"
                            placeholder="Escribe tu código HTML aquí..."
                        />
                    </div>
                    <div className="flex flex-col gap-2 min-h-0">
                         <h3 className="text-lg font-semibold flex items-center"><Eye className="mr-2 h-5 w-5"/> Vista Previa</h3>
                        <iframe
                            srcDoc={previewSrcDoc}
                            title="Vista Previa"
                            sandbox="allow-scripts allow-same-origin"
                            className="w-full h-full border rounded-md bg-white"
                        />
                    </div>
                </div>
                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <Button onClick={handleRunCode} className="w-full sm:w-auto">
                        <Eye className="mr-2 h-4 w-4" /> Ejecutar y ver
                    </Button>
                    <div className="flex items-center gap-4">
                        <Button onClick={handlePrev} variant="outline" size="lg" disabled={topicPlaygrounds.length <= 1}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                        </Button>
                        <span className="text-muted-foreground">
                            {currentIndex + 1} / {topicPlaygrounds.length}
                        </span>
                        <Button onClick={handleNext} variant="outline" size="lg" disabled={topicPlaygrounds.length <= 1}>
                            Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
