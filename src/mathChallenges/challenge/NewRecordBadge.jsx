import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * 新纪录徽章
 * @param {string}  [text]       自定义文字，默认 '🎉 新纪录！'
 * @param {string}  [className]  外层容器额外 class
 * @param {number}  [duration]   动画持续秒数，默认 2
 * @param {boolean} [loop]       是否循环播放，默认 false
 */
export default function NewRecordBadge({
  text = '🎉 新纪录！',
  className,
  duration = 2,
  loop = false,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    // 强制重排，从头播放
    node.classList.remove('animate-tpm-pop-in');
    void node.offsetWidth;
    node.classList.add('animate-tpm-pop-in');
    if (loop) {
      node.style.animationIterationCount = 'infinite';
    } else {
      node.style.animationIterationCount = '1';
    }
  }, [loop]);

  return (
    <span
      ref={rootRef}
      className={cn(
        'relative inline-flex items-center justify-center',
        'h-9 px-20 rounded-full overflow-hidden',
        'bg-yellow-200 text-yellow-700 font-bold text-lg',
        'transform origin-bottom',
        className
      )}
      style={{ animationDuration: `${duration}s` }}
    >
      {/* 光效 */}
      <i
        className={cn(
          'absolute top-0 left-0 w-full h-full',
          'bg-gradient-to-r from-transparent via-white to-transparent',
          'skew-x-[-20deg] translate-x-[-150%]',
          'animate-tpm-sheen'
        )}
        style={{ animationDuration: `${duration}s` }}
      />

      {/* 文字 */}
      <span className="relative z-10">{text}</span>

      {/* 星星装饰 */}
      <i className="absolute top-0 left-5 text-sm animate-tpm-spark" style={{ animationDelay: '0.1s' }}>✨</i>
      <i className="absolute bottom-0 right-12 text-sm animate-tpm-spark" style={{ animationDelay: '0.2s' }}>✨</i>
      <i className="absolute bottom-0 left-12 text-sm animate-tpm-spark" style={{ animationDelay: '0.3s' }}>✨</i>
      <i className="absolute top-0 right-5 text-sm animate-tpm-spark" style={{ animationDelay: '0.4s' }}>✨</i>
    </span>
  );
}
