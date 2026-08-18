/**
 * MiniResume — renders a full-size resume template scaled down to fit its
 * container. Used for the realistic miniature previews on template cards
 * and the resume visual in the hero section.
 *
 * The template renders at a fixed 794px width (A4 width @ 96dpi) and is
 * scaled with a CSS transform, so every miniature is a faithful, tiny copy
 * of the real template.
 */
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const PAGE_WIDTH = 794; // A4 width in px at 96 dpi

export default function MiniResume({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / PAGE_WIDTH);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-white ${className}`}
      style={{ aspectRatio: "210 / 297" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 origin-top-left select-none"
        style={{ width: PAGE_WIDTH, minHeight: 1123, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
