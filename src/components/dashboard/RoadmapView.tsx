// @/components/dashboard/RoadmapView.tsx
"use client"

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { roadmapData, type Phase, type Topic, allFlashcards, allPlaygrounds, allQuizQuestions } from "@/lib/data"
import { Button } from '@/components/ui/button';
import { Lightbulb, NotebookText, Swords, CheckCircle, Lock, Hammer, Trophy } from 'lucide-react';
import { QuizModal } from './QuizModal';
import { FlashcardsModal } from './FlashcardsModal';
import { NotesModal } from './NotesModal';
import { useToast } from '@/hooks/use-toast';
import { PlaygroundModal } from './PlaygroundModal';

const defaultNotes : Record<string, string> = {
    'html-fundamentals': `# Mis notas sobre Fundamentos de HTML

## Estructura
- \`<!DOCTYPE html>\` es crucial.
- \`<html>\` con atributo \`lang\`.
- \`<head>\` para metadatos, \`<body>\` para contenido.`,
};

export function RoadmapView() {
  const [unlockedPhases, setUnlockedPhases] = useState<Set<number>>(() => new Set([1]));
  const [activeModal, setActiveModal] = useState<{type: 'quiz' | 'flashcards' | 'notes' | 'playground' | null, topic: Topic | null, phase: Phase | null}>({ type: null, topic: null, phase: null });
  const [notes, setNotes] = useState<Record<string, string>>(defaultNotes);
  const { toast } = useToast();

  const handleQuizComplete = (passed: boolean, phaseNumber: number) => {
      if (passed && activeModal.phase) {
          const nextPhase = phaseNumber + 1;
          if (nextPhase <= roadmapData.length) {
              setUnlockedPhases(prev => new Set(prev).add(nextPhase));
              toast({
                  title: '¡Fase Desbloqueada!',
                  description: `Ahora tienes acceso a la Fase ${nextPhase}.`,
              });
          }
      }
      setActiveModal({ type: null, topic: null, phase: null });
  };

  const handleNoteChange = (newNote: string, topicId: string) => {
      setNotes(prev => ({ ...prev, [topicId]: newNote }));
  };

  const isPhaseUnlocked = (phaseNumber: number) => unlockedPhases.has(phaseNumber);
  const isPhaseCompleted = (phaseNumber: number) => unlockedPhases.has(phaseNumber + 1) || (phaseNumber === roadmapData.length && unlockedPhases.has(phaseNumber));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline md:text-4xl">Roadmap de Next.js</h1>
        <p className="mt-2 text-muted-foreground md:text-lg">
          Tu viaje para dominar Next.js, fase por fase. Completa el examen de cada fase para desbloquear la siguiente.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {roadmapData.map((phase, index) => (
          <AccordionItem value={`item-${index}`} key={phase.phase} disabled={!isPhaseUnlocked(phase.phase)}>
            <AccordionTrigger className="text-lg font-semibold hover:no-underline md:text-xl disabled:cursor-not-allowed disabled:opacity-50">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  <phase.Icon className="h-6 w-6 text-primary" />
                  <span>{phase.name}</span>
                </div>
                <div className="mr-4">
                  {isPhaseCompleted(phase.phase) ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : isPhaseUnlocked(phase.phase) ? null : (
                    <Lock className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-6 pt-4">
              <p className="text-muted-foreground pl-10">{phase.description}</p>
              
              <div className="flex flex-col gap-6 pl-10">
                {phase.topics.map((topic) => (
                  <Card key={topic.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <topic.Icon className="h-6 w-6 text-accent"/>
                        <CardTitle>{topic.name}</CardTitle>
                      </div>
                      <CardDescription className="pt-2">{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-3">
                      {allFlashcards.some(f => f.topicId === topic.id) && (
                        <Button variant="outline" onClick={() => setActiveModal({ type: 'flashcards', topic, phase: null })}>
                          <Lightbulb className="mr-2 h-4 w-4" /> Estudiar Flashcards
                        </Button>
                      )}
                      {allPlaygrounds.some(p => p.topicId === topic.id) && (
                         <Button variant="outline" onClick={() => setActiveModal({ type: 'playground', topic, phase: null })}>
                           <Hammer className="mr-2 h-4 w-4" /> Practicar
                         </Button>
                      )}
                      <Button variant="outline" onClick={() => setActiveModal({ type: 'notes', topic, phase: null })}>
                        <NotebookText className="mr-2 h-4 w-4" /> Mis Notas
                      </Button>
                      {allQuizQuestions.some(q => q.topicId === topic.id) && (
                        <Button variant="outline" onClick={() => setActiveModal({ type: 'quiz', topic, phase: null })}>
                          <Swords className="mr-2 h-4 w-4" /> Examen del Tema
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {!isPhaseCompleted(phase.phase) && (
                <div className="mt-8 flex flex-col items-center border-t pt-8">
                  <p className="text-center text-muted-foreground mb-4">Completa el examen final de la fase para desbloquear la siguiente.</p>
                  <Button onClick={() => setActiveModal({ type: 'quiz', phase, topic: null })} size="lg" className="glow-border">
                      <Trophy className="mr-2 h-5 w-5"/> Examen Final de Fase {phase.phase}
                  </Button>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <FlashcardsModal 
        isOpen={activeModal.type === 'flashcards'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null })}
        topic={activeModal.topic}
      />
      
      <PlaygroundModal
        isOpen={activeModal.type === 'playground'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null })}
        topic={activeModal.topic}
      />

      <NotesModal
        isOpen={activeModal.type === 'notes'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null })}
        topic={activeModal.topic}
        note={activeModal.topic ? notes[activeModal.topic.id] ?? "" : ""}
        onNoteChange={(newNote) => activeModal.topic && handleNoteChange(newNote, activeModal.topic.id)}
      />

      <QuizModal 
        isOpen={activeModal.type === 'quiz'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null })}
        phase={activeModal.phase}
        topic={activeModal.topic}
        onQuizComplete={(passed) => activeModal.phase && handleQuizComplete(passed, activeModal.phase.phase)}
      />
    </div>
  )
}
