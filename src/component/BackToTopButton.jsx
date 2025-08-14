import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);

  // 监听滚动事件，决定是否显示按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理鼠标按下事件（开始拖动）
  const handleMouseDown = (e) => {
    // 确保只在按钮的padding区域拖动
    if (e.target.className.includes && !e.target.className.includes('pointer-events-auto')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  // 处理触摸开始事件（开始拖动）
  const handleTouchStart = (e) => {
    // 确保只在按钮的padding区域拖动
    if (e.target.className.includes && !e.target.className.includes('pointer-events-auto')) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  // 处理鼠标移动事件（拖动中 + 拖动结束）
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging) {
        e.preventDefault(); // 防止页面滚动
        const touch = e.touches[0];
        setPosition({
          x: touch.clientX - dragStart.x,
          y: touch.clientY - dragStart.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      // 桌面端事件
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      // 移动端事件
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchcancel', handleTouchEnd);
    }

    return () => {
      // 清理桌面端事件
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      // 清理移动端事件
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging, dragStart]);

  // 滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 计算按钮位置（右下角或拖动后的位置）
  const buttonStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    scale: showButton ? 1 : 0,
  };

  return (
    <div
      className="fixed bottom-4 right-4 flex justify-center items-center w-12 sm:w-15 h-12 sm:h-15 box-border cursor-move bg-sky-500 hover:bg-sky-600 rounded-xl shadow-lg transition-all duration-300 z-50"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={buttonStyle}
    >
      <div
        className="flex flex-col items-center justify-center text-sm sm:text-base text-white leading-none font-semibold pointer-events-auto cursor-pointer"
        onClick={scrollToTop}
      >
        <span>回到</span>
        <span>顶部</span>
      </div>
    </div>
  );
}
