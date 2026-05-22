import { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Grid config
    const gridSize = 65;
    let gridOffsetX = 0;
    let gridOffsetY = 0;
    const gridSpeedX = 0.15;
    const gridSpeedY = 0.12;

    // Wave config
    let waveTime = 0;

    // Glowing mesh blobs config
    const blobs = [
      {
        x: 0.2, // relative positions
        y: 0.3,
        vx: 0.0003,
        vy: 0.0002,
        radius: 400,
        color: 'rgba(255, 90, 0, 0.045)', // orange
      },
      {
        x: 0.8,
        y: 0.7,
        vx: -0.0002,
        vy: -0.0003,
        radius: 500,
        color: 'rgba(255, 160, 0, 0.04)', // amber
      },
      {
        x: 0.5,
        y: 0.5,
        vx: 0.0001,
        vy: -0.0002,
        radius: 350,
        color: 'rgba(255, 70, 0, 0.035)', // dark orange
      }
    ];

    const handleResize = (entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Mesh Glow Blobs
      blobs.forEach((blob) => {
        // Update positions (bounce on boundaries)
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -0.1 || blob.x > 1.1) blob.vx *= -1;
        if (blob.y < -0.1 || blob.y > 1.1) blob.vy *= -1;

        // Radial gradient for smooth glow
        const absoluteX = blob.x * width;
        const absoluteY = blob.y * height;
        
        const gradient = ctx.createRadialGradient(
          absoluteX, absoluteY, 0,
          absoluteX, absoluteY, blob.radius
        );
        const colorParts = blob.color.split(',');
        const baseColor = colorParts.slice(0, 3).join(',');
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, `${baseColor}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(absoluteX, absoluteY, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Moving Tech Grid
      gridOffsetX = (gridOffsetX + gridSpeedX) % gridSize;
      gridOffsetY = (gridOffsetY + gridSpeedY) % gridSize;

      ctx.strokeStyle = 'rgba(255, 90, 0, 0.022)'; // extremely subtle orange grid
      ctx.lineWidth = 0.7;

      // Vertical lines
      for (let x = gridOffsetX - gridSize; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = gridOffsetY - gridSize; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw grid intersection ticks/crosses
      ctx.fillStyle = 'rgba(255, 90, 0, 0.06)';
      for (let x = gridOffsetX - gridSize; x < width + gridSize; x += gridSize) {
        for (let y = gridOffsetY - gridSize; y < height + gridSize; y += gridSize) {
          // Draw a tiny 3px tick at intersection
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      // 3. Draw Flowing Tech Waves
      waveTime += 0.005;
      
      const drawWave = (amplitude, frequency, speedOffset, color, yPosition) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.8;
        
        for (let x = 0; x <= width; x += 10) {
          // Sine wave modulation
          const y = yPosition + 
                    Math.sin(x * frequency + waveTime * 1.5 + speedOffset) * amplitude + 
                    Math.cos(x * 0.002 - waveTime) * (amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      };

      // Draw 3 layers of waves for depth (bottom-ish area of the screen)
      drawWave(25, 0.0035, 0, 'rgba(255, 90, 0, 0.04)', height * 0.75);
      drawWave(18, 0.005, Math.PI / 3, 'rgba(255, 160, 0, 0.035)', height * 0.78);
      drawWave(30, 0.002, Math.PI / 1.5, 'rgba(255, 70, 0, 0.025)', height * 0.72);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-85 bg-primary-bg transition-colors duration-300"
    />
  );
}
