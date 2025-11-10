// Copyright Muhammad Aliyan © 2025

/**
 * Observes the window size and notifies if there are any changes.
 */
import { fabric } from "fabric";
import { useCallback, useEffect } from "react";

interface UseAutoResizeProps {
  canvas: fabric.Canvas | null;
  container: HTMLDivElement | null;
}

export const useAutoResize = ({ canvas, container }: UseAutoResizeProps) => {
  /**
   * Set the height to the new (current) container height.
   * This function is called below each time the window is resized.
   */

  // Define a memoized callback function called autoZoom.
  // It adjusts the zoom level and view of a Fabric.js canvas dynamically
  // based on the container's size and a workspace element.
  const autoZoom = useCallback(() => {
    // If either the canvas or container is not initialized, exit early.
    if (!canvas || !container) return;

    // Get the dimensions of the container element.
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Set the canvas dimensions to match the container size.
    canvas.setWidth(width);
    canvas.setHeight(height);

    // Get the current center point of the canvas.
    const center = canvas.getCenter();

    // Define how much to zoom relative to the calculated scale.
    const zoomRatio = 0.85;

    // Find the workspace object (a Fabric object) named "clip".
    // This is typically the object representing the visible drawing area.
    const localWorkspace = canvas
      .getObjects()
      .find((object) => object.name === "clip");

    // Ensure the Fabric utility function is used to compute the correct scale
    // so the workspace fits within the container dimensions.
    // @ts-ignore is used to suppress TypeScript warnings for undocumented methods.
    // This method calculates the scale needed for the workspace to fit inside the container.
    // scale adjusts widths and heights proportionally.
    // For example, scale = containerWidth / objectWidth (while maintaining aspect ratio).
    // @ts-ignore
    const scale = fabric.util.findScaleToFit(localWorkspace, {
      width: width,
      height: height,
    });

    // Apply a slightly smaller zoom than full fit (using 0.85 multiplier).
    const zoom = zoomRatio * scale;

    // Reset the viewport transform before applying the new zoom.
    canvas.setViewportTransform(fabric.iMatrix.concat());

    // Zoom the canvas relative to its current center point.
    canvas.zoomToPoint(new fabric.Point(center.left, center.top), zoom);

    // If workspace doesn't exist, stop further processing.
    if (!localWorkspace) return;

    // Get the center point of the workspace object to align it properly.
    const workspaceCenter = localWorkspace.getCenterPoint();
    const viewportTransform = canvas.viewportTransform;

    // Check if required values are defined before continuing.
    if (
      canvas.width === undefined ||
      canvas.height === undefined ||
      !viewportTransform
    ) {
      return;
    }

    // Log current X translation of the viewport for debugging.
    console.log(viewportTransform[4]);

    // Adjust viewport translation so the workspace is centered horizontally.
    viewportTransform[4] =
      canvas.width / 2 - workspaceCenter.x * viewportTransform[0];

    // Adjust viewport translation so the workspace is centered vertically.
    viewportTransform[5] =
      canvas.height / 2 - workspaceCenter.y * viewportTransform[3];

    // Apply the modified viewport transformations.
    canvas.setViewportTransform(viewportTransform);

    // Clone the workspace and set it as the canvas clipping path
    // so that everything outside the workspace is visually masked.
    localWorkspace.clone((cloned: fabric.Rect) => {
      canvas.clipPath = cloned;
      canvas.requestRenderAll(); // Force re-render after clip update.
    });
  }, [canvas, container]); // Dependencies to recalculate when canvas or container changes.

  /**
   *
   */

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    if (canvas && container) {
      resizeObserver = new ResizeObserver(() => {
        console.log("resizing");

        autoZoom();
      });
      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [canvas, container, autoZoom]);
};
