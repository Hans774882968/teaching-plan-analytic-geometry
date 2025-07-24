import { motion } from 'motion/react';
import styles from './Footer.module.scss';
import { cn } from '@/lib/utils';

export default function Footer({ children, className, ...rest }) {
  return (
    <motion.footer
      className={cn(
        styles.teachingPlanFooter,
        className
      )}
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      {...rest}
    >
      {children}
    </motion.footer>
  );
}
