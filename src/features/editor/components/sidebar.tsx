"use client"; 
// Marks this component as a Client Component in Next.js (required for hooks, events, etc.)

// Sidebar component
import {SidebarItem} from "@/features/editor/components/sidebar-item";
import {LayoutTemplate, ImageIcon, Pencil, Presentation, Settings, Shapes, Sparkles} from "lucide-react";
import {ActiveTool} from "@/features/editor/types";

interface SidebarProps {
    activeTool: ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Sidebar = ({
    activeTool,
    onChangeActiveTool
}: SidebarProps) => {
    return (
        // <aside> semantic element used for side content like navigation or tools
        <aside
            className="
                bg-white          /* White background */
                flex              /* Enable flexbox layout */
                flex-col          /* Stack children vertically */
                w-[100px]         /* Fixed width of 100px */
                h-full            /* Take full available height */
                border-r          /* Right border for visual separation */
                overflow-y-auto   /* Enable vertical scrolling if content overflows */
            "
        >
            <ul className="flex flex-col">
                <SidebarItem
                    icon={LayoutTemplate}
                    label="Design"
                    isActive={activeTool === "templates"}
                    onClick={() => onChangeActiveTool("templates")}
                />
                <SidebarItem
                    icon={ImageIcon}
                    label="Image"
                    isActive={activeTool === "images"}
                    onClick={() => onChangeActiveTool("images")}
                />
                <SidebarItem
                    icon={Pencil}
                    label="Text"
                    isActive={activeTool === "text"}
                    onClick={() => onChangeActiveTool("text")}
                />
                <SidebarItem
                    icon={Shapes}
                    label="Shapes"
                    isActive={activeTool === "shapes"}
                    onClick={() => onChangeActiveTool("shapes")}
                />
                <SidebarItem
                    icon={Sparkles}
                    label="AI"
                    isActive={activeTool === "ai"}
                    onClick={() => onChangeActiveTool("ai")}
                />
                <SidebarItem
                    icon={Settings}
                    label="Settings"
                    isActive={activeTool === "settings"}
                    onClick={() => onChangeActiveTool("settings")}
                />
            </ul>
        </aside>
    );
};
