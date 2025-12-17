"use client";

import {ChevronDown, MousePointerClick} from "lucide-react";
import { CiFileOn } from "react-icons/ci";

import { Logo } from "@/features/editor/components/logo"
import { Button } from "@/components/ui/button"

 // Shadcn imports
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";


export const Navbar = () => {
    return <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
        <Logo/>
        <div className ="w=full flex items-center gap-x-1 h-full">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                        File
                        <ChevronDown className="size-4 ml-2"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-60">
                    <CiFileOn className="size-8"/>
                    <div>
                        <p>Open</p>
                        <p className="text-xs text-muted-foreground">
                            Open a JSON file
                        </p>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" className="mx-2"/>
            <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // TODO: Add functionality
            className="" // TODO: Add Dynamic class?
            >
                <MousePointerClick className="size-4"/>
            </Button>
        </div>
    </nav>
}