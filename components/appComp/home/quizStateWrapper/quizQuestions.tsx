import { Input } from '@/components/ui/input'
import React from 'react'

export default function QuizQuestions({ item }: { item: any }) {
    return (
        <div className="px-2">
            {
                item.question.map((qtn: any) => (
                    <div key={item._id} className=''>
                        <p className='font-medium mb-2'>- {qtn.label}</p>
                        <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 gap-y-2 px-4">
                            {
                                qtn.answers.map((ans: any) => <Input key={ans.id} defaultValue={ans.answer} />)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
