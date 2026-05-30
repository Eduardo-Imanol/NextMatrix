"use client";

// LearningContext manages the user's learning progress across the roadmap.
// It tracks unlocked phases/modules, completed topics/lessons, notes, and quiz scores,
// persisting state to localStorage for continuity across sessions.

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { roadmapData, type Phase, type Topic, type Module } from '@/lib/data';

// Data types for learning progress tracking

export interface QuizScore {
  id: string;
  date: string;
  type: 'topic' | 'module' | 'phase';
  targetId: string;
  targetName: string;
  score: number;
  total: number;
  passed: boolean;
}

// Core state structure tracking all learning progress data
interface LearningState {
  unlockedPhases: Set<number>;     // Phases the user can access
  unlockedModules: Set<string>;    // Modules within unlocked phases
  completedTopics: Set<string>;    // Topics finished by the user
  completedLessons: Set<string>;   // Individual lessons completed
  notes: Record<string, string>;   // User notes keyed by topic ID
  quizScores: QuizScore[];         // History of all quiz attempts
}

// Public API exposed to consuming components via useLearning()
interface LearningContextType extends LearningState {
  unlockPhase: (phaseNumber: number) => void;
  unlockModule: (moduleId: string) => void;
  completeTopic: (topicId: string) => void;
  completeLesson: (topicId: string) => void;
  isLessonCompleted: (topicId: string) => boolean;
  setNote: (topicId: string, note: string) => void;
  recordQuizScore: (score: QuizScore) => void;
  isPhaseUnlocked: (phaseNumber: number) => boolean;
  isPhaseCompleted: (phaseNumber: number) => boolean;
  isModuleUnlocked: (moduleId: string) => boolean;
  isModuleCompleted: (moduleId: string, phase: Phase) => boolean;
  isTopicCompleted: (topicId: string) => boolean;
  getNote: (topicId: string) => string;
  getTopicQuizScore: (topicId: string) => QuizScore | undefined;
  getModuleQuizScores: (module: Module) => QuizScore[];
  getPhaseQuizScores: (phase: Phase) => QuizScore[];
  resetProgress: () => void;
}

// LocalStorage key for persisting learning progress
const STORAGE_KEY = 'nextmatrix-learning-progress';

// Deserializes learning state from localStorage, returning null if unavailable or corrupt
function loadFromStorage(): LearningState | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return {
      unlockedPhases: new Set(parsed.unlockedPhases),
      unlockedModules: new Set(parsed.unlockedModules),
      completedTopics: new Set(parsed.completedTopics),
      completedLessons: new Set(parsed.completedLessons || []),
      notes: parsed.notes || {},
      quizScores: parsed.quizScores || [],
    };
  } catch {
    return null;
  }
}

// Serializes and persists learning state to localStorage (handles Set→Array conversion)
function saveToStorage(state: LearningState) {
  if (typeof window === 'undefined') return;
  try {
    const toStore = {
      unlockedPhases: Array.from(state.unlockedPhases),
      unlockedModules: Array.from(state.unlockedModules),
      completedTopics: Array.from(state.completedTopics),
      completedLessons: Array.from(state.completedLessons),
      notes: state.notes,
      quizScores: state.quizScores,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  } catch {
    // localStorage full or unavailable
  }
}

// Returns stored state or initializes with phase 1 and its first module unlocked
function getInitialState(): LearningState {
  const stored = loadFromStorage();
  if (stored) return stored;

  const firstModule = roadmapData[0]?.modules[0];
  return {
    unlockedPhases: new Set([1]),
    unlockedModules: new Set(firstModule ? [firstModule.id] : []),
    completedTopics: new Set(),
    completedLessons: new Set(),
    notes: {},
    quizScores: [],
  };
}

const LearningContext = createContext<LearningContextType | null>(null);

// Provider component that manages all learning state and exposes actions to children
export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LearningState>(getInitialState);

  // Persist state changes to localStorage on every update
  useEffect(() => {
    saveToStorage(state);
  }, [state]);

  // Unlocks a phase and auto-unlocks its first module
  const unlockPhase = useCallback((phaseNumber: number) => {
    setState(prev => {
      const newSet = new Set(prev.unlockedPhases).add(phaseNumber);
      const firstModule = roadmapData.find(p => p.phase === phaseNumber)?.modules[0];
      const newModules = new Set(prev.unlockedModules);
      if (firstModule) newModules.add(firstModule.id);
      return { ...prev, unlockedPhases: newSet, unlockedModules: newModules };
    });
  }, []);

  // Unlocks a specific module within a phase
  const unlockModule = useCallback((moduleId: string) => {
    setState(prev => ({
      ...prev,
      unlockedModules: new Set(prev.unlockedModules).add(moduleId),
    }));
  }, []);

  // Marks a topic as completed
  const completeTopic = useCallback((topicId: string) => {
    setState(prev => ({
      ...prev,
      completedTopics: new Set(prev.completedTopics).add(topicId),
    }));
  }, []);

  // Marks an individual lesson as completed (distinct from topic completion)
  const completeLesson = useCallback((topicId: string) => {
    setState(prev => ({
      ...prev,
      completedLessons: new Set(prev.completedLessons).add(topicId),
    }));
  }, []);

  const isLessonCompleted = useCallback((topicId: string) => {
    return state.completedLessons.has(topicId);
  }, [state.completedLessons]);

  // Saves or updates a user note for a specific topic
  const setNote = useCallback((topicId: string, note: string) => {
    setState(prev => ({
      ...prev,
      notes: { ...prev.notes, [topicId]: note },
    }));
  }, []);

  // Appends a new quiz score to the history
  const recordQuizScore = useCallback((score: QuizScore) => {
    setState(prev => ({
      ...prev,
      quizScores: [...prev.quizScores, score],
    }));
  }, []);

  const isPhaseUnlocked = useCallback((phaseNumber: number) => {
    return state.unlockedPhases.has(phaseNumber);
  }, [state.unlockedPhases]);

  // A phase is considered completed when the next phase is unlocked
  const isPhaseCompleted = useCallback((phaseNumber: number) => {
    return state.unlockedPhases.has(phaseNumber + 1);
  }, [state.unlockedPhases]);

  const isModuleUnlocked = useCallback((moduleId: string) => {
    return state.unlockedModules.has(moduleId);
  }, [state.unlockedModules]);

  // A module is completed when the next module is unlocked, or phase advances if last module
  const isModuleCompleted = useCallback((moduleId: string, phase: Phase) => {
    const moduleIndex = phase.modules.findIndex(m => m.id === moduleId);
    const nextModule = phase.modules[moduleIndex + 1];
    if (nextModule) {
      return state.unlockedModules.has(nextModule.id);
    }
    return state.unlockedPhases.has(phase.phase + 1);
  }, [state.unlockedModules, state.unlockedPhases]);

  const isTopicCompleted = useCallback((topicId: string) => {
    return state.completedTopics.has(topicId);
  }, [state.completedTopics]);

  const getNote = useCallback((topicId: string) => {
    return state.notes[topicId] ?? '';
  }, [state.notes]);

  // Returns the most recent quiz score for a given topic
  const getTopicQuizScore = useCallback((topicId: string) => {
    return state.quizScores.find(s => s.type === 'topic' && s.targetId === topicId);
  }, [state.quizScores]);

  // Returns all quiz scores for topics within a specific module
  const getModuleQuizScores = useCallback((module: Module) => {
    const topicIds = new Set(module.topics.map(t => t.id));
    return state.quizScores.filter(s => s.type === 'topic' && topicIds.has(s.targetId));
  }, [state.quizScores]);

  // Returns all quiz scores for topics across all modules in a phase
  const getPhaseQuizScores = useCallback((phase: Phase) => {
    const topicIds = new Set(phase.modules.flatMap(m => m.topics.map(t => t.id)));
    return state.quizScores.filter(s => s.type === 'topic' && topicIds.has(s.targetId));
  }, [state.quizScores]);

  // Resets all progress to initial state (phase 1 unlocked only)
  const resetProgress = useCallback(() => {
    const fresh: LearningState = {
      unlockedPhases: new Set([1]),
      unlockedModules: new Set(roadmapData[0]?.modules[0] ? [roadmapData[0].modules[0].id] : []),
      completedTopics: new Set(),
      completedLessons: new Set(),
      notes: {},
      quizScores: [],
    };
    setState(fresh);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    ...state,
    unlockPhase,
    unlockModule,
    completeTopic,
    completeLesson,
    isLessonCompleted,
    setNote,
    recordQuizScore,
    isPhaseUnlocked,
    isPhaseCompleted,
    isModuleUnlocked,
    isModuleCompleted,
    isTopicCompleted,
    getNote,
    getTopicQuizScore,
    getModuleQuizScores,
    getPhaseQuizScores,
    resetProgress,
  }), [
    state,
    unlockPhase,
    unlockModule,
    completeTopic,
    completeLesson,
    isLessonCompleted,
    setNote,
    recordQuizScore,
    isPhaseUnlocked,
    isPhaseCompleted,
    isModuleUnlocked,
    isModuleCompleted,
    isTopicCompleted,
    getNote,
    getTopicQuizScore,
    getModuleQuizScores,
    getPhaseQuizScores,
    resetProgress,
  ]);

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}

// Custom hook for consuming components to access learning state and actions
export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}
