import { cn } from '@/lib/utils';

export default function PromptOpBtn({ children, className, ...rest }) {
  return (
    <button
      className={cn(
        'px-5 py-2.5 leading-[1.3] cursor-pointer text-white rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300 flex items-center',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
