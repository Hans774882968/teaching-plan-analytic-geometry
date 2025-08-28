import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function TpmCard({ children, className, ...rest }) {
  return (
    <motion.div
      className={cn(
        'transition-colors duration-300',
        'border-2 border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]',
        'bg-gradient-to-r from-sky-100 to-sky-50',
        'rounded-2xl p-5 shadow-lg overflow-x-auto',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
