// src/components/WireframeBackground.js

import React, { useEffect, useRef } from 'react';

const WireframeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let mouseX = 0;
    let mouseY = 0;

    const drawWireframe = (offset) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const rows = Math.ceil(canvas.height / gridSize) + 1;
      const cols = Math.ceil(canvas.width / gridSize) + 1;

      drawGrid(offset, rows, cols, gridSize);
    };

    const drawGrid = (offset, rows, cols, gridSize) => {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize;
          const y = i * gridSize + offset;
          drawGridLine(x, y, x + gridSize, y);
          drawGridLine(x, y, x, y + gridSize);
        }
      }
    };

    const drawGridLine = (x1, y1, x2, y2) => {
      const [wx1, wy1] = getWarpedPosition(x1, y1);
      const [wx2, wy2] = getWarpedPosition(x2, y2);

      const distanceToMouse = Math.min(
        getDistanceToMouse(wx1, wy1),
        getDistanceToMouse(wx2, wy2)
      );

      const glowIntensity = Math.max(0, 1 - distanceToMouse / 200);

      ctx.beginPath();
      ctx.moveTo(wx1, wy1);
      ctx.lineTo(wx2, wy2);

      if (glowIntensity > 0) {
        ctx.strokeStyle = `rgba(0, 255, 255, ${glowIntensity * 0.5})`;
        ctx.lineWidth = 1 + glowIntensity * 2;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
        ctx.shadowBlur = 10 * glowIntensity;
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      ctx.stroke();
    };

    const getWarpedPosition = (x, y) => {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const warpFactor = Math.max(0, 1 - distance / 200);
      const warpX = x + dx * warpFactor * 0.2;
      const warpY = y + dy * warpFactor * 0.2;
      return [warpX, warpY];
    };

    const getDistanceToMouse = (x, y) => {
      const dx = x - mouseX;
      const dy = y - mouseY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    let lastScrollY = window.scrollY;
    let offset = 0;

    const animate = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      offset = (offset + scrollDiff * 0.5) % 50;
      if (offset < 0) offset += 50;

      drawWireframe(offset);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default WireframeBackground;