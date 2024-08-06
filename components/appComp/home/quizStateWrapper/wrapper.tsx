"use client"
import Skelaton from './skelaton';
import { LoaderCircle, Trash2 } from 'lucide-react'
import React, { useContext } from 'react'
import QuizQuestions from './quizQuestions';
import { Button } from '@/components/ui/button';
import { QuizContext } from '@/context/contextProvider';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Wrapper() {
    const context = useContext(QuizContext);
    if (!context) {
        return null;
    }
    const { quizState, DeleteSubject, load, deleteLoader } = context;
    return (
        <>
            {(load && !quizState) && <Skelaton />}
            {quizState?.length === 0 && <div className='text-center text-muted text-xl font-semibold select-none'>No subjects</div>}
            {
                quizState?.map((quiz) => (
                    <Accordion type="single" collapsible key={quiz.StateId}>
                        <AccordionItem value={quiz.StateId}>
                            <AccordionTrigger>
                                <div className='flex items-center gap-3'>
                                    <h1 className="text-2xl font-semibold">{quiz.item.subject.toUpperCase()}</h1>
                                    <Button size={"none"} variant={"destructive"} className='p-1 z-50' onClick={() => DeleteSubject(quiz.StateId, quiz.item.subject)} asChild>
                                            <Trash2 size={28} />
                                    </Button>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='space-y-8'>
                                {
                                    quiz.item.quiz.map((item: any) => (
                                        <QuizQuestions key={item._id} item={item} />
                                    ))
                                }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }
        </>
    )
}
