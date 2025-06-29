"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Play, RotateCcw, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const defaultCode = `import React from 'react';

export default function App() {
  return <h1>¡Hola, NextMatrix!</h1>;
}`;

export function CodePlayground() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const { toast } = useToast();

  const handleRun = () => {
    setOutput('Ejecutando código...\n\nResultado:\n¡Hola, NextMatrix!');
    toast({
      title: 'Código Ejecutado',
      description: 'La simulación se ha completado.',
    });
  };

  const handleReset = () => {
    setCode(defaultCode);
    setOutput('');
  };

  return (
    <Card className="border-accent/30 bg-background/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-accent">
          <Terminal className="h-5 w-5" />
          <span>Mini Playground</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-48 font-code text-sm"
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex gap-2">
          <Button onClick={handleRun} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
            <Play className="mr-2 h-4 w-4" /> Ejecutar
          </Button>
          <Button onClick={handleReset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" /> Resetear
          </Button>
        </div>
        {output && (
          <div className="w-full rounded-md bg-muted p-4 font-code text-sm text-muted-foreground">
            <pre>{output}</pre>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
