"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, LayoutDashboard, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { RoadmapView } from './RoadmapView';
import { ProgressView } from './ProgressView';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';


type View = 'roadmap' | 'progress';

const navItems = [
  { id: 'roadmap', label: 'Roadmap', icon: BookOpen },
  { id: 'progress', label: 'Progreso', icon: LayoutDashboard },
];

export function Dashboard() {
  const [activeView, setActiveView] = useState<View>('roadmap');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case 'roadmap':
        return <RoadmapView />;
      case 'progress':
        return <ProgressView />;
      default:
        return <RoadmapView />;
    }
  };

  const NavContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex h-20 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="NextMatrix Logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold font-headline glow-text">
            NextMatrix
          </h1>
        </div>
        <div className="lg:hidden">
            <ThemeToggle />
        </div>
      </div>
      <nav className="flex-1 space-y-2 px-4">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeView === item.id ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start text-base',
              activeView === item.id && 'text-primary font-semibold'
            )}
            onClick={() => {
              setActiveView(item.id as View);
              setIsSheetOpen(false);
            }}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="mt-auto hidden p-4 lg:block">
        <ThemeToggle />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full bg-background font-body">
      <aside className="hidden w-72 flex-col border-r border-border/50 lg:flex">
        <NavContent />
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-20 items-center justify-between border-b border-border/50 px-4 lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Use the links below to navigate the application.</SheetDescription>
              <NavContent />
            </SheetContent>
          </Sheet>
           <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="NextMatrix Logo" width={32} height={32} className="rounded-full" />
                <span className="text-xl font-bold font-headline glow-text">NextMatrix</span>
            </div>
            <div>{/* Placeholder for potential actions */}</div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
