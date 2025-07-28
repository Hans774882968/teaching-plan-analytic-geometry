import { cn } from '@/lib/utils';

export default function Tag({ children, className, ...rest }) {
  return (
    <span
      className={cn(
        'px-2 py-1 rounded-md text-xs font-semibold transition-colors duration-300',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
