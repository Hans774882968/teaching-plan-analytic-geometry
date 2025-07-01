import { motion } from 'motion/react';
import styles from './Card.module.scss';
import { HOVER_SCALE } from '@/common/consts';
import { cn } from '@/lib/utils';

export default function Card({ children, className, ...rest }) {
  return (
    <motion.div
      className={cn(
        styles.card,
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{
        scale: HOVER_SCALE,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
