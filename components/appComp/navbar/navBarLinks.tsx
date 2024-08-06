"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HomeIcon, PlusIcon } from "lucide-react";

const navigation = [
    { label: "Home", href: "/", icon: <HomeIcon className="font-bold" /> },
    { label: "New Subject", href: "/new-subject", icon: <PlusIcon /> },
];

export default function NavBarLinks() {
    const pathname = usePathname();
    return (
        <>
            {
                navigation.map(link => (
                    <Button key={link.label} variant={"ghost"} className={clsx(" py-1 rounded-lg text-lg text-muted-foreground", pathname === link.href && "bg-accent text-black font-semibold")} asChild>
                        <Link href={link.href} className="flex gap-2">
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    </Button>
                ))
            }
        </>
    )
}
