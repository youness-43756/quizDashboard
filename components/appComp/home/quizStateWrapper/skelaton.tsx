import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from '@/components/ui/skeleton';

export default function Skelaton() {
  return (
    <>
    <Accordion type="single" collapsible>
      <AccordionItem value={"i-1"}>
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-8" />
          </div>
        </AccordionTrigger>
        <AccordionContent className='space-y-8'>
          <div className=''>
            <Skeleton className="h-6 w-full mb-2" />
            <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 gap-y-2 px-4">
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value={"i-1"}>
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-8" />
          </div>
        </AccordionTrigger>
        <AccordionContent className='space-y-8'>
          <div className=''>
            <Skeleton className="h-6 w-full mb-2" />
            <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 gap-y-2 px-4">
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value={"i-1"}>
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-8" />
          </div>
        </AccordionTrigger>
        <AccordionContent className='space-y-8'>
          <div className=''>
            <Skeleton className="h-6 w-full mb-2" />
            <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 gap-y-2 px-4">
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value={"i-1"}>
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-8" />
          </div>
        </AccordionTrigger>
        <AccordionContent className='space-y-8'>
          <div className=''>
            <Skeleton className="h-6 w-full mb-2" />
            <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 gap-y-2 px-4">
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>
  )
}
