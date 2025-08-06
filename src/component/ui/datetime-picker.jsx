import { Input } from '@/component/ui/input';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/component/ui/select';
import { Label } from '@/component/ui/label';
import {
  display12HourValue,
  getArrowByType,
  getDateByType,
  setDateByType,
} from '@/lib/datetime';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

export const TimePickerInput = forwardRef(
  (
    {
      className,
      type = 'tel',
      value,
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      setDate,
      onChange,
      onKeyDown,
      picker,
      period,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref
  ) => {
    const [flag, setFlag] = useState(false);
    const [prevIntKey, setPrevIntKey] = useState('0');

    useEffect(() => {
      if (flag) {
        const timer = setTimeout(() => {
          setFlag(false);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [flag]);

    const calculatedValue = useMemo(() => {
      return getDateByType(date, picker);
    }, [date, picker]);

    const calculateNewValue = (key) => {
      if (picker === '12hours') {
        if (flag && calculatedValue.slice(1, 2) === '1' && prevIntKey === '0')
          return '0' + key;
      }

      return !flag ? '0' + key : calculatedValue.slice(1, 2) + key;
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') return;
      e.preventDefault();
      if (e.key === 'ArrowRight') onRightFocus?.();
      if (e.key === 'ArrowLeft') onLeftFocus?.();
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        const step = e.key === 'ArrowUp' ? 1 : -1;
        const newValue = getArrowByType(calculatedValue, step, picker);
        if (flag) setFlag(false);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newValue, picker, period));
      }
      if (e.key >= '0' && e.key <= '9') {
        if (picker === '12hours') setPrevIntKey(e.key);

        const newValue = calculateNewValue(e.key);
        if (flag) onRightFocus?.();
        setFlag((prev) => !prev);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newValue, picker, period));
      }
    };

    return (
      <Input
        ref={ref}
        id={id || picker}
        name={name || picker}
        className={cn(
          'w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none',
          className
        )}
        value={value || calculatedValue}
        onChange={(e) => {
          e.preventDefault();
          onChange?.(e);
        }}
        type={type}
        inputMode="decimal"
        onKeyDown={(e) => {
          onKeyDown?.(e);
          handleKeyDown(e);
        }}
        {...props}
      />
    );
  }
);

TimePickerInput.displayName = 'TimePickerInput';

export const TimePeriodSelect = forwardRef(
  ({ period, setPeriod, date, setDate, onLeftFocus, onRightFocus }, ref) => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') onRightFocus?.();
      if (e.key === 'ArrowLeft') onLeftFocus?.();
    };

    const handleValueChange = (value) => {
      setPeriod(value);

      if (date) {
        const tempDate = new Date(date);
        const hours = display12HourValue(date.getHours());
        setDate(setDateByType(tempDate, hours.toString(), '12hours', period === 'AM' ? 'PM' : 'AM'));
      }
    };

    return (
      <div className="flex h-10 items-center">
        <Select value={period} onValueChange={(value) => handleValueChange(value)}>
          <SelectTrigger ref={ref} className="w-[65px] focus:bg-accent focus:text-accent-foreground" onKeyDown={handleKeyDown}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AM">AM</SelectItem>
            <SelectItem value="PM">PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }
);

TimePeriodSelect.displayName = 'TimePeriodSelect';

export function TimePicker({ date, setDate, picker = '12hours' }) {
  const [period, setPeriod] = useState('PM');

  const minuteRef = useRef(null);
  const hourRef = useRef(null);
  const secondRef = useRef(null);
  const periodRef = useRef(null);

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor="hours" className="text-xs">
          Hours
        </Label>
        <TimePickerInput
          picker={picker}
          period={period}
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="minutes" className="text-xs">
          Minutes
        </Label>
        <TimePickerInput
          picker="minutes"
          id="minutes12"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="seconds" className="text-xs">
          Seconds
        </Label>
        <TimePickerInput
          picker="seconds"
          id="seconds12"
          date={date}
          setDate={setDate}
          ref={secondRef}
          onLeftFocus={() => minuteRef.current?.focus()}
          onRightFocus={() => periodRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="period" className="text-xs">
          Period
        </Label>
        <TimePeriodSelect
          period={period}
          setPeriod={setPeriod}
          date={date}
          setDate={setDate}
          ref={periodRef}
          onLeftFocus={() => secondRef.current?.focus()}
        />
      </div>
    </div>
  );
}
