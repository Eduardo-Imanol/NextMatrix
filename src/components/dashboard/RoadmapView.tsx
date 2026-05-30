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
import { roadmapData, type Phase, type Topic, allFlashcards, allPlaygrounds, allQuizQuestions, allLessons, type Module } from "@/lib/data"
import { Button } from '@/components/ui/button';
import { Lightbulb, NotebookText, Swords, CheckCircle, Lock, Hammer, Trophy, Rocket, BookOpen } from 'lucide-react';
import { QuizModal } from './QuizModal';
import { FlashcardsModal } from './FlashcardsModal';
import { NotesModal } from './NotesModal';
import { LessonModal } from './LessonModal';
import { useToast } from '@/hooks/use-toast';
import { PlaygroundModal } from './PlaygroundModal';
import { cn } from '@/lib/utils';
import { Progress } from "@/components/ui/progress";
import { Badge } from '@/components/ui/badge';
import { useLearning } from '@/contexts/LearningContext';


export function RoadmapView() {
  const {
    isPhaseUnlocked,
    isPhaseCompleted,
    isModuleUnlocked,
    isModuleCompleted,
    isTopicCompleted,
    unlockPhase,
    unlockModule,
    completeTopic,
    getNote,
    setNote,
    recordQuizScore,
  } = useLearning();

  const [activeModal, setActiveModal] = useState<{type: 'quiz' | 'flashcards' | 'notes' | 'playground' | 'lesson' | null, topic: Topic | null, phase: Phase | null, module: Module | null}>({ type: null, topic: null, phase: null, module: null });
  const { toast } = useToast();

  const handlePhaseQuizComplete = (passed: boolean, phaseNumber: number) => {
      if (passed && activeModal.phase) {
          const nextPhase = phaseNumber + 1;
          if (nextPhase <= roadmapData.length) {
              unlockPhase(nextPhase);
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
              unlockModule(nextModule.id);
              toast({
                  title: '¡Módulo Desbloqueado!',
                  description: `Bien hecho. Ahora puedes continuar con "${nextModule.name}".`,
              });
          }
      }
      setActiveModal({ type: null, topic: null, phase: null, module: null });
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline md:text-4xl">Roadmap de Next.js</h1>
        <p className="mt-2 text-muted-foreground md:text-lg">
          Tu viaje para dominar Next.js, fase por fase. Completa los exámenes de cada módulo para avanzar.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {roadmapData.map((phase, index) => {
          const isUnlocked = isPhaseUnlocked(phase.phase);
          const isCompleted = isPhaseCompleted(phase.phase);
          const remainingModules = phase.modules.filter(m => !isModuleCompleted(m.id, phase));

          return (
            <AccordionItem value={`item-${index}`} key={phase.phase} disabled={!isUnlocked}>
              <AccordionTrigger className="text-xl font-semibold hover:no-underline md:text-2xl disabled:cursor-not-allowed disabled:opacity-50">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <phase.Icon className="h-8 w-8 text-primary" />
                    <span>{phase.name}</span>
                  </div>
                  <div className="mr-4">
                    {isCompleted ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : isUnlocked ? null : (
                      <Lock className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <p className="text-muted-foreground pl-12">{phase.description}</p>
                
                {!isCompleted && remainingModules.length > 0 && (
                  <div className="pl-12 pt-2">
                    <Card className="bg-background/50 border-dashed">
                      <CardHeader className="p-4 pb-3">
                        <CardTitle className="text-base font-semibold">
                          Módulos Restantes en la Fase ({remainingModules.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex flex-wrap gap-2">
                          {remainingModules.map((module, r_index) => (
                            <Badge key={module.id} variant={r_index === 0 ? "default" : "secondary"} className="flex items-center">
                              {r_index === 0 ? 
                                <Rocket className="mr-1.5 h-4 w-4" /> :
                                <Lock className="mr-1.5 h-4 w-4" />
                              }
                              {module.name}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
                
                <div className="pl-12 space-y-4">
                  {phase.modules.map((module) => {
                      const moduleUnlocked = isModuleUnlocked(module.id);
                      const moduleIsCompleted = isModuleCompleted(module.id, phase);

                      const completedTopicsInModule = module.topics.filter(t => isTopicCompleted(t.id)).length;
                      const totalTopicsInModule = module.topics.length;
                      const moduleProgress = totalTopicsInModule > 0 ? (completedTopicsInModule / totalTopicsInModule) * 100 : 0;
                      
                      return (
                          <Card key={module.id} className={cn("transition-all", !moduleUnlocked && "bg-muted/50 border-dashed opacity-60")}>
                              <CardHeader>
                                 <div className="flex w-full items-center justify-between">
                                      <CardTitle className="text-lg md:text-xl">{module.name}</CardTitle>
                                      <div className="flex items-center gap-2">
                                        {moduleIsCompleted ? <Badge variant="secondary" className="border-green-500/50 text-green-500">Completado</Badge> : !moduleUnlocked ? <Lock className="h-5 w-5 text-muted-foreground" /> : null}
                                      </div>
                                 </div>
                                 <CardDescription>{module.description}</CardDescription>
                                  {moduleUnlocked && totalTopicsInModule > 0 && (
                                  <div className="pt-4">
                                      <div className="flex justify-between items-center mb-2">
                                          <span className="text-sm text-muted-foreground">Progreso del Módulo</span>
                                          <span className="text-sm font-semibold">{completedTopicsInModule} / {totalTopicsInModule} Temas</span>
                                      </div>
                                      <Progress value={moduleProgress} className="h-2" />
                                  </div>
                                  )}
                              </CardHeader>
                              {moduleUnlocked && (
                                  <>
                                  <CardContent className="flex flex-col gap-4">
                                  {module.topics.map((topic) => {
                                      const topicDone = isTopicCompleted(topic.id);
                                      return (
                                          <Card key={topic.id} className={cn("overflow-hidden bg-background/50", topicDone && "border-green-500/50")}>
                                              <CardHeader>
                                              <div className="flex items-center justify-between">
                                                  <div className="flex items-center gap-3">
                                                      <topic.Icon className="h-6 w-6 text-accent"/>
                                                      <CardTitle className="text-base font-medium">{topic.name}</CardTitle>
                                                  </div>
                                                  {topicDone && <CheckCircle className="h-5 w-5 text-green-500" />}
                                              </div>
                                              <CardDescription className="pt-2">{topic.description}</CardDescription>
                                              </CardHeader>
                                              <CardContent className="flex flex-wrap gap-3">
                                              {allLessons.some(l => l.topicId === topic.id) && (
                                                  <Button variant="outline" size="sm" onClick={() => setActiveModal({ type: 'lesson', topic, phase: null, module: null })}>
                                                  <BookOpen className="mr-2 h-4 w-4" /> Aprender
                                                  </Button>
                                              )}
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
                                                  <Button variant="outline" size="sm" onClick={() => setActiveModal({ type: 'quiz', topic, phase: null, module: null })} disabled={topicDone}>
                                                      <Swords className="mr-2 h-4 w-4" /> 
                                                      {topicDone ? 'Examen Completado' : 'Examen del Tema'}
                                                  </Button>
                                              )}
                                              </CardContent>
                                          </Card>
                                      )
                                  })}
                              </CardContent>
                              <CardFooter>
                                  {!moduleIsCompleted && (
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

                {!isCompleted && (
                  <div className="mt-8 flex flex-col items-center border-t pt-8">
                    <p className="text-center text-muted-foreground mb-4">Completa todos los módulos para realizar el examen final.</p>
                    <Button onClick={() => setActiveModal({ type: 'quiz', phase, topic: null, module: null })} size="lg" className="glow-border" disabled={!isModuleCompleted(phase.modules[phase.modules.length - 1].id, phase)}>
                        <Trophy className="mr-2 h-5 w-5"/> Examen Final de Fase {phase.phase}
                    </Button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
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
        note={activeModal.topic ? getNote(activeModal.topic.id) : ""}
        onNoteChange={(newNote) => activeModal.topic && setNote(activeModal.topic.id, newNote)}
      />

      <LessonModal
        isOpen={activeModal.type === 'lesson'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null, module: null })}
        topic={activeModal.topic}
      />

      <QuizModal 
        isOpen={activeModal.type === 'quiz'}
        onOpenChange={() => setActiveModal({ type: null, topic: null, phase: null, module: null })}
        phase={activeModal.phase}
        topic={activeModal.topic}
        module={activeModal.module}
        onQuizComplete={(passed, score, total) => {
            if (activeModal.phase) {
                recordQuizScore({
                  id: `phase-${activeModal.phase.phase}-${Date.now()}`,
                  date: new Date().toISOString(),
                  type: 'phase',
                  targetId: `phase-${activeModal.phase.phase}`,
                  targetName: activeModal.phase.name,
                  score,
                  total,
                  passed,
                });
                handlePhaseQuizComplete(passed, activeModal.phase.phase);
            } else if (activeModal.module) {
                recordQuizScore({
                  id: `module-${activeModal.module.id}-${Date.now()}`,
                  date: new Date().toISOString(),
                  type: 'module',
                  targetId: activeModal.module.id,
                  targetName: activeModal.module.name,
                  score,
                  total,
                  passed,
                });
                handleModuleQuizComplete(passed);
            } else if (activeModal.topic) {
                recordQuizScore({
                  id: `topic-${activeModal.topic.id}-${Date.now()}`,
                  date: new Date().toISOString(),
                  type: 'topic',
                  targetId: activeModal.topic.id,
                  targetName: activeModal.topic.name,
                  score,
                  total,
                  passed,
                });
                if (passed) {
                    completeTopic(activeModal.topic.id);
                    toast({
                        title: "¡Tema dominado!",
                        description: "Has aprobado el examen de este tema. ¡Sigue así!",
                    });
                }
                setActiveModal({ type: null, topic: null, phase: null, module: null });
            }
        }}
      />
    </div>
  )
}
