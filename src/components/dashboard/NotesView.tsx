"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// A simple markdown parser for demonstration
const parseMarkdown = (text: string) => {
  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3 border-b pb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4 border-b pb-2">$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-muted text-primary font-code px-1 rounded">$1</code>')
    .replace(/^\s*[-*] (.*)/gim, '<li class="ml-4">$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n/g, '<br />');
};

export function NotesView() {
    const [markdown, setMarkdown] = useState(`# Mi nota sobre Next.js

## Server Components
Son una **gran** característica de Next.js 13+.

- Se renderizan en el servidor.
- No envían JS al cliente.
- Mejoran el ` + "`performance`" + ` de la app.

### Ejemplo de código
\`\`\`jsx
async function Page() {
    const data = await fetch('...');
    return <div>{data.name}</div>
}
\`\`\``);
    const [preview, setPreview] = useState('');
    const { toast } = useToast();

    React.useEffect(() => {
        setPreview(parseMarkdown(markdown));
    }, [markdown]);
    
    const handleSave = () => {
        toast({
            title: "Nota guardada",
            description: "Tus notas se han guardado localmente.",
        })
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline md:text-4xl">Bloc de Notas</h1>
                <p className="mt-2 text-muted-foreground md:text-lg">
                    Apunta tus ideas y aprendizajes. Estilo Markdown.
                </p>
            </div>
            <Card>
                 <CardHeader>
                    <CardTitle>Editor de Notas</CardTitle>
                    <CardDescription className="flex justify-between items-center">
                        <span>Escribe en el panel izquierdo y ve la vista previa en el derecho.</span>
                        <Button onClick={handleSave}>Guardar Nota</Button>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Textarea
                            value={markdown}
                            onChange={(e) => setMarkdown(e.target.value)}
                            className="h-96 min-h-[300px] font-code text-base"
                            placeholder="Escribe tu markdown aquí..."
                        />
                        <div 
                            className="prose prose-invert h-96 min-h-[300px] overflow-y-auto rounded-md border border-input p-4"
                            dangerouslySetInnerHTML={{ __html: preview }}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
