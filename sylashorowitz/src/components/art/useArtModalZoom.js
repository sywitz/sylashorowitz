/**
 * useArtModalZoom - Pan/zoom for art modal images.
 * Desktop: ctrl+scroll to zoom, scroll to pan when zoomed.
 * Mobile: pinch to zoom, drag to pan when zoomed.
 */

import { useCallback, useEffect, useRef, useState } from 'react';

const MAX_SCALE_MULTIPLIER = 4;

function getTouchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function getTouchCenter(touches, rect) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2 - rect.left - rect.width / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2 - rect.top - rect.height / 2,
  };
}

export function useArtModalZoom({ enabled, pieceId, imageRef, viewportRef }) {
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const scaleRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });
  const fitScaleRef = useRef(1);
  const pinchRef = useRef({ distance: 0, scale: 1 });
  const dragRef = useRef({ active: false, startX: 0, startY: 0, panX: 0, panY: 0 });

  const syncRefs = useCallback((nextScale, nextPan) => {
    scaleRef.current = nextScale;
    panRef.current = nextPan;
    setScale(nextScale);
    setPan(nextPan);
  }, []);

  const computeFitScale = useCallback(() => {
    const viewport = viewportRef.current;
    const image = imageRef.current;
    if (!viewport || !image || !image.naturalWidth) return;

    const fit = Math.min(
      viewport.clientWidth / image.naturalWidth,
      viewport.clientHeight / image.naturalHeight,
      1
    );

    fitScaleRef.current = fit;
    syncRefs(fit, { x: 0, y: 0 });
  }, [imageRef, viewportRef, syncRefs]);

  const zoomAtPoint = useCallback((pointX, pointY, nextScale) => {
    const clampedScale = Math.min(
      Math.max(nextScale, fitScaleRef.current),
      fitScaleRef.current * MAX_SCALE_MULTIPLIER
    );
    const currentScale = scaleRef.current;
    const currentPan = panRef.current;
    const ratio = clampedScale / currentScale;

    syncRefs(clampedScale, {
      x: currentPan.x - pointX * (ratio - 1),
      y: currentPan.y - pointY * (ratio - 1),
    });
  }, [syncRefs]);

  const isZoomedIn = useCallback(() => (
    scaleRef.current > fitScaleRef.current + 0.01
  ), []);

  useEffect(() => {
    fitScaleRef.current = 1;
    syncRefs(1, { x: 0, y: 0 });
  }, [pieceId, syncRefs]);

  useEffect(() => {
    if (!enabled) return undefined;

    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const onWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();

        const rect = viewport.getBoundingClientRect();
        const pointX = e.clientX - rect.left - rect.width / 2 - panRef.current.x;
        const pointY = e.clientY - rect.top - rect.height / 2 - panRef.current.y;
        const factor = Math.exp(-e.deltaY * 0.002);
        zoomAtPoint(pointX, pointY, scaleRef.current * factor);
        return;
      }

      if (!isZoomedIn()) return;

      e.preventDefault();
      syncRefs(scaleRef.current, {
        x: panRef.current.x - e.deltaX,
        y: panRef.current.y - e.deltaY,
      });
    };

    viewport.addEventListener('wheel', onWheel, { passive: false });
    return () => viewport.removeEventListener('wheel', onWheel);
  }, [enabled, pieceId, viewportRef, zoomAtPoint, syncRefs, isZoomedIn]);

  useEffect(() => {
    if (!enabled) return undefined;

    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        pinchRef.current = {
          distance: getTouchDistance(e.touches),
          scale: scaleRef.current,
        };
      } else if (e.touches.length === 1 && isZoomedIn()) {
        dragRef.current = {
          active: true,
          startX: e.touches[0].clientX,
          startY: e.touches[0].clientY,
          panX: panRef.current.x,
          panY: panRef.current.y,
        };
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const distance = getTouchDistance(e.touches);
        if (!pinchRef.current.distance) return;

        const rect = viewport.getBoundingClientRect();
        const center = getTouchCenter(e.touches, rect);
        const nextScale = (pinchRef.current.scale * distance) / pinchRef.current.distance;
        zoomAtPoint(center.x, center.y, nextScale);
      } else if (e.touches.length === 1 && dragRef.current.active) {
        e.preventDefault();
        const dx = e.touches[0].clientX - dragRef.current.startX;
        const dy = e.touches[0].clientY - dragRef.current.startY;
        syncRefs(scaleRef.current, {
          x: dragRef.current.panX + dx,
          y: dragRef.current.panY + dy,
        });
      }
    };

    const onTouchEnd = () => {
      pinchRef.current = { distance: 0, scale: scaleRef.current };
      dragRef.current.active = false;
    };

    viewport.addEventListener('touchstart', onTouchStart, { passive: false });
    viewport.addEventListener('touchmove', onTouchMove, { passive: false });
    viewport.addEventListener('touchend', onTouchEnd);
    viewport.addEventListener('touchcancel', onTouchEnd);

    return () => {
      viewport.removeEventListener('touchstart', onTouchStart);
      viewport.removeEventListener('touchmove', onTouchMove);
      viewport.removeEventListener('touchend', onTouchEnd);
      viewport.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [enabled, pieceId, viewportRef, zoomAtPoint, syncRefs, isZoomedIn]);

  const handleImageLoad = useCallback(() => {
    computeFitScale();
  }, [computeFitScale]);

  useEffect(() => {
    if (!enabled) return;
    const image = imageRef.current;
    if (image?.complete) {
      computeFitScale();
    }
  }, [enabled, pieceId, computeFitScale, imageRef]);

  useEffect(() => {
    if (!enabled) return undefined;

    const onResize = () => computeFitScale();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [enabled, pieceId, computeFitScale]);

  return {
    scale,
    pan,
    handleImageLoad,
  };
}
