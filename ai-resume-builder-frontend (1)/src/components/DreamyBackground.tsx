/**
 * DreamyBackground — fixed, non-interactive layer behind all content.
 * Adds the cute "pookie" atmosphere: soft pink/lavender gradient wash,
 * drifting blurred pink-purple glow blobs and tiny twinkling sparkles.
 *
 * It is purely decorative (aria-hidden, pointer-events-none) and is fully
 * hidden when printing. It changes NO layout or content.
 */
import { useMemo } from "react";

interface Particle {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  purple: boolean;
}

export default function DreamyBackground() {
  /* Deterministic pseudo-random particles, stable across re-renders. */
  const particles = useMemo<Particle[]>(() => {
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    return Array.from({ length: 28 }, () => ({
      left: `${(rand() * 100).toFixed(2)}%`,
      top: `${(rand() * 100).toFixed(2)}%`,
      size: 3 + Math.round(rand() * 4),
      delay: `${(rand() * 4).toFixed(2)}s`,
      duration: `${(2.6 + rand() * 3).toFixed(2)}s`,
      purple: rand() > 0.55,
    }));
  }, []);

  return (
    <div
      id="dreamy-background"
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft gradient wash over the page */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-fuchsia-200/30 to-purple-200/40" />

      {/* Drifting, blurred pink / lavender / purple glow blobs */}
      <div className="animate-blob absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-pink-300/40 blur-3xl" />
      <div
        className="animate-blob absolute -right-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-fuchsia-300/35 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-blob absolute -bottom-28 left-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-300/35 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-blob absolute left-1/2 -top-24 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      {/* Tiny twinkling sparkles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`sparkle ${p.purple ? "sparkle-purple" : ""}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
