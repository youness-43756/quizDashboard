"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { QuizContext } from "@/context/contextProvider";
import { useContext } from "react";
import { LoaderCircle } from "lucide-react"

export function SelectSubject() {
  const context = useContext(QuizContext);
  if (!context) {
    return null;
  }
  const { selectedSubject, setSelectedSubject, selectItems } = context;
  const handleValueChange = (value: string) => {
    setSelectedSubject(value);
  };
  return (
    <Select onValueChange={handleValueChange} defaultValue={selectedSubject}>
      <SelectTrigger className="w-[180px] capitalize shadow-sm">
        <SelectValue placeholder="Select a Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            selectItems.length > 0 ? (
              selectItems.map(item => <SelectItem key={item} value={item} className="capitalize">{item}</SelectItem>)
            ) :
              <SelectLabel>
                <div className="flex justify-center">
                  <LoaderCircle className="animate-spin" />
                </div>
              </SelectLabel>
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
