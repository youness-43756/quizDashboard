import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useContext } from "react"
import { InfoIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuizContext } from "@/context/contextProvider"

export function DeleteSubjectDialog({ stateId, subject }: { stateId: string, subject: string }) {
    const context = useContext(QuizContext);
    if (!context) {
        return null;
    }
    const { DeleteSubject } = context;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"none"} variant={"destructive"} className='p-1 z-50 md:mr-2 mr-1' asChild>
                    <Trash2Icon size={30} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-w-xs">
                <DialogHeader>
                    <DialogTitle className="leading-8 text-xl"> Are you sure you want to delete the subject <span className="capitalize">&quot;{subject}&quot;</span>?</DialogTitle>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" variant="destructive" onClick={() => DeleteSubject(stateId, subject)} >
                            Delete
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
