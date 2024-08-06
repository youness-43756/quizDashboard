"use client";
import { createContext, useEffect, useState } from "react";
import { QuizContextType, NewStateTypes } from "./contextTypes";
import { DeleteQuiz, GetQuizzes, NewQuiz } from "./actions";
import { toast } from "react-hot-toast";

export const QuizContext = createContext<QuizContextType | undefined>(
    undefined
);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [quizState, setQuizState] = useState<NewStateTypes | undefined>()
    const [selectedSubject, setSelectedSubject] = useState<string>("all")
    const [selectItems, setSelectItems] = useState<string[]>([])
    const [load, setLoad] = useState<boolean>(false)
    const [deleteLoader, setDeleteLoader] = useState<boolean>(false)

    async function GetQuizState(sbj: string) {
        setLoad(() => true);
        try {
            //? Get "quizState" data from MongoDB:
            const res = await GetQuizzes(sbj);

            if (!res.ok) {
                setLoad(() => false);
                return;
            }
            const data = await res.json();

            //? Update quizState: 
            setQuizState(data.newState)
            setLoad(() => false);

            //? Update selectItems state
            const newItems: string[] = ["all"];
            data.newState.forEach((d: any) => {
                if (!newItems.includes(d.item.subject)) {
                    newItems.push(d.item.subject);
                }
            });
            setSelectItems(prev => Array.from(new Set([...prev, ...newItems])));
        } catch (error: any) {
            setLoad(() => false);
            throw new Error("Failed to get quizzes", error.message);
        }
    }

    //! Update quizState by selected subject:
    useEffect(() => {
        GetQuizState(selectedSubject);
    }, [selectedSubject])


    //! New subject:
    async function SaveQuizToMongoDB(subject: any) {
        setLoad(() => true)
        try {
            const res = await NewQuiz(subject);
            const data = await res.json();
            if (!res.ok) {
                setLoad(() => false)
                toast.error(data.message);
                return;
            }
            toast.success(data.message);
            setLoad(() => false)
            //? Update quizSubject
            GetQuizState(selectedSubject);
        } catch (error: any) {
            throw new Error("Failed to save subject:", error.message);

        }
    }

    //! Delete subject:
    async function DeleteSubject(statetId: string, subject: string) {
        setDeleteLoader(() => true)
        try {
            const res = await DeleteQuiz(statetId);
            if (!res.ok) {
                setDeleteLoader(() => false)
                toast.error("Unsuccessful subject deleting!");
            }
            const data = await res.json();
            toast.success(data.message)

            //? Update quizSubject
            GetQuizState(selectedSubject);

            //? Update setSelectItems:
            setSelectItems(selectItems.filter(s => s !== subject));
            setDeleteLoader(() => false)
        } catch (error: any) {
            setDeleteLoader(() => false)
            throw new Error("Failed to delete subject:", error.message);

        }
    }

    return (
        <QuizContext.Provider value={{
            quizState,setQuizState,

            selectedSubject,setSelectedSubject,

            load,setLoad,

            selectItems,setSelectItems,

            deleteLoader, setDeleteLoader,

            SaveQuizToMongoDB,
            GetQuizState,
            DeleteSubject
        }}>{children}</QuizContext.Provider>
    )
};
