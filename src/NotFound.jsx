import { motion } from 'motion/react';
import {
  FaCircle,
  FaCube,
  FaHome,
  FaStar,
} from 'react-icons/fa';
import styles from './NotFound.module.scss';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={cn(
      styles.notFound,
      'min-h-screen flex flex-col items-center justify-center relative overflow-hidden'
    )}>
      {/* 沙漠背景元素 */}
      <div className={cn(styles.desertSand, 'absolute bottom-0 left-0 right-0 h-1/3')}></div>

      {/* 浮动几何元素 */}
      <div className={cn(styles.floating, 'absolute top-20 left-10 w-10 h-10 rounded-full bg-blue-300 opacity-30')} style={{ animationDelay: '1s' }}></div>
      <div className={cn(styles.floating, 'absolute bottom-40 right-10 w-14 h-14 rounded-full bg-green-500 opacity-30')} style={{ animationDelay: '2s' }}></div>
      <div className={cn(styles.floating, 'absolute top-1/4 right-1/4 w-12 h-12 transform rotate-45 bg-yellow-300 opacity-30')} style={{ animationDelay: '3s' }}></div>

      {/* 沙漠主题元素 */}
      <div className={cn(styles.cactus, styles.floating, 'absolute bottom-1/4 left-1/4')} style={{ animationDelay: '0.5s' }}></div>
      <div className={cn(styles.sun, styles.floating, 'absolute top-[10%] right-[10%]')} style={{ animationDelay: '0s' }}></div>
      <div className={cn(styles.pyramid, styles.floating, 'absolute bottom-1/3 right-[15%]')} style={{ animationDelay: '1.5s' }}></div>
      <div className={cn(styles.tumbleweed, styles.floating, 'absolute bottom-[15%] right-[15%]')} style={{ animationDelay: '3.5s' }}></div>

      {/* 内容区域 */}
      <motion.div
        className="z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={cn(styles.desertText, 'text-9xl font-bold text-blue-600 mb-4')}
        >
          404
        </motion.div>

        <motion.h1
          className={cn(styles.desertText, 'text-4xl md:text-5xl font-bold text-gray-800 mb-6')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          你来到了<span className="text-orange-500">没有知识的荒原</span>
        </motion.h1>

        <motion.p
          className={cn(styles.desertText, 'text-l md:text-xl text-gray-600 mb-40 max-w-2xl mx-auto')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          这里没有教案，只有沙漠和迷失的几何图形。也许你走错了路，或者我们移除了这个页面。别担心，你可以返回首页继续探索数学的奥秘~
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className={cn(
              styles.btnSky,
              'text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg inline-flex items-center shadow-lg'
            )}
          >
            <FaHome className="mr-2 md:mr-3" />
            返回首页
          </Link>
        </motion.div>
      </motion.div>

      {/* 沙漠中的几何图形 */}
      <motion.div
        className={cn(styles.floating, 'absolute top-1/3 left-[15%]')}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex items-center justify-center text-blue-500">
          <FaCube className="text-2xl" />
        </div>
      </motion.div>

      <motion.div
        className={cn(styles.floating, 'absolute bottom-[10%] left-[10%]')}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="w-14 h-14 transform rotate-45 border-4 border-purple-500 flex items-center justify-center text-purple-500">
          <FaStar className="text-xl" />
        </div>
      </motion.div>

      <motion.div
        className={cn(styles.floating, 'absolute top-1/3 right-[5%]')}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="rounded-lg flex items-center justify-center text-purple-300">
          <FaCircle className="text-xl" />
        </div>
      </motion.div>

      {/* 页脚 */}
      <motion.div
        className="absolute bottom-8 text-gray-500 text-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p>数学教案库 &copy; {new Date().getFullYear()} - 让数学教学更简单</p>
      </motion.div>
    </div>
  );
}
