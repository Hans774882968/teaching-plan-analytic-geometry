import { cn } from '@/lib/utils';

export default function AchievementCard({
  bgColor,
  borderColor,
  condition,
  description,
  icon,
  iconBgColor,
  textColor,
  title,
}) {
  const satisfy = typeof condition === 'function' ? condition() : condition;

  return (
    <div
      className={cn(
        'p-4 rounded-xl border-2',
        satisfy ? `${borderColor} ${bgColor}` : 'border-gray-200'
      )}
    >
      <div className="flex items-center">
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center mr-3',
            satisfy ? `${iconBgColor} text-white` : 'bg-gray-200 text-gray-500'
          )}
        >
          {icon}
        </div>
        <div>
          <h3 className={cn(satisfy && textColor, 'font-semibold')}>{title}</h3>
          <p className={cn(satisfy ? textColor : 'text-gray-600', 'text-sm')}>{description}</p>
        </div>
      </div>
    </div>
  );
}
