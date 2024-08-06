"use client"
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HomeIcon, PlusIcon } from "lucide-react";
import { QuizContext } from "@/context/contextProvider";

const navigation = [
    { label: "Home", href: "/", icon: <HomeIcon className="font-bold" /> },
    { label: "New Subject", href: "/new-subject", icon: <PlusIcon /> },
];

export default function NavBarLinks() {
    const pathname = usePathname();
    const context = useContext(QuizContext);
    if (!context) {
        return null;
    }
    const { quizState } = context;
    return (
        <>
            {
                navigation.map(link => (
                    <Button key={link.label} variant={"ghost"} className={clsx(" py-1 rounded-lg text-lg text-muted-foreground", pathname === link.href && "bg-accent text-black font-semibold")} asChild>
                        <Link href={link.href} className="flex gap-2">
                            {link.icon}
                            <span>{link.label}</span>
                            <Badge variant="destructive"
                                className={clsx("float-right", link.label !== "Home" && "hidden")}>
                                {quizState?.length}</Badge>
                        </Link>
                    </Button>
                ))
            }
        </>
    )
}
