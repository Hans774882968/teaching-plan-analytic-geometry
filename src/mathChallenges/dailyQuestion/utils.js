import dayjs from 'dayjs';

// 计算连胜加分
export function calculateStreakBonus(streakDays) {
  if (typeof streakDays !== 'number') throw new Error('streakDays must be a number');
  if (streakDays <= 0) throw new Error('streakDays must be a positive number');

  if (streakDays >= 61) {
    if (streakDays % 30 === 0) return 1000;
    return 30;
  }
  if (streakDays === 60) return 600;
  if (streakDays >= 31) return 25;
  if (streakDays === 30) return 300;
  if (streakDays >= 16) return 20;
  if (streakDays === 15) return 150;
  if (streakDays >= 8) return 15;
  if (streakDays === 7) return 70;
  return 10;
}

export function generateCalendarData(year, month, checkInDates) {
  const firstDay = dayjs().year(year).month(month).date(1);
  const startDate = firstDay.startOf('week');

  const calendar = [];
  let current = startDate.clone();

  for (let week = 0; week < 6; week++) {
    const weekData = [];
    for (let day = 0; day < 7; day++) {
      const dateStr = current.format('YYYY-MM-DD');
      const isCurrentMonth = current.month() === month;
      const isFuture = current.isAfter(dayjs(), 'day');
      const isCheckedIn = checkInDates.includes(dateStr);

      weekData.push({
        date: current.toDate(),
        dateStr,
        day: current.date(),
        isCurrentMonth,
        isFuture,
        isCheckedIn,
      });

      current = current.add(1, 'day');
    }
    calendar.push(weekData);
  }

  return calendar;
}
