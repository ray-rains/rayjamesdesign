import { useRef, useEffect, useCallback } from "react";

const SPACING = 8;
const MAX_R = 2;
const SPEED = 0.5;
const WAVE_SCALE = 120;

export default function OscillatingHalftone() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const tRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = canvas.offsetWidth;
    const H = 200;
    canvas.width = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    canvas.style.height = H + "px";
    ctx.scale(devicePixelRatio, devicePixelRatio);

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, W, H);

    const cols = Math.ceil(W / SPACING) + 1;
    const rows = Math.ceil(H / SPACING) + 1;
    const t = tRef.current;

    ctx.fillStyle = "#111";

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * SPACING;
        const y = row * SPACING;
        const dist = Math.sqrt((x - W / 2) ** 2 + (y - H / 2) ** 2);
        const phase = dist / WAVE_SCALE - t;
        const r = ((Math.sin(phase) + 1) / 2) * MAX_R;
        if (r < 0.4) continue;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    tRef.current += SPEED * 0.003;
    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    draw();
    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%" }}
    />
  );
}