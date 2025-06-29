"use client"

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { roadmapData, type Phase } from "@/lib/data"
import { Button } from '@/components/ui/button';
import { Lightbulb, NotebookText, Swords, CheckCircle, Lock } from 'lucide-react';
import { QuizModal } from './QuizModal';
import { FlashcardsModal } from './FlashcardsModal';
import { NotesModal } from './NotesModal';
import { useToast } from '@/hooks/use-toast';

const defaultNotes : Record<number, string> = {
    1: `# Mis notas sobre Fundamentos Web

## HTML
Estructura es clave.

- Usar etiquetas semánticas.
- \`main\`, \`nav\`, \`article\`, etc.`,
    2: "",
    3: "",
    4: "",
    5: ""
};

export function RoadmapView() {
  const [unlockedPhases, setUnlockedPhases] = useState<Set<number>>(() => new Set([1]));
  const [activeModal, setActiveModal] = useState<{type: 'quiz' | 'flashcards' | 'notes' | null, phase: Phase | null}>({ type: null, phase: null });
  const [notes, setNotes] = useState<Record<number, string>>(defaultNotes);
  const { toast } = useToast();

  const handleQuizComplete = (passed: boolean, phaseNumber: number) => {
      if (passed) {
          const nextPhase = phaseNumber + 1;
          if (nextPhase <= roadmapData.length) {
              setUnlockedPhases(prev => new Set(prev).add(nextPhase));
              toast({
                  title: '¡Fase Desbloqueada!',
                  description: `Ahora tienes acceso a la Fase ${nextPhase}.`,
              });
          }
      }
      setActiveModal({ type: null, phase: null });
  };

  const handleNoteChange = (newNote: string, phaseNumber: number) => {
      setNotes(prev => ({ ...prev, [phaseNumber]: newNote }));
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
            <AccordionContent className="space-y-6 pl-10 pt-4">
              <p className="text-muted-foreground">{phase.description}</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                {phase.topics.map((topic) => (
                   <li key={topic.name}>
                     <span className="font-semibold">{topic.name}:</span> {topic.description}
                   </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 rounded-lg border bg-muted/30 p-4">
                  <Button onClick={() => setActiveModal({ type: 'flashcards', phase })}>
                    <Lightbulb className="mr-2" /> Estudiar con Flashcards
                  </Button>
                  <Button onClick={() => setActiveModal({ type: 'notes', phase })}>
                    <NotebookText className="mr-2" /> Mis Notas
                  </Button>
                  <Button onClick={() => setActiveModal({ type: 'quiz', phase })} variant="secondary" className="bg-primary/20 hover:bg-primary/30 text-primary font-semibold">
                    <Swords className="mr-2" /> Tomar Examen
                  </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <FlashcardsModal 
        isOpen={activeModal.type === 'flashcards'}
        onOpenChange={() => setActiveModal({ type: null, phase: null })}
        phase={activeModal.phase}
      />

      <NotesModal
        isOpen={activeModal.type === 'notes'}
        onOpenChange={() => setActiveModal({ type: null, phase: null })}
        phase={activeModal.phase}
        note={activeModal.phase ? notes[activeModal.phase.phase] : ""}
        onNoteChange={(newNote) => activeModal.phase && handleNoteChange(newNote, activeModal.phase.phase)}
      />

      <QuizModal 
        isOpen={activeModal.type === 'quiz'}
        onOpenChange={() => setActiveModal({ type: null, phase: null })}
        phase={activeModal.phase}
        onQuizComplete={(passed) => activeModal.phase && handleQuizComplete(passed, activeModal.phase.phase)}
      />
    </div>
  )
}
