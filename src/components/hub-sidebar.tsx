'use client'

import * as React from "react";
import { School, BookOpen, Clock, Calendar, CreditCard, BookIcon } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";
import Link from "next/link";

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    link: string
}

export function HubSidebar() {
    const { isOpen } = useSidebarStore();
    
    return (
        <div className={`bg-white h-full shadow-md shadow-gray-400 ${
            isOpen ? 'w-64' : 'w-16'
        }`}>
            <div className="p-4">
                {/* Logo/Header */}
                <div className="flex items-center space-x-2 pb-6">
                    <div className="w-8 h-8 bg-amber rounded-md" />
                    {isOpen && <h2 className="text-lg font-bold">Instituição</h2>}
                </div>

                {/* Seção Acadêmico */}
                <div className="mb-6">
                    { isOpen && <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider px-3 mb-2">ACADÊMICO</h3>}
                    <div className="space-y-1">
                        <SidebarItem link="/tests" icon={<BookOpen size={18} />} text="Avaliações e Boletim" />
                        <SidebarItem link="/attendance" icon={<Clock size={18} />} text="Faltas e Atrasos" />
                        <SidebarItem link="/" icon={<Calendar size={18} />} text="Grade Horária" />
                        <SidebarItem link="/" icon={<School size={18} />} text="Diário de Aula" />
                        <SidebarItem link="/id" icon={<CreditCard size={18} />} text="Carteirinha Virtual" />
                    </div>
                </div>

                {/* Divisor */}
                <hr className="my-4" />

                {/* Seção Material Didático */}
                <div>
                    { isOpen && <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider px-3 mb-2">Material Didático</h3>}
                    {/* Itens podem ser adicionados aqui posteriormente */}
                    <SidebarItem link="/neuroshelf_access" icon={<BookIcon size={18} />} text="NeuroShelf" />
                </div>
            </div>
        </div>
    )
}

function SidebarItem({ icon, text, link }: SidebarItemProps) {
    const { isOpen } = useSidebarStore();
    
    return (
        <button className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left cursor-pointer">
            <Link href={link} className={`flex items-center ${isOpen ? 'space-x-2 w-full' : 'w-full justify-center'}`}>
                <span className="text-gray-600">{icon}</span>
                {isOpen && <span className="font-medium text-gray-800">{text}</span>}
            </Link>
        </button>
    );
}