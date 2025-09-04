import { motion } from 'motion/react';
import Navbar from './Navbar';
import { cn } from '@/lib/utils';
import {
  FaDraftingCompass,
  FaCube,
} from 'react-icons/fa';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import { useHljsTheme } from '@/hooks/useHljsTheme';
import BackToTopButton from '../BackToTopButton';
// TODO: 自己开发抗 DOM 修改的 hook 给水印组件用
import Watermark from '@uiw/react-watermark';
import { useSettingsStore } from './states/settingsState';
import { useEffect, useState } from 'react';
import { isLessonOrBlogUrl } from '@/lib/routeUtils';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isAtIndex = pathname === '/';

  const {
    watermarkForLessonBlog,
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

  const floatingElements = (
    <>
      <motion.div
        className={cn(
          'floating',
          'hidden xl:block',
          'fixed top-40 left-8 w-8 h-8 rounded-full bg-blue-500 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
      <motion.div
        className={cn(
          'floating',
          'hidden xl:block',
          'fixed top-2/3 left-12'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="flex items-center justify-center text-purple-300">
          <FaCube className="text-2xl" />
        </div>
      </motion.div>
      <motion.div
        className={cn(
          'floating',
          'hidden xl:block',
          'fixed top-4/5 right-15'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="flex items-center justify-center text-blue-500">
          <FaDraftingCompass className="text-2xl" />
        </div>
      </motion.div>
      <motion.div
        className={cn(
          'floating',
          'hidden xl:block',
          'fixed top-1/3 right-10'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="rounded-lg flex items-center justify-center text-purple-300">
          <FaCircleDollarToSlot className="text-2xl" />
        </div>
      </motion.div>
    </>
  );

  return (
    <div>
      <Navbar />
      <Watermark
        content={watermarkLBContent}
        gapX={watermarkGapX}
      >
        {children}
      </Watermark>
      {!isAtIndex && floatingElements}
      <BackToTopButton />
    </div>
  );
}
