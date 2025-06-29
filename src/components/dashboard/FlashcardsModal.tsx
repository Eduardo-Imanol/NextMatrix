// @/components/dashboard/FlashcardsModal.tsx
"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { allFlashcards } from '@/lib/data';
import { Flashcard } from './Flashcard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Topic } from '@/lib/data';

interface FlashcardsModalProps {
  topic: Topic | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function FlashcardsModal({ topic, isOpen, onOpenChange }: FlashcardsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const topicFlashcards = React.useMemo(() => {
    return topic ? allFlashcards.filter(f => f.topicId === topic.id) : [];
  }, [topic]);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [isOpen, topic]);

  if (!topic || topicFlashcards.length === 0) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Flashcards no disponibles</DialogTitle>
                </DialogHeader>
                <p>No hay flashcards para este tema todavía.</p>
            </DialogContent>
        </Dialog>
    );
  }

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topicFlashcards.length);
    }, 150)
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? topicFlashcards.length - 1 : prevIndex - 1
        );
    }, 150)
  };

  const currentFlashcard = topicFlashcards[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Flashcards: {topic.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-8 pt-4">
          <Flashcard 
            question={currentFlashcard.question} 
            answer={currentFlashcard.answer}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
          />
          <div className="flex items-center gap-4">
            <Button onClick={handlePrev} variant="outline" size="lg" disabled={topicFlashcards.length <= 1}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <span className="text-muted-foreground">
              {currentIndex + 1} / {topicFlashcards.length}
            </span>
            <Button onClick={handleNext} variant="outline" size="lg" disabled={topicFlashcards.length <= 1}>
              Siguiente <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
