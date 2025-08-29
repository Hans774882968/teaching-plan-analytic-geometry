import { cn } from '@/lib/utils';
import { FaUser } from 'react-icons/fa';

export default function TpmAvatarFallback({
  bgColor,
  className,
  iconClassName,
}) {
  return (
    <div className={cn(
      'w-12 h-12 rounded-full hover:rotate-12 mr-3 flex justify-center items-center transition-rotate duration-300',
      bgColor || 'bg-gradient-to-r from-blue-300 to-purple-300',
      className
    )}>
      <FaUser className={cn('text-blue-600', iconClassName)} />
    </div>
  );
}
