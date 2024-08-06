import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavBarLinks from "./navBarLinks"
import { CircleChevronRightIcon } from 'lucide-react'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"} className="md:hidden flex mx-2 mt-1">
          <CircleChevronRightIcon className="w-full" />
        </Button>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>Dashboard</SheetTitle>
        <SheetDescription className="w-full flex flex-col gap-2">
          <NavBarLinks />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
