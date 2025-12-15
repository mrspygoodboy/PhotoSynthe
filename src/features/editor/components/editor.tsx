// Copyright Muhammad Aliyan © 2025
"use client";
import { fabric } from "fabric";
import { useEditor } from "@/features/editor/hooks/use-editor";
import { useEffect, useRef } from "react";
import { Navbar } from "@/features/editor/components/navbar";
import { Sidebar } from "lucide-react";

export const Editor = () => {
    const { init } = useEditor();

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(
            canvasRef.current,
            {
                controlsAboveOverlay: true,
                preserveObjectStacking: true,
            }
        )
        init({
            initialCanvas: canvas,
            initialContainer: containerRef.current!,
        });
    
    }, [ init ]);

    return (
        <div className="h-full flex flex-col">
            <Navbar></Navbar>
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <Sidebar></Sidebar>
            <div className="flex-1 h-full bg-muted" ref={ containerRef }>
                <canvas ref={ canvasRef }/>
                </div>
            </div>
        </div>
    )
}