import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { isNil } from 'lodash-es';

dayjs.extend(duration);

export function getQuestionScore(question) {
  return question?.score || 10;
}

export function getTimerText(seconds) {
  if (isNil(seconds)) {
    return '无';
  }
  if (typeof seconds !== 'number' || isNaN(seconds)) {
    throw new TypeError(`seconds must be a number, but got "${seconds}"`);
  }
  if (seconds < 0) {
    return '00:00';
  }
  if (seconds < 3600) {
    return dayjs.duration(seconds, 'seconds').format('mm:ss');
  }
  if (seconds < 86400) {
    return dayjs.duration(seconds, 'seconds').format('HH:mm:ss');
  }
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}
