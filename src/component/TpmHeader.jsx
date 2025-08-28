import { motion } from 'motion/react';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import { cn } from '@/lib/utils';

export default function TpmHeader({ children, className, title }) {
  return (
    <motion.header
      className={cn(
        'transition-colors duration-300',
        'border-2 border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]',
        'bg-gradient-to-r from-sky-100 to-sky-50',
        'flex flex-col items-center gap-2 text-(--tpm-primary) px-5 py-7.5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-center relative overflow-hidden',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className={cn(basicStyles.teachingPlanH1, 'animate-tpm-shake', '!text-[var(--tpm-primary)]')}>
        {title}
      </h1>
      {children}
    </motion.header>
  );
}
