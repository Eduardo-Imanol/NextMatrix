// ProgressView.tsx
// Dashboard component that visualizes the user's learning progress across all roadmap phases.
// Displays summary cards for overall progress, competence level, completed topics, quiz stats,
// and a bar chart showing per-phase performance metrics.

"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLearning } from '@/contexts/LearningContext';
import { roadmapData, allQuizQuestions, allFlashcards } from '@/lib/data';
import { useMemo } from 'react';

export function ProgressView() {
  // Retrieve user learning state from context
  const { completedTopics, quizScores, isPhaseUnlocked } = useLearning();

  // Calculate the total number of topics across all roadmap phases
  const totalTopics = useMemo(() => {
    return roadmapData.reduce((acc, phase) => {
      return acc + phase.modules.reduce((modAcc, module) => modAcc + module.topics.length, 0);
    }, 0);
  }, []);

  // Number of topics the user has completed
  const completedCount = completedTopics.size;

  // Overall progress as a percentage of completed topics
  const overallProgress = totalTopics > 0 ? (completedCount / totalTopics) * 100 : 0;

  // Build chart data: for each phase, compute completion ratio and best quiz score
  const chartData = useMemo(() => {
    return roadmapData.map(phase => {
      const phaseTopics = phase.modules.flatMap(m => m.topics);
      const phaseCompleted = phaseTopics.filter(t => completedTopics.has(t.id)).length;
      const phaseTotal = phaseTopics.length;
      // Find quiz scores for this phase
      const phaseQuizScores = quizScores.filter(s => s.type === 'phase' && s.targetId === `phase-${phase.phase}`);
      // Use the best quiz score if available, otherwise fall back to completion ratio
      const bestPhaseScore = phaseQuizScores.length > 0
        ? Math.max(...phaseQuizScores.map(s => Math.round((s.score / s.total) * 100)))
        : (phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0);
      return {
        name: `Fase ${phase.phase}`,
        score: bestPhaseScore,
        completed: phaseCompleted,
        total: phaseTotal,
      };
    });
  }, [completedTopics, quizScores]);

  // Derive competence level label based on overall progress thresholds
  const competenceLevel = useMemo(() => {
    if (overallProgress >= 90) return 'EXPERTO';
    if (overallProgress >= 70) return 'AVANZADO';
    if (overallProgress >= 40) return 'INTERMEDIO';
    if (overallProgress >= 15) return 'PRINCIPIANTE';
    return 'INICIANTE';
  }, [overallProgress]);

  // Compute quiz statistics
  const totalQuizzes = quizScores.length;
  const passedQuizzes = quizScores.filter(s => s.passed).length;
  // Average score across all quizzes, normalized to 0-100
  const avgScore = totalQuizzes > 0
    ? Math.round(quizScores.reduce((acc, s) => acc + (s.score / s.total) * 100, 0) / totalQuizzes)
    : 0;

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold font-headline md:text-4xl">Dashboard de Progreso</h1>
        <p className="mt-2 text-muted-foreground md:text-lg">
          Visualiza tu avance en el dominio de Next.js.
        </p>
      </div>

      {/* Summary cards row: overall progress, competence level, completed topics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Progreso General</CardTitle>
            <CardDescription>Tu avance a través de todas las fases.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Progress value={overallProgress} />
            <p className="text-center text-2xl font-bold text-primary">{Math.round(overallProgress)}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nivel de Competencia</CardTitle>
            <CardDescription>Estimación basada en tu progreso.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-center text-3xl font-bold text-accent">{competenceLevel}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Temas Completados</CardTitle>
            <CardDescription>Total de temas estudiados.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-center text-5xl font-bold">{completedCount} <span className="text-lg text-muted-foreground">/ {totalTopics}</span></p>
          </CardContent>
        </Card>
      </div>

      {/* Quiz stats row: exams taken, average score, completed phases */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Exámenes Realizados</CardTitle>
            <CardDescription>Total de intentos de examen.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-5xl font-bold">{totalQuizzes}</p>
            <p className="text-sm text-muted-foreground">{passedQuizzes} aprobados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Puntuación Promedio</CardTitle>
            <CardDescription>Promedio en todos los exámenes.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-center text-5xl font-bold text-primary">{avgScore}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fases Completadas</CardTitle>
            <CardDescription>Fases desbloqueadas.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-center text-5xl font-bold">{isPhaseUnlocked(roadmapData.length + 1) ? roadmapData.length : roadmapData.filter(p => isPhaseUnlocked(p.phase)).length} <span className="text-lg text-muted-foreground">/ {roadmapData.length}</span></p>
          </CardContent>
        </Card>
      </div>

      {/* Bar chart showing best quiz score per phase */}
      <Card>
        <CardHeader>
          <CardTitle>Rendimiento por Fase</CardTitle>
          <CardDescription>Puntuación media en los exámenes de cada fase.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
