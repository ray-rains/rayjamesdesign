import { useEffect, useRef } from 'react';

const rows = 131;
const cols = 150;
const ramp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ';

async function loadOBJ(url, targetScale = 20, maxPoints = 2000) {
  const response = await fetch(url);
  const text = await response.text();
  const raw = [];

  for (const line of text.split('\n')) {
    if (!line.startsWith('v ')) continue;
    const [, x, y, z] = line.trim().split(/\s+/);
    raw.push({
      x: parseFloat(x),
      y: -parseFloat(y),
      z: parseFloat(z),
    });
  }

  const stride = Math.ceil(raw.length / maxPoints);
  const sampled = raw.filter((_, i) => i % stride === 0);

  let maxVal = 0;
  for (const p of sampled) {
    maxVal = Math.max(maxVal, Math.abs(p.x), Math.abs(p.y), Math.abs(p.z));
  }
  const factor = targetScale / maxVal;
  const points = sampled.map(p => ({
    x: p.x * factor,
    y: p.y * factor,
    z: p.z * factor,
  }));

  let maxZ = 0;
  for (const p of points) if (Math.abs(p.z) > maxZ) maxZ = Math.abs(p.z);
  const zRange = maxZ * 4;

  return { points, maxZ, zRange };
}

export default function Scanner({ objUrl = '/uwak.obj' }) {
  const preRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const cubeArray = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => '.')
    );
    const centerX = Math.floor(cols / 2);
    const centerY = Math.floor(rows / 2);
    let angleY = 0;
    let angleX = 0;
    let running = true;

    function render(points, maxZ, zRange) {
      if (!running || !preRef.current) return;

      for (let row = 0; row < rows; row++)
        for (let col = 0; col < cols; col++)
          cubeArray[row][col] = '.';

      for (const point of points) {
        const rotatedX = point.x * Math.cos(angleY) + point.z * Math.sin(angleY);
        const rotatedY = point.y;
        const rotatedZ = -point.x * Math.sin(angleY) + point.z * Math.cos(angleY);
        const finalX = rotatedX;
        const finalY = rotatedY * Math.cos(angleX) - rotatedZ * Math.sin(angleX);
        const finalZ = rotatedY * Math.sin(angleX) + rotatedZ * Math.cos(angleX);

        const rampIndex = Math.min(
          ramp.length - 1,
          Math.max(0, Math.floor(((finalZ + maxZ) / zRange) * ramp.length))
        );
        const char = ramp[rampIndex];

        const row = Math.floor(finalY * 0.5 + centerY);
        const col = Math.floor(finalX + centerX);
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          cubeArray[row][col] = char;
        }
      }

      angleY += 0.0025;
      angleX += 0.0001;

      preRef.current.textContent = cubeArray.map(r => r.join('')).join('\n');
      rafRef.current = requestAnimationFrame(() => render(points, maxZ, zRange));
    }

    loadOBJ(objUrl, 60 ,100000)
      .then(({ points, maxZ, zRange }) => {
        render(points, maxZ, zRange);
      })
      .catch(err => {
        if (preRef.current) preRef.current.textContent = `failed to load: ${err.message}`;
      });

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [objUrl]);

  return (
    <div id="subjectScan">
     <pre ref={preRef} style={{
  fontFamily: 'VT323, monospace',
  fontSize: '6px',
  lineHeight: '1',
  letterSpacing: '0.05em',
}} />
    </div>
  );
}