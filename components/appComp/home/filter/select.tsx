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
      <SelectTrigger className="md:w-[180px] w-[130px] capitalize shadow-sm">
        <SelectValue placeholder="Select a Subject" />
      </SelectTrigger>
      <SelectContent className="z-[1000] w-[180px] md:w-[220px]">
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
