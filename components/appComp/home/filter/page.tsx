"use client"
import { useForm } from 'react-hook-form'
import {
    Form,
    FormField,
    FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"

export default function Filter() {
    const form = useForm({
        defaultValues: {
            search: ""
        },
    })
    function onchange(values: any) {
    }
    return (
        <Form {...form}>
            <form onChange={form.handleSubmit(onchange)} className="max-w-xs w-full">
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem>
                            <Input placeholder="Search a question.." {...field} className='w-full shadow-sm' />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
