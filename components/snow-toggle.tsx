"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Snowflake = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
};

export default function SnowToggle() {
  const [isSnowing, setIsSnowing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const flakesRef = useRef<Snowflake[]>([]);

  useEffect(() => {
    if (!isSnowing) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
      flakesRef.current = [];
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.className = "fixed inset-0 z-40 pointer-events-none";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createFlakes = () => {
      const count = Math.min(180, Math.floor(window.innerWidth / 8));
      flakesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height,
        r: 1 + Math.random() * 2.5,
        speed: (0.4 + Math.random() * 1.6) * 0.5,
        drift: (Math.random() - 0.5) * 0.6
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      flakesRef.current.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += flake.drift;
        if (flake.y > canvas.height + 4) {
          flake.y = -4;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width + 4) flake.x = -4;
        if (flake.x < -4) flake.x = canvas.width + 4;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    createFlakes();
    window.addEventListener("resize", resize);
    document.body.appendChild(canvas);
    canvasRef.current = canvas;
    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.remove();
      canvasRef.current = null;
      flakesRef.current = [];
    };
  }, [isSnowing]);

  return (
    <Button variant="outline" onClick={() => setIsSnowing((prev) => !prev)}>
      {isSnowing ? "Snow off" : "Let it snow"}
    </Button>
  );
}
