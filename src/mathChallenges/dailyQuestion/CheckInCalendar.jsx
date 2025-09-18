import dayjs from 'dayjs';
import { Fragment, useState } from 'react';
import { useDailyQuestionStore } from './dailyQuestionState';
import { calcNextEarnScoreDate, generateCalendarData, isStreakDayEarnScore } from './utils';
import { FaChevronLeft, FaChevronRight, FaFlag } from 'react-icons/fa';
import { Button } from '@/component/ui/button';
import { cn } from '@/lib/utils';

function DayDisplayAsCircle({ children }) {
  return (
    <div className="w-8 h-8 rounded-full bg-(--tpm-primary) flex items-center justify-center text-white font-bold">
      {children}
    </div>
  );
}

function MonthPicker({ currentYear, onSelectMonth }) {
  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="grid grid-cols-4 gap-2">
      {months.map((month) => {
        const shouldHighlightMonth = dayjs().month() === month && dayjs().year() === currentYear;

        return (
          <div
            key={month}
            className={cn(
              'p-4 text-sm md:text-base cursor-pointer text-center bg-white',
              'hover:bg-primary hover:text-white transition-colors duration-300',
              shouldHighlightMonth && 'border-2 border-primary'
            )}
            onClick={() => onSelectMonth(month)}
          >
            {month + 1}月
          </div>
        );
      })}
    </div>
  );
}

const START_YEAR = 1900;
const END_YEAR = dayjs().year() + 100;
const END_YEAR_PAGE = Math.floor((END_YEAR - START_YEAR) / 12);
const LAST_VISIBLE_YEAR = START_YEAR + END_YEAR_PAGE * 12 + 11;

// 计算当前页的起始年份
const getPageStartYear = (year, startYear) => {
  const pageIndex = Math.floor((year - startYear) / 12);
  return startYear + pageIndex * 12;
};

/**
 * 在此记录一个有趣的现象（不是bug）：
 * 在年份选择器里，从其他页码切到含有当前年份的页码时，当前年份的边框颜色并没有从黑到蓝的过渡。
 * 但在月份选择器里有这样的过渡。盲猜是因为月份选择器的月份文案是不变的，而年份选择器的年份文案会变化，
 * 所以年份选择器在切换页码时会有重绘，而月份选择器没有。
 */
function YearPicker({ currentYear, onSelectYear }) {
  const pageStartYear = getPageStartYear(currentYear, START_YEAR);
  const years = Array.from({ length: 12 }, (_, i) => pageStartYear + i);

  return (
    <div className="grid grid-cols-4 gap-2">
      {years.map((year) => {
        const shouldHighlightYear = dayjs().year() === year;

        return (
          <div
            key={year}
            className={cn(
              'p-4 text-sm md:text-base cursor-pointer text-center bg-white',
              'hover:bg-primary hover:text-white transition-colors duration-300',
              shouldHighlightYear && 'border-2 border-primary'
            )}
            onClick={() => {
              onSelectYear(year);
            }}
          >
            {year}
          </div>
        );
      })}
    </div>
  );
}

export default function CheckInCalendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' | 'month' | 'year'

  const {
    checkInDates,
    getStreakDays,
    isTodayCheckedIn,
  } = useDailyQuestionStore();
  const streakDays = getStreakDays();
  const streakDayEarnScore = isStreakDayEarnScore(streakDays);

  const nextEarnScoreDate = calcNextEarnScoreDate(streakDays, isTodayCheckedIn());
  const calendarData = generateCalendarData(
    currentMonth.year(),
    currentMonth.month(),
    checkInDates,
    streakDayEarnScore,
    nextEarnScoreDate
  );

  const changeMonth = (delta) => {
    const nextCurrentMonth = currentMonth.add(delta, 'month');
    if (nextCurrentMonth.year() < START_YEAR || nextCurrentMonth.year() > LAST_VISIBLE_YEAR) {
      return;
    }
    setCurrentMonth(nextCurrentMonth);
  };

  const changeYear = (delta) => {
    const nextCurrentMonth = currentMonth.add(delta, 'year');
    if (nextCurrentMonth.year() < START_YEAR || nextCurrentMonth.year() > LAST_VISIBLE_YEAR) {
      return;
    }
    setCurrentMonth(nextCurrentMonth);
  };

  const changeYearPage = (delta) => {
    if (viewMode === 'year') {
      const currentPage = Math.floor((currentMonth.year() - START_YEAR) / 12);
      const newPage = Math.min(END_YEAR_PAGE, Math.max(currentPage + delta, 0));
      const newYear = START_YEAR + newPage * 12;
      setCurrentMonth(dayjs(new Date(newYear, currentMonth.month())));
    } else {
      changeYear(delta);
    }
  };

  const handleTitleClick = () => {
    if (viewMode === 'calendar') {
      setViewMode('month');
    } else if (viewMode === 'month') {
      setViewMode('year');
    }
  };

  const handleSelectMonth = (month) => {
    setCurrentMonth(dayjs(new Date(currentMonth.year(), month)));
    setViewMode('calendar');
  };

  const handleSelectYear = (year) => {
    setCurrentMonth(dayjs(new Date(year, currentMonth.month())));
    setViewMode('month');
  };

  const getDisplayTitle = () => {
    if (viewMode === 'calendar') {
      return currentMonth.format('YYYY年M月');
    } else if (viewMode === 'month') {
      return currentMonth.format('YYYY年');
    } else {
      const pageStartYear = START_YEAR + Math.floor((currentMonth.year() - START_YEAR) / 12) * 12;
      return `${pageStartYear} - ${pageStartYear + 11}`;
    }
  };

  const isTitleClickable = viewMode === 'calendar' || viewMode === 'month';

  const getLeftButtonAction = () => {
    if (viewMode === 'year') {
      return () => changeYearPage(-1);
    } else if (viewMode === 'month') {
      return () => changeYear(-1);
    } else {
      return () => changeMonth(-1);
    }
  };

  const getRightButtonAction = () => {
    if (viewMode === 'year') {
      return () => changeYearPage(1);
    } else if (viewMode === 'month') {
      return () => changeYear(1);
    } else {
      return () => changeMonth(1);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer hover:text-(--tpm-primary)"
          onClick={getLeftButtonAction()}
        >
          <FaChevronLeft />
        </Button>
        <h3
          className={cn(
            'text-lg font-medium text-foreground',
            isTitleClickable && 'cursor-pointer'
          )}
          onClick={handleTitleClick}
        >
          {getDisplayTitle()}
        </h3>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer hover:text-(--tpm-primary)"
          onClick={getRightButtonAction()}
        >
          <FaChevronRight />
        </Button>
      </div>

      {viewMode === 'month' ? (
        <MonthPicker
          currentYear={currentMonth.year()}
          onSelectMonth={handleSelectMonth}
        />
      ) : viewMode === 'year' ? (
        <YearPicker
          currentYear={currentMonth.year()}
          onSelectYear={handleSelectYear}
        />
      ) : (
        <div className="grid grid-cols-7 gap-2">
          {['一', '二', '三', '四', '五', '六', '日'].map((day) => (
            <div
              key={day}
              className="flex justify-center items-center text-sm md:text-base font-medium text-gray-500 py-2"
            >
              {day}
            </div>
          ))}

          {calendarData.map((week, weekIndex) => (
            <Fragment key={weekIndex}>
              {week.map((day, dayIndex) => {
                const ky = `${weekIndex}-${dayIndex}`;
                const dayText = day.shouldShowFlag ? <FaFlag /> : (
                  day.isToday ? '今' : day.day
                );

                return (
                  <div
                    key={ky}
                    className={cn(
                      'flex justify-center items-center py-2 text-sm md:text-base',
                      day.isCurrentMonth ? 'text-gray-800' : 'text-gray-300'
                    )}
                  >
                    {day.isCheckedIn && day.isCurrentMonth ? (
                      <DayDisplayAsCircle>{dayText}</DayDisplayAsCircle>
                    ) : (
                      <span>{dayText}</span>
                    )}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
