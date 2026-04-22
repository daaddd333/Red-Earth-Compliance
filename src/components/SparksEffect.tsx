import React, { useEffect, useRef } from 'react';

export default function SparksEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let sparks: Spark[] = [];

    const resizeCanvas = () => {
      // High DPI support
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Spark {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      life: number;
      maxLife: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight + Math.random() * 50; // Start slightly below bottom
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = Math.random() * -1.5 - 0.5; // Upwards
        this.speedX = Math.random() * 1 - 0.5; // Slight horizontal drift
        this.maxLife = Math.random() * 300 + 100;
        this.life = this.maxLife;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        // Sway slightly
        this.speedX += (Math.random() - 0.5) * 0.05;
        // Dampen horizontal speed
        this.speedX *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currentOpacity = this.opacity * (this.life / this.maxLife);
        
        ctx.beginPath();
        // Fine line for trailing effect
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.speedX * 4, this.y - this.speedY * 4);
        
        ctx.strokeStyle = `rgba(255, 90, 0, ${currentOpacity})`;
        ctx.lineWidth = this.size;
        ctx.stroke();

        // Bloom center
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 100, ${currentOpacity * 1.5})`;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FF5A00';
      }
    }

    const initSparks = () => {
      sparks = [];
      const numSparks = window.innerWidth > 768 ? 40 : 20;
      for (let i = 0; i < numSparks; i++) {
        sparks.push(new Spark(canvas.offsetWidth, canvas.offsetHeight));
      }
    };

    initSparks();

    const render = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (let i = 0; i < sparks.length; i++) {
        sparks[i].update();
        sparks[i].draw(ctx);

        if (sparks[i].life <= 0 || sparks[i].y < -50) {
          sparks[i] = new Spark(canvas.offsetWidth, canvas.offsetHeight);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
