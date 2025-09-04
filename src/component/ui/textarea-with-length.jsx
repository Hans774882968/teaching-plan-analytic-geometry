import { cn } from '@/lib/utils';
import { Textarea } from './textarea';

export default function TextareaWithLength({ wrapperClassName, value, maxLength, ...props }) {
  return (
    <div className={cn('relative w-full', wrapperClassName)}>
      <Textarea value={value} maxLength={maxLength} {...props} />
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
        {value.length}/{maxLength}
      </div>
    </div>
  );
}
