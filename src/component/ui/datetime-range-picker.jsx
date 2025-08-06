import { cn } from '@/lib/utils';
import { TimePicker } from '@/component/ui/datetime-picker';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/component/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/component/ui/calendar';
import { Button } from '@/component/ui/button';

export default function DatetimeRangePicker({
  date,
  setDate,
}) {
  const setDateFrom = (newDate) => setDate({ ...date, from: newDate });
  const setDateTo = (newDate) => setDate({ ...date, to: newDate });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            // 移动端只有11px合适，10太小12溢出
            'w-full sm:w-70 md:w-90 text-[11px] md:text-sm justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, 'yy-MM-dd HH:mm:ss')} -{' '}
                {format(date.to, 'yy-MM-dd HH:mm:ss')}
              </>
            ) : (
              format(date.from, 'yy-MM-dd HH:mm:ss')
            )
          ) : (
            <span>请选择日期</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-evenly items-center p-3 border-t border-border">
          <TimePicker
            setDate={setDateFrom}
            date={date?.from}
          />
          <TimePicker
            setDate={setDateTo}
            date={date?.to}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
