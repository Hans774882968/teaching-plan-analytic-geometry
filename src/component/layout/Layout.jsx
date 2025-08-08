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

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isAtIndex = pathname === '/';

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
      {children}
      {!isAtIndex && floatingElements}
    </div>
  );
}
