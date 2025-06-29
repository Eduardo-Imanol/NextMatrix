"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Phase } from '@/lib/data';
import { Eye, Pencil } from 'lucide-react';

const parseMarkdown = (text: string) => {
  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3 border-b pb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4 border-b pb-2">$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-muted text-primary font-code px-1 rounded">$1</code>')
    .replace(/^\s*[-*] (.*)/gim, '<li class="ml-4 list-disc">$1</li>')
    .replace(/\n/g, '<br />');
};

interface NotesModalProps {
    phase: Phase | null;
    note: string;
    onNoteChange: (newNote: string) => void;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export function NotesModal({ phase, note, onNoteChange, isOpen, onOpenChange }: NotesModalProps) {
    const [preview, setPreview] = useState('');
    const [isEditing, setIsEditing] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        setPreview(parseMarkdown(note));
    }, [note]);

    useEffect(() => {
        if (isOpen) {
            setIsEditing(note.length === 0);
        }
    }, [isOpen, note]);
    
    const handleSave = () => {
        toast({
            title: "Nota guardada",
            description: "Tus cambios se han guardado.",
        });
        setIsEditing(false);
    }
    
    if (!phase) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent 
                className="max-w-3xl"
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
            >
                <DialogHeader>
                    <DialogTitle>Notas: {phase.name}</DialogTitle>
                    <div className="flex justify-between items-center pt-2">
                        <DialogDescription>
                            Tus apuntes personales para esta fase.
                        </DialogDescription>
                        <div className="flex gap-2">
                            <Button onClick={handleSave} disabled={!isEditing}>Guardar</Button>
                            <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                                {isEditing ? <Eye className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                                <span className="sr-only">{isEditing ? "Ver" : "Editar"}</span>
                            </Button>
                        </div>
                    </div>
                </DialogHeader>
                <div className="mt-4">
                    {isEditing ? (
                        <Textarea
                            value={note}
                            onChange={(e) => onNoteChange(e.target.value)}
                            className="h-96 min-h-[400px] font-code text-base"
                            placeholder="Escribe tus notas en formato Markdown aquí..."
                        />
                    ) : (
                        <div 
                            className="prose dark:prose-invert h-96 min-h-[400px] w-full max-w-none overflow-y-auto rounded-md border border-input p-4"
                            dangerouslySetInnerHTML={{ __html: preview || "<p class='text-muted-foreground'>No hay notas todavía.</p>" }}
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
