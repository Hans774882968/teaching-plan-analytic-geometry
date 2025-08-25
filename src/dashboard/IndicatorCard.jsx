import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

export default function IndicatorCard({ txt, val }) {
  return (
    <div className={cn(
      'transition-colors duration-300',
      'border-2 border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]',
      'bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6 flex flex-col items-center justify-center'
    )}>
      <div className="text-5xl font-bold text-[var(--tpm-primary)] mb-2">
        <CountUp end={val} />
      </div>
      <div className="text-gray-600 text-lg flex items-center gap-2">{txt}</div>
    </div>
  );
}
