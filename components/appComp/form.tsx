"use client"
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useContext } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { QuizContext } from '@/context/contextProvider'
import { Input } from '../ui/input'
import { toast } from 'react-hot-toast'
import { LoaderCircle, LoaderIcon } from 'lucide-react'


export default function AddQuizForm() {
    const form = useForm({
        defaultValues: {
            subject: "",
            quiz: [],
        },
    })
    const context = useContext(QuizContext);
    if (!context) {
        return null;
    }
    const { SaveQuizToMongoDB, load } = context;
    function onSubmit(values: any) {
        try {
            values.quiz = JSON.parse(values.quiz)
            SaveQuizToMongoDB(values);
        } catch (error: any) {
            toast.error(
                error.message,
                {
                    duration: 6000,
                }
            );
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Subject id" className='shadow-sm' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Subject title" className='shadow-sm' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="quiz"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Copie here" className='shadow-sm' rows={8} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={load}>Submit {load && <LoaderCircle className='animate-spin ml-2' />} </Button>
            </form>
        </Form>
    )
}
