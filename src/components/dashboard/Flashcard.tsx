"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface FlashcardProps {
  question: string;
  answer: string;
  isFlipped: boolean;
  setIsFlipped: (isFlipped: boolean) => void;
}

export function Flashcard({ question, answer, isFlipped, setIsFlipped }: FlashcardProps) {
  return (
    <div
      className="group h-80 w-full max-w-lg cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]',
          isFlipped && '[transform:rotateY(180deg)]'
        )}
      >
        {/* Front */}
        <Card className="absolute inset-0 flex items-center justify-center p-6 [backface-visibility:hidden]">
          <CardContent className="text-center">
            <p className="text-2xl font-semibold">{question}</p>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground">{answer}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
