import dayjs from 'dayjs';

export function isValidHour(value) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

export function isValid12Hour(value) {
  return /^(0[1-9]|1[0-2])$/.test(value);
}

export function isValidMinuteOrSecond(value) {
  return /^[0-5][0-9]$/.test(value);
}

export function getValidNumber(
  value,
  { max, min = 0, loop = false }
) {
  let numericValue = parseInt(value, 10);

  if (!isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max;
      if (numericValue < min) numericValue = min;
    } else {
      if (numericValue > max) numericValue = min;
      if (numericValue < min) numericValue = max;
    }
    return numericValue.toString().padStart(2, '0');
  }

  return '00';
}

export function getValidHour(value) {
  if (isValidHour(value)) return value;
  return getValidNumber(value, { max: 23 });
}

export function getValid12Hour(value) {
  if (isValid12Hour(value)) return value;
  return getValidNumber(value, { min: 1, max: 12 });
}

export function getValidMinuteOrSecond(value) {
  if (isValidMinuteOrSecond(value)) return value;
  return getValidNumber(value, { max: 59 });
}

export function getValidArrowNumber(
  value,
  { min, max, step }
) {
  let numericValue = parseInt(value, 10);
  if (!isNaN(numericValue)) {
    numericValue += step;
    return getValidNumber(String(numericValue), { min, max, loop: true });
  }
  return '00';
}

export function getValidArrowHour(value, step) {
  return getValidArrowNumber(value, { min: 0, max: 23, step });
}

export function getValidArrow12Hour(value, step) {
  return getValidArrowNumber(value, { min: 1, max: 12, step });
}

export function getValidArrowMinuteOrSecond(value, step) {
  return getValidArrowNumber(value, { min: 0, max: 59, step });
}

export function setMinutes(date, value) {
  const minutes = getValidMinuteOrSecond(value);
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

export function setSeconds(date, value) {
  const seconds = getValidMinuteOrSecond(value);
  date.setSeconds(parseInt(seconds, 10));
  return date;
}

export function setHours(date, value) {
  const hours = getValidHour(value);
  date.setHours(parseInt(hours, 10));
  return date;
}

export function set12Hours(date, value, period) {
  const hours = parseInt(getValid12Hour(value), 10);
  const convertedHours = convert12HourTo24Hour(hours, period);
  date.setHours(convertedHours);
  return date;
}

export function setDateByType(
  date,
  value,
  type,
  period
) {
  switch (type) {
  case 'minutes':
    return setMinutes(date, value);
  case 'seconds':
    return setSeconds(date, value);
  case 'hours':
    return setHours(date, value);
  case '12hours': {
    if (!period) return date;
    return set12Hours(date, value, period);
  }
  default:
    return date;
  }
}

export function getDateByType(date, type) {
  switch (type) {
  case 'minutes':
    return getValidMinuteOrSecond(String(date.getMinutes()));
  case 'seconds':
    return getValidMinuteOrSecond(String(date.getSeconds()));
  case 'hours':
    return getValidHour(String(date.getHours()));
  case '12hours':
    const hours = display12HourValue(date.getHours());
    return getValid12Hour(String(hours));
  default:
    return '00';
  }
}

export function getArrowByType(
  value,
  step,
  type
) {
  switch (type) {
  case 'minutes':
    return getValidArrowMinuteOrSecond(value, step);
  case 'seconds':
    return getValidArrowMinuteOrSecond(value, step);
  case 'hours':
    return getValidArrowHour(value, step);
  case '12hours':
    return getValidArrow12Hour(value, step);
  default:
    return '00';
  }
}

export function convert12HourTo24Hour(hour, period) {
  if (period === 'PM') {
    if (hour <= 11) {
      return hour + 12;
    } else {
      return hour;
    }
  } else if (period === 'AM') {
    if (hour === 12) return 0;
    return hour;
  }
  return hour;
}

export function display12HourValue(hours) {
  if (hours === 0 || hours === 12) return '12';
  if (hours >= 22) return `${hours - 12}`;
  if (hours % 12 > 9) return `${hours}`;
  return `0${hours % 12}`;
}

export function isAtLeastTwoDaysBeforeNow(targetDate) {
  const twoDaysAgo = dayjs().subtract(2, 'day');
  return !dayjs(targetDate).isAfter(twoDaysAgo, 'day');
}
