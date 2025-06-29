"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CodePlayground } from "./CodePlayground"
import { roadmapData } from "@/lib/data"

export function RoadmapView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline md:text-4xl">Roadmap de Next.js</h1>
        <p className="mt-2 text-muted-foreground md:text-lg">
          Tu viaje para dominar Next.js, fase por fase.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {roadmapData.map((phase, index) => (
          <AccordionItem value={`item-${index}`} key={phase.phase} className="border-border/50">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline md:text-xl">
              <div className="flex items-center gap-4">
                <phase.Icon className="h-6 w-6 text-primary" />
                <span>{phase.name}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-6 pl-4 pt-4">
              <p className="text-muted-foreground">{phase.description}</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                {phase.topics.map((topic) => (
                   <li key={topic.name}>
                     <span className="font-semibold">{topic.name}:</span> {topic.description}
                   </li>
                ))}
              </ul>
              <CodePlayground />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
