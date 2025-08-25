import { cn } from '@/lib/utils';

export default function ChartCard({ children }) {
  return (
    <div className={cn(
      'transition-colors duration-300',
      'border-2 border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]',
      'bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6'
    )}>
      {children}
    </div>
  );
}
