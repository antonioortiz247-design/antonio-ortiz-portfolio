import { useMemo } from "react";

/** Lightweight ambient particle layer — pure CSS, no canvas. */
export function Particles({ count = 22 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 18,
        opacity: 0.15 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/60 blur-[1px]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(20px,-30px,0); }
        }
      `}</style>
    </div>
  );
}
