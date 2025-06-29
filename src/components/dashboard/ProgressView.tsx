"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const chartData = [
    { name: 'Fase 1', score: 80 },
    { name: 'Fase 2', score: 95 },
    { name: 'Fase 3', score: 70 },
    { name: 'Fase 4', score: 40 },
    { name: 'Fase 5', score: 10 },
];

export function ProgressView() {
    const overallProgress = chartData.reduce((acc, curr) => acc + curr.score, 0) / chartData.length;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline md:text-4xl">Dashboard de Progreso</h1>
                <p className="mt-2 text-muted-foreground md:text-lg">
                    Visualiza tu avance en el dominio de Next.js.
                </p>
            </div>
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
                         <p className="text-center text-3xl font-bold text-accent">INTERMEDIO</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Temas Completados</CardTitle>
                         <CardDescription>Total de temas estudiados.</CardDescription>
                    </CardHeader>
                     <CardContent className="flex items-center justify-center">
                         <p className="text-center text-5xl font-bold">15 <span className="text-lg text-muted-foreground">/ 25</span></p>
                    </CardContent>
                </Card>
            </div>
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
