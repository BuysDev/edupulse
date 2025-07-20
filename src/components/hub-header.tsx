'use client'

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import { User, BellIcon, MenuIcon, XIcon } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";

export function HubHeader() {
    const { toggle, isOpen } = useSidebarStore();
    return (
        <header className="top-0 sticky p-4 flex items-center justify-between shadow-md w-full">
            <h1 className="text-2xl font-bold">EduPulse</h1>
            <div className="flex items-center flex-row gap-2">
                <button className="rounded-full font-bold cursor-pointer flex items-center justify-center w-10 h-10">
                    <BellIcon className="w-6 h-6" />
                </button>
                <div className="bg-amber rounded-full font-bold text-black cursor-pointer flex items-center justify-center w-10 h-10 p-0">
                    <Avatar className="w-8 h-8 flex items-center justify-center">
                        <AvatarFallback className="flex items-center justify-center w-full h-full">
                            <User className="w-5 h-5" />
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    {isOpen ? (
                        <XIcon onClick={toggle} className="w-5 h-5 cursor-pointer" />
                    ) : (
                        <MenuIcon onClick={toggle} className="w-5 h-5 cursor-pointer" />
                    )}
                </div>
            </div>
        </header>
    )
}