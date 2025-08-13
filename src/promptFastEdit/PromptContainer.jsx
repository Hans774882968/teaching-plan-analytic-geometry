import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function PromptContainer({ children }) {
  return (
    <motion.div
      className={cn(
        'transition-colors duration-300',
        'border-2 border-[var(--prompt-fast-edit-border)] hover:border-[var(--tpm-primary)]',
        'flex flex-col gap-6 bg-gradient-to-l from-sky-100 to-sky-50 rounded-2xl shadow-xl p-6'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
