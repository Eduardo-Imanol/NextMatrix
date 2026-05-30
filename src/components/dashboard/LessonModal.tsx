// LessonModal: A modal dialog for displaying lesson content with section-by-section navigation.
// Supports progress tracking, completion status, and Markdown-like content rendering.

"use client";

import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { allLessons, type Lesson, type Topic } from '@/lib/data';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import { useLearning } from '@/contexts/LearningContext';
import { cn } from '@/lib/utils';

interface LessonModalProps {
  topic: Topic | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function LessonModal({ topic, isOpen, onOpenChange }: LessonModalProps) {
  // Tracks which section the user is currently viewing
  const [currentSection, setCurrentSection] = useState(0);
  const { isLessonCompleted, completeLesson } = useLearning();

  // Find the lesson data that corresponds to the selected topic
  const lesson = useMemo(() => {
    return topic ? allLessons.find(l => l.topicId === topic.id) : null;
  }, [topic]);

  // Determine if the current topic's lesson has already been completed
  const completed = useMemo(() => {
    return topic ? isLessonCompleted(topic.id) : false;
  }, [topic, isLessonCompleted]);

  // Reset to the first section whenever the modal is opened or the topic changes
  React.useEffect(() => {
    if (isOpen) {
      setCurrentSection(0);
    }
  }, [isOpen, topic]);

  // Early return: show a fallback message if no lesson data is available
  if (!topic || !lesson) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lección no disponible</DialogTitle>
          </DialogHeader>
          <p>No hay contenido de aprendizaje para este tema todavía.</p>
        </DialogContent>
      </Dialog>
    );
  }

  // Compute total sections and progress percentage for the progress bar
  const totalSections = lesson.sections.length;
  const progress = ((currentSection + 1) / totalSections) * 100;
  const isLastSection = currentSection === totalSections - 1;

  // Navigate to the next section (if not already at the last section)
  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  // Navigate to the previous section (if not already at the first section)
  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  // Mark the current lesson as completed in the learning context
  const handleComplete = () => {
    completeLesson(topic.id);
  };

  const section = lesson.sections[currentSection];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl sm:text-2xl">{lesson.title}</DialogTitle>
            {completed && <CheckCircle className="h-6 w-6 text-green-500" />}
          </div>
          <DialogDescription>
            Sección {currentSection + 1} de {totalSections}
          </DialogDescription>
          {/* Progress bar: visually indicates how far through the lesson the user is */}
          <div className="w-full bg-muted rounded-full h-2 mt-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </DialogHeader>

        {/* Render section content with basic Markdown-like parsing */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <h3 className="text-lg font-semibold mb-4">{section.heading}</h3>
          <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap leading-relaxed">
            {section.content.split('\n').map((line, i) => {
              // Skip code fence markers (e.g., ```)
              if (line.startsWith('```')) {
                return null;
              }
              // Render unordered list items
              if (line.startsWith('- ') || line.startsWith('  - ')) {
                return <li key={i} className="ml-4">{line.replace(/^[-\s]+/, '')}</li>;
              }
              // Render numbered list items
              if (line.match(/^\d+\./)) {
                return <li key={i} className="ml-4 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>;
              }
              if (line.trim() === '') {
                return <br key={i} />;
              }
              return <p key={i} className="mb-2">{line}</p>;
            })}
          </div>
        </div>

        {/* Footer: navigation buttons and lesson completion controls */}
        <div className="flex items-center justify-between p-6 pt-4 border-t">
          <Button
            onClick={handlePrev}
            variant="outline"
            disabled={currentSection === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
          </Button>

          <div className="flex items-center gap-2">
            {/* Show "Mark as complete" button only on the last section if not already completed */}
            {!completed && isLastSection && (
              <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="mr-2 h-4 w-4" /> Marcar como completada
              </Button>
            )}
            {completed && (
              <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                <CheckCircle className="h-4 w-4" /> Completada
              </span>
            )}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            disabled={currentSection === totalSections - 1}
          >
            Siguiente <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
