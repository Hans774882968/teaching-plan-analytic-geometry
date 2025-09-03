import { isAtLeastTwoDaysBeforeNow } from '@/lib/datetime';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);

export const earnScoreDays = [7, 15, 30, 60];

export function streakDaysTypeJdg(streakDays) {
  if (typeof streakDays !== 'number') throw new Error('streakDays must be a number');
  if (streakDays < 0) throw new Error('streakDays must be a non-negative number');
}

export function isStreakDayEarnScore(streakDays) {
  streakDaysTypeJdg(streakDays);
  if (streakDays > earnScoreDays[earnScoreDays.length - 1]) {
    return streakDays % 30 === 0;
  }
  return earnScoreDays.includes(streakDays);
}

export function calcNextEarnScoreDate(streakDays, isTodayCheckedIn) {
  streakDaysTypeJdg(streakDays);
  let daysNeeded = null;

  if (streakDays >= earnScoreDays[earnScoreDays.length - 1]) {
    daysNeeded = 30 - !isTodayCheckedIn - streakDays % 30;
  } else {
    for (const day of earnScoreDays) {
      if (streakDays < day) {
        daysNeeded = day - streakDays - !isTodayCheckedIn;
        break;
      }
    }
  }

  const targetDate = dayjs().add(daysNeeded, 'day');
  return targetDate;
}

// 计算连胜加分
export function calculateStreakBonus(streakDays) {
  streakDaysTypeJdg(streakDays);

  if (streakDays > earnScoreDays[earnScoreDays.length - 1]) {
    if (streakDays % 30 === 0) return 1000;
    return 30;
  }
  if (streakDays === earnScoreDays[3]) return 600;
  if (streakDays > earnScoreDays[2]) return 25;
  if (streakDays === earnScoreDays[2]) return 300;
  if (streakDays > earnScoreDays[1]) return 20;
  if (streakDays === earnScoreDays[1]) return 150;
  if (streakDays > earnScoreDays[0]) return 15;
  if (streakDays === earnScoreDays[0]) return 70;
  return 10;
}

export function calculateStreakDays(checkInDates) {
  if (!Array.isArray(checkInDates)) throw new Error('checkInDates must be an array');

  const validDates = checkInDates
    .filter((date) => dayjs(date).isValid())
    .filter((date) => !dayjs(date).isAfter(dayjs(), 'day'));
  if (validDates.length === 0) return 0;
  const sortedDates = [...validDates].sort((a, b) => dayjs(a).diff(dayjs(b)));

  if (isAtLeastTwoDaysBeforeNow(sortedDates[sortedDates.length - 1])) return 0;

  let streak = 1;
  // 从最新签到日倒序检查连续性
  for (let i = sortedDates.length - 1; i > 0; i--) {
    const currentDate = dayjs(sortedDates[i]);
    const prevDate = dayjs(sortedDates[i - 1]);

    const diffDays = currentDate.diff(prevDate, 'day');

    if (diffDays === 1) streak++;
    else break; // 中断连续
  }
  return streak;
}

export function shouldNotifyCheckIn() {
  return dayjs().hour() >= 22;
}

export function generateCalendarData(
  year,
  month,
  checkInDates,
  streakDayEarnScore,
  nextEarnScoreDate
) {
  const firstDay = dayjs().year(year).month(month).date(1);
  const startDate = firstDay.startOf('week');

  const calendar = [];
  let current = startDate.clone();

  for (let week = 0; week < 6; week++) {
    const weekData = [];
    for (let day = 0; day < 7; day++) {
      const dateStr = current.format('YYYY-MM-DD');
      const isCurrentMonth = current.month() === month;
      const isToday = current.isToday();
      const isFuture = current.isAfter(dayjs(), 'day');
      const isCheckedIn = checkInDates.includes(dateStr);
      const isNextEarnScoreDate = nextEarnScoreDate.isSame(current, 'day');
      const isTodayEarnScore = isToday && streakDayEarnScore;
      const shouldShowFlag = isNextEarnScoreDate || isTodayEarnScore;

      weekData.push({
        date: current.toDate(),
        dateStr,
        day: current.date(),
        isCurrentMonth,
        isToday,
        isFuture,
        isCheckedIn,
        isNextEarnScoreDate,
        isTodayEarnScore,
        shouldShowFlag,
      });

      current = current.add(1, 'day');
    }
    calendar.push(weekData);
  }

  return calendar;
}
