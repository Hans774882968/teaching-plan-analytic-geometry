import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function TpmSection({ bgColor, children, className, ...rest }) {
  return (
    <motion.section
      className={cn(
        'transition-colors duration-300',
        'border-2 border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]',
        bgColor || 'bg-gradient-to-r from-sky-100 to-sky-50',
        'flex flex-col gap-6 rounded-2xl p-6 shadow-lg relative overflow-hidden',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
