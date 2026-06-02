import { useLayoutEffect, useRef } from 'react';

export default function MovingWatermark({
  colorCls = 'text-[#2d644b]',
  opacity = 0.8,
  text = 'Hans码数理哲',
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0 });

  const updateContainerSize = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    sizeRef.current = { width: rect.width, height: rect.height };
  };

  const initializePositionAndVelocity = () => {
    if (sizeRef.current.width === 0 || sizeRef.current.height === 0) {
      updateContainerSize();
    }
    const textEl = textRef.current;
    const textWidth = textEl?.offsetWidth || 60;
    const textHeight = textEl?.offsetHeight || 20;

    posRef.current = {
      x: Math.random() * (sizeRef.current.width - textWidth) + textWidth / 2,
      y: Math.random() * (sizeRef.current.height - textHeight) + textHeight / 2,
    };

    const speed = 1.2 + Math.random() * 0.6;
    const angle = (1 / 12 + Math.random() / 3) * Math.PI;
    velRef.current = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
  };

  const moveAnimate = () => {
    const textEl = textRef.current;
    if (!textEl) return;

    const textWidth = textEl.offsetWidth || 60;
    const textHeight = textEl.offsetHeight || 20;
    const { width, height } = sizeRef.current;

    posRef.current.x += velRef.current.x;
    posRef.current.y += velRef.current.y;

    if (posRef.current.x <= 0 || posRef.current.x >= width - textWidth) {
      velRef.current.x = -velRef.current.x;
      posRef.current.x = Math.max(0, Math.min(width - textWidth, posRef.current.x));
    }
    if (posRef.current.y <= 0 || posRef.current.y >= height - textHeight) {
      velRef.current.y = -velRef.current.y;
      posRef.current.y = Math.max(0, Math.min(height - textHeight, posRef.current.y));
    }

    textEl.style.left = `${posRef.current.x}px`;
    textEl.style.top = `${posRef.current.y}px`;

    rafRef.current = requestAnimationFrame(moveAnimate);
  };

  useLayoutEffect(() => {
    updateContainerSize();
    initializePositionAndVelocity();

    if (textRef.current) {
      textRef.current.style.left = `${posRef.current.x}px`;
      textRef.current.style.top = `${posRef.current.y}px`;
    }

    rafRef.current = requestAnimationFrame(moveAnimate);
    window.addEventListener('resize', updateContainerSize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: '50',
      }}
    >
      <p
        ref={textRef}
        className={`absolute select-none !m-0 truncate ${colorCls}`}
        style={{
          fontSize: '28px',
          opacity,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {text}
      </p>
    </div>
  );
}
