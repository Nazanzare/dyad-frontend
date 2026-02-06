import { useEffect, useRef } from "react";

export default function NeonFlow() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.text =
          Math.random() > 0.5
            ? Math.floor(Math.random() * 10)
            : ["{", "}", "<", ">", "/", ";"][Math.floor(Math.random() * 6)];

        this.size = Math.random() * 14 + 10;
        this.life = 1;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = Math.random() * -1.5 - 0.5;
        this.color = Math.random() > 0.5 ? "#22d3ee" : "#a855f7";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.015;
      }

      draw() {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px monospace`;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20;
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) particles.current.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const spawn = (x, y, count = 4) => {
      for (let i = 0; i < count; i++) {
        particles.current.push(new Particle(x, y));
      }
    };

    window.addEventListener("mousemove", (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      spawn(e.clientX, e.clientY, 1);
    });

    window.addEventListener("click", (e) => {
      spawn(e.clientX, e.clientY, 10);
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
