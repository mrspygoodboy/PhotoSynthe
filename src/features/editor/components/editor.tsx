// Copyright Muhammad Aliyan © 2025

"use client";
import { fabric } from "fabric";
import { useEditor } from "@/features/editor/hooks/use-editor";
import {useCallback, useEffect, useRef, useState} from "react";
import { Navbar } from "@/features/editor/components/navbar";
import { Sidebar } from "@/features/editor/components/sidebar";
import { Toolbar } from "@/features/editor/components/toolbar";
import { Footer } from "@/features/editor/components/footer";
import {ActiveTool} from "@/features/editor/types";

export const Editor = () => {
    const [ activeTool, setActiveTool ] = useState<ActiveTool>("select");

    const onChangeActiveTool = useCallback((tool: ActiveTool) => {
        if (tool === activeTool) {
            return setActiveTool("select");
        }

        if (tool === "draw") {
            // todo: enable draw mode
        }

        if (activeTool === "draw") {
            // todo: disable draw mode
        }

        setActiveTool(tool);
    }, [activeTool]);

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

        return () => {
            canvas.dispose();
        }
    
    }, [ init ]);

    return (
        <div className="h-full flex flex-col">
            <Navbar
                activeTool={activeTool}
                onChangeActiveTool={onChangeActiveTool}
            ></Navbar>
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <Sidebar
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                ></Sidebar>
            <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
                <Toolbar></Toolbar>
            <div className="flex-1 h-[calc(100%-124px)] bg-muted" ref={ containerRef }>
                <canvas ref={ canvasRef }/>
                </div>
                <Footer>
                </Footer>
            </main>
            </div>
        </div>
    )
}