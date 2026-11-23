"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@/context/StoreContext";

const ANIMATION_DURATION = 1;
const SPEED_MULT_X = 3;
const SPEED_MULT_Y = 4;
const GRAVITY_DELTA = 0.249;

class Crumb {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  sizeFactor: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;

  constructor(x: number, y: number, size: number, color: string, sizeFactor: number) {
    this.x = x;
    this.y = y;
    this.radius = size / 2;
    this.color = color;
    this.alpha = 1;
    this.sizeFactor = Math.max(0.7, Math.log(Math.max(sizeFactor, 1)) + 1);
    this.speedX = ((Math.random() * 0.5 + 0.5) * SPEED_MULT_X * this.sizeFactor) / 2;
    if (Math.random() < 0.35) this.speedX *= -0.7;
    this.speedY = -1 * (Math.random() * 0.5 + 0.5) * SPEED_MULT_Y * this.sizeFactor;
    this.rotation = Math.random() * 2 * Math.PI;
    this.rotationSpeed = (Math.random() * 2 * Math.PI) / 55;
  }

  update() {
    const delta = 1 / (ANIMATION_DURATION * 60);
    this.alpha = Math.max(0, this.alpha - delta);
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
    this.speedY += GRAVITY_DELTA * this.sizeFactor;
    this.speedX =
      this.speedX > 0
        ? Math.max(this.speedX - GRAVITY_DELTA / 8, 0.5)
        : Math.min(this.speedX + GRAVITY_DELTA / 8, -0.5);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.radius * this.alpha, this.radius * this.alpha);
    ctx.rotate(this.rotation);
    ctx.translate(-this.x, -this.y);
    ctx.beginPath();
    ctx.moveTo(this.x - 0.7636, this.y - 0.4727);
    ctx.quadraticCurveTo(this.x - 0.5091, this.y - 0.9818, this.x + 0.6182, this.y - 0.4727);
    ctx.quadraticCurveTo(this.x + 1.1091, this.y - 0.1818, this.x + 0.5818, this.y + 0.4727);
    ctx.quadraticCurveTo(this.x + 0.2545, this.y + 0.8, this.x - 0.7636, this.y + 0.5636);
    ctx.quadraticCurveTo(this.x - 1, this.y + 0.4545, this.x - 0.7636, this.y - 0.4727);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

export function CrumbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const crumbsRef = useRef<Crumb[]>([]);
  const { registerCrumbEmitter } = useStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = 1;
    let cssW = window.innerWidth;
    let cssH = window.innerHeight;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = window.innerWidth;
      cssH = window.innerHeight;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;
    const fpsInterval = 1000 / 60;
    let then = performance.now();

    const loop = (now: number) => {
      const elapsed = now - then;
      if (elapsed < fpsInterval) {
        rafId = requestAnimationFrame(loop);
        return;
      }
      then = now - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, cssW, cssH);
      const nextCrumbs: Crumb[] = [];
      for (const crumb of crumbsRef.current) {
        crumb.update();
        if (crumb.alpha > 0.01 && crumb.y < cssH + 60) {
          crumb.draw(ctx);
          nextCrumbs.push(crumb);
        }
      }
      crumbsRef.current = nextCrumbs;

      if (nextCrumbs.length > 0) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = 0;
      }
    };

    registerCrumbEmitter((x, y, size, color) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const clampedSize = Math.min(size, 150);
      const minSize = clampedSize / 7;
      const maxSize = clampedSize / 4;
      const count = 4;
      for (let i = 0; i < count; i++) {
        const randomSize = Math.random() * (maxSize - minSize) + minSize;
        crumbsRef.current.push(
          new Crumb(
            x + (i * minSize) / 2,
            y - (minSize * count) / 4 + (i * minSize) / 2,
            randomSize,
            color,
            clampedSize / 48
          )
        );
      }
      if (!rafId) {
        then = performance.now();
        rafId = requestAnimationFrame(loop);
      }
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      registerCrumbEmitter(null);
      window.removeEventListener("resize", resize);
    };
  }, [registerCrumbEmitter]);

  return <canvas id="js-front-canvas" ref={canvasRef} aria-hidden="true" />;
}
