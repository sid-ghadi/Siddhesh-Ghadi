import React, { useEffect, useRef, useState } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // Generate fine drafting film grain
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
        data[i + 3] = 12; // subtle drafting paper texture
      }
      ctx.putImageData(imgData, 0, 0);
    };

    drawNoise();
    window.addEventListener('resize', handleResize);

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
      {/* Corner registration marks — evoke engineering drafting sheet */}
      <div className="reg-mark reg-tl" aria-hidden="true" />
      <div className="reg-mark reg-tr" aria-hidden="true" />
      <div className="reg-mark reg-bl" aria-hidden="true" />
      <div className="reg-mark reg-br" aria-hidden="true" />

      {/* Subtle Grain Canvas */}
      <canvas id="grain-canvas" ref={canvasRef} aria-hidden="true" />

      {/* Interactive Amber Cursor Glow following mouse */}
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
