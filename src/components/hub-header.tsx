'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import { User, BellIcon, MenuIcon, XIcon, PencilIcon } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";
import Link from "next/link";

export function HubHeader() {
  const { toggle, isOpen } = useSidebarStore();
  return (
    <header className="top-0 sticky p-4 flex items-center justify-between shadow-md w-full">
      <h1 className="text-2xl font-bold">EduPulse</h1>
      <div className="flex items-center flex-row gap-2">
        <NotificationMenu />
        <UserMenu />
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

function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full" asChild>
        <BellIcon className="w-6 h-6 cursor-pointer hover:bg-gray-500/40" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 bg-white">
        <DropdownMenuLabel className="flex flex-col">
          <span>Notificações</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Nenhuma notificação nova</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full" asChild>
        <Avatar className="w-8 h-8 cursor-pointer bg-amber">
          <AvatarFallback className="flex items-center justify-center w-full h-full">
            <User className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 bg-white mr-4">
        <DropdownMenuLabel className="flex flex-col">
          <span>Guilherme Vieira Buys Duarte</span>
          <Link href={'/profile/edit'} className="flex items-center text-blue-500 hover:text-blue-700 hover:underline space-x-2">
            <PencilIcon className="inline w-4 h-4 ml-1 cursor-pointer" />
            <span className="text-sm">Editar seus dados</span>
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}