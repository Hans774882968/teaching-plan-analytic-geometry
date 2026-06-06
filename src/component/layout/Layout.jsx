import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { useHljsTheme } from '@/hooks/useHljsTheme';
import BackToTopButton from '../BackToTopButton';
// TODO: 自己开发抗 DOM 修改的 hook 给水印组件用
import Watermark from '@uiw/react-watermark';
import { useSettingsStore } from './states/settingsState';
import { useEffect, useState } from 'react';
import { isLessonOrBlogUrl } from '@/lib/routeUtils';
import LetterToLlm from '../copyright/LetterToLlm';
import MovingWatermark from '../copyright/MovingWatermark';
import FloatingElements from './FloatingElements';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isAtIndex = pathname === '/';

  const {
    watermarkForLessonBlog,
    movingWatermarkForLessonBlog,
  } = useSettingsStore();
  // 给水印组件传入''，会保持变为''之前的字符串，只有传入空数组才能让它在视觉上消失（实际DOM还在）
  const watermarkLBContent = isLessonOrBlogUrl(pathname) ? watermarkForLessonBlog.split('\n') : [];

  const [watermarkGapX, setWatermarkGapX] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setWatermarkGapX(window.innerWidth < 640 ? 10 : 50);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useHljsTheme();

  return (
    <div>
      <Navbar />
      <Watermark
        content={watermarkLBContent}
        gapX={watermarkGapX}
      >
        {children}
      </Watermark>
      {!isAtIndex && <FloatingElements />}
      <BackToTopButton />
      <MovingWatermark
        colorCls="bg-gradient-to-r from-sky-500 to-(--tpm-primary) bg-clip-text text-transparent"
        opacity={1}
        text={movingWatermarkForLessonBlog}
      />
      <LetterToLlm />
    </div>
  );
}
