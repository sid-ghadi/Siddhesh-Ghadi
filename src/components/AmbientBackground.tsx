import React, { useEffect, useRef, useState } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // Generate fine film grain canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawNoise();
    };

    const drawNoise = () => {
      if (!ctx) return;
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;
      const len = data.length;
      for (let i = 0; i < len; i += 4) {
        const val = (Math.random() * 255) | 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 16; // soft subtle opacity
      }
      ctx.putImageData(imgData, 0, 0);
    };

    drawNoise();
    window.addEventListener('resize', handleResize);

    // Mouse movement for cursor glow
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Subtle Grain Canvas */}
      <canvas id="grain-canvas" ref={canvasRef} aria-hidden="true" />

      {/* Architectural Geometric Polygon Layers */}
      <div className="bg-architecture" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Interactive Cursor Glow following mouse */}
      <div
        className="cursor-glow"
        aria-hidden="true"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
    </>
  );
};
