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

export default function SubjectsWrapper() {
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
                    <Accordion type="single" collapsible key={quiz.StateId} className='md:px-6 px-2'>
                        <AccordionItem value={quiz.StateId}>
                            <AccordionTrigger>
                                <div className='w-full flex items-center justify-between md:gap-3 gap-1'>
                                    <h1 className="md:text-2xl text-xl font-semibold text-balance flex-1 text-start">{quiz.item.subject.toUpperCase()}</h1>
                                    <Button size={"none"} variant={"destructive"} className='p-1 z-50 mr-1' onClick={() => DeleteSubject(quiz.StateId, quiz.item.subject)} asChild>
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
