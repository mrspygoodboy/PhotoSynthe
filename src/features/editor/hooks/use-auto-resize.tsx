// Copyright Muhammad Aliyan © 2025

import { useCallback, useEffect } from "react";

interface UseAutoResizeProps {
    canvas: fabric.Canvas | null;
    container: HTMLDivElement  | null;
}

export const useAutoResize = ({
    canvas,
    container,
}: UseAutoResizeProps) => {

    const autoZoom = useCallback(() => {
        if(!canvas || !container) return;

        const width = container.offsetWidth;
        const height = container.offsetHeight;

    }, [canvas, container])





    useEffect(() => {

        let resizeObserver: ResizeObserver | null = null;

        if(canvas && container) {
            resizeObserver = new ResizeObserver(() => {
                console.log("resizing")
            });
            resizeObserver.observe(container)
        }

        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        }

    }, [canvas, container])
}