"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { flashcardsData } from '@/lib/data';
import { Flashcard } from './Flashcard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function FlashcardsView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
    }, 150)
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? flashcardsData.length - 1 : prevIndex - 1
        );
    }, 150)
  };

  const currentFlashcard = flashcardsData[currentIndex];

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8">
      <div>
        <h1 className="text-center text-3xl font-bold font-headline md:text-4xl">Flashcards</h1>
        <p className="mt-2 text-center text-muted-foreground md:text-lg">
          Pon a prueba tus conocimientos. Haz clic en la tarjeta para ver la respuesta.
        </p>
      </div>
      <Flashcard 
        question={currentFlashcard.question} 
        answer={currentFlashcard.answer}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <div className="flex items-center gap-4">
        <Button onClick={handlePrev} variant="outline" size="lg">
          <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        <span className="text-muted-foreground">
          {currentIndex + 1} / {flashcardsData.length}
        </span>
        <Button onClick={handleNext} variant="outline" size="lg">
          Siguiente <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
