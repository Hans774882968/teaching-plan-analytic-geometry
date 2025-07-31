import { cn } from '@/lib/utils';

export default function FilterButton({ children, className, defaultColorCls, selected, ...rest }) {
  return (
    <button
      className={
        cn(
          'px-4 py-2 rounded-full font-medium transition-all duration-300',
          selected ? 'bg-blue-500 text-white shadow-lg' : (defaultColorCls || 'bg-white text-gray-700 hover:bg-gray-100'),
          className
        )
      }
      {...rest}
    >
      {children}
    </button>
  );
}
