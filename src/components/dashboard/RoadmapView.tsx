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
import { roadmapData, type Phase, type Topic, allFlashcards, allPlaygrounds, allQuizQuestions, type Module } from "@/lib/data"
import { Button } from '@/components/ui/button';
import { Lightbulb, NotebookText, Swords, CheckCircle, Lock, Hammer, Trophy } from 'lucide-react';
import { QuizModal } from './QuizModal';
import { FlashcardsModal } from './FlashcardsModal';
import { NotesModal } from './NotesModal';
import { useToast } from '@/hooks/use-toast';
import { PlaygroundModal } from './PlaygroundModal';
import { cn } from '@/lib/utils';

const defaultNotes : Record<string, string> = {
    'html-fundamentals': `# Mis notas sobre Fundamentos de HTML

## Estructura
- \`<!DOCTYPE html>\` es crucial.
- \`<html>\` con atributo \`lang\`.
- \`<head>\` para metadatos, \`<body>\` para contenido.`,
};

export function RoadmapView() {
  const [unlockedPhases, setUnlockedPhases] = useState<Set<number>>(() => new Set([1]));
  const [unlockedModules, setUnlockedModules] = useState<Set<string>>(() => new Set(['html-basics']));
  const [activeModal, setActiveModal] = useState<{type: 'quiz' | 'flashcards' | 'notes' | 'playground' | null, topic: Topic | null, phase: Phase | null, module: Module | null}>({ type: null, topic: null, phase: null, module: null });
  const [notes, setNotes] = useState<Record<string, string>>(defaultNotes);
  const { toast } = useToast();

  const handlePhaseQuizComplete = (passed: boolean, phaseNumber: number) => {
      if (passed && activeModal.phase) {
          const nextPhase = phaseNumber + 1;
          if (nextPhase <= roadmapData.length) {
              setUnlockedPhases(prev => {
                const newSet = new Set(prev).add(nextPhase);
                const firstModuleOfNextPhase = roadmapData.find(p => p.phase === nextPhase)?.modules[0];
                if (firstModuleOfNextPhase) {
                    setUnlockedModules(prevModules => new Set(prevModules).add(firstModuleOfNextPhase.id));
                }
                return newSet;
              });
              toast({
                  title: '¡Fase Desbloqueada!',
                  description: `Ahora tienes acceso a la Fase ${nextPhase}.`,
              });
          }
      }
      setActiveModal({ type: null, topic: null, phase: null, module: null });
  };
  
  const handleModuleQuizComplete = (passed: boolean) => {
      const currentPhase = roadmapData.find(p => p.modules.some(m => m.id === activeModal.module?.id));
      if (passed && activeModal.module && currentPhase) {
          const moduleIndex = currentPhase.modules.findIndex(m => m.id === activeModal.module!.id);
          const nextModule = currentPhase.modules[moduleIndex + 1];

          if (nextModule) {
              setUnlockedModules(prev => new Set(prev).add(nextModule.id));
              toast({
                  title: '¡Módulo Desbloqueado!',
                  description: `Bien hecho. Ahora puedes continuar con "${nextModule.name}".`,
              });
          }
      }
      setActiveModal({ type: null, topic: null, phase: null, module: null });
  }

  const handleNoteChange = (newNote: string, topicId: string) => {
      setNotes(prev => ({ ...prev, [topicId]: newNote }));
  };

  const isPhaseUnlocked = (phaseNumber: number) => unlockedPhases.has(phaseNumber);
  const isPhaseCompleted = (phaseNumber: number) => unlockedPhases.has(phaseNumber + 1);

  const isModuleCompleted = (moduleId: string, phase: Phase) => {
      const moduleIndex = phase.modules.findIndex(m => m.id === moduleId);
      const nextModule = phase.modules[moduleIndex + 1];
      if (nextModule) {
          return unlockedModules.has(nextModule.id);
      }
      // If it's the last module, it's completed if the phase is completed.
      return isPhaseCompleted(phase.phase);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline md:text-4xl">Roadmap de Next.js</h1>
        <p className="mt-2 text-muted-foreground md:text-lg">
          Tu viaje para dominar Next.js, fase por fase. Completa los exámenes de cada módulo para avanzar.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {roadmapData.map((phase, index) => (
          <AccordionItem value={`item-${index}`} key={phase.phase} disabled={!isPhaseUnlocked(phase.phase)}>
            <AccordionTrigger className="text-xl font-semibold hover:no-underline md:text-2xl disabled:cursor-not-allowed disabled:opacity-50">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  <phase.Icon className="h-8 w-8 text-primary" />
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
              <p className="text-muted-foreground pl-12">{phase.description}</p>
              
              <div className="pl-12 space-y-4">
                {phase.modules.map((module) => {
                    const isUnlocked = unlockedModules.has(module.id);
                    const isCompleted = isModuleCompleted(module.id, phase);
                    
                    return (
                        <Card key={module.id} className={cn("transition-all", !isUnlocked && "bg-muted/50 border-dashed opacity-60")}>
                            <CardHeader>
                               <div className="flex w-full items-center justify-between">
                                    <CardTitle className="text-lg md:text-xl">{module.name}</CardTitle>
                                    <div className="flex items-center gap-2">
                                      {isCompleted ? <Badge variant="secondary" className="border-green-500/50 text-green-500">Completado</Badge> : !isUnlocked ? <Lock className="h-5 w-5 text-muted-foreground" /> : null}
                                    </div>
                               </div>
                               <CardDescription>{module.description}</CardDescription>
                            </CardHeader>
                            {isUnlocked && (
                                <>
                                <CardContent className="flex flex-col gap-4">
                                {module.topics.map((topic) => (
                                <Card key={topic.id} className="overflow-hidden bg-background/50">
                                    <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <topic.Icon className="h-6 w-6 text-accent"/>
                                        <CardTitle className="text-base font-medium">{topic.name}</CardTitle>
                                    </div>
                                    <CardDescription className="pt-2">{topic.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-wrap gap-3">
                                    {allFlashcards.some(f => f.topicId === topic.id) && (
                                        <Button variant="outline" size="sm" onClick={() => setActiveModal({ type: 'flashcards', topic, phase: null, module: null })}>
                                        <Lightbulb className="mr-2 h-4 w-4" /> Estudiar Flashcards
                                        </Button>
                                    )}
                                    {allPlaygrounds.some(p => p.topicId === topic.id) && (
                                        <Button variant="outline" size="sm" onClick={() => setActiveModal({ type: 'playground', topic, phase: null, module: null })}>
                                        <Hammer className="mr-2 h-4 w-4" /> Practicar
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm" onClick={() => setActiveModal({ type: 'notes', topic, phase: null, module: null })}>
                                        <NotebookText className="mr-2 h-4 w-4" /> Mis Notas
                                    </Button>
                                    {allQuizQuestions.some(q => q.topicId === topic.id) && (
                                        <Button variant="outline" size="sm" onClick={() => setActiveModal({ type: 'quiz', topic, phase: null, module: null })}>
                                        <Swords className="mr-2 h-4 w-4" /> Examen del Tema
                                        </Button>
                                    )}
                                    </CardContent>
                                </Card>
                                ))}
                            </CardContent>
                            <CardFooter>
                                {!isCompleted && (
                                    <Button onClick={() => setActiveModal({ type: 'quiz', module, topic: null, phase: null })} >
                                        <Trophy className="mr-2 h-5 w-5"/> Examen del Módulo
                                    </Button>
                                )}
                            </CardFooter>
                            </>
                            )}
                        </Card>
                    )
                })}
              </div>

              {!isPhaseCompleted(phase.phase) && (
                <div className="mt-8 flex flex-col items-center border-t pt-8">
                  <p className="text-center text-muted-foreground mb-4">Completa todos los módulos para realizar el examen final.</p>
                  <Button onClick={() => setActiveModal({ type: 'quiz', phase, topic: null, module: null })} size="lg" className="glow-border" disabled={!isModuleCompleted(phase.modules[phase.modules.length - 1].id, phase)}>
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
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null, module: null })}
        topic={activeModal.topic}
      />
      
      <PlaygroundModal
        isOpen={activeModal.type === 'playground'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null, module: null })}
        topic={activeModal.topic}
      />

      <NotesModal
        isOpen={activeModal.type === 'notes'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null, module: null })}
        topic={activeModal.topic}
        note={activeModal.topic ? notes[activeModal.topic.id] ?? "" : ""}
        onNoteChange={(newNote) => activeModal.topic && handleNoteChange(newNote, activeModal.topic.id)}
      />

      <QuizModal 
        isOpen={activeModal.type === 'quiz'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null, module: null })}
        phase={activeModal.phase}
        topic={activeModal.topic}
        module={activeModal.module}
        onQuizComplete={(passed) => {
            if (activeModal.phase) {
                handlePhaseQuizComplete(passed, activeModal.phase.phase);
            } else if (activeModal.module) {
                handleModuleQuizComplete(passed);
            } else {
                // Topic quiz, maybe update some state here in the future
                setActiveModal({ type: null, topic: null, phase: null, module: null });
            }
        }}
      />
    </div>
  )
}
