import { cn } from '@/lib/utils';

export default function TpmDivInsideSection({ children, className }) {
  return (
    <div className={cn(
      'transition-colors duration-300',
      'border border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]',
      'bg-white/40 hover:bg-white/60',
      className
    )}>
      {children}
    </div>
  );
}
