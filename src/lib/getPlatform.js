// TODO: 根据MDN，这种方式是不可靠的，但似乎没有其他办法……
export function getPlatform() {
  const ua = navigator.userAgent;
  if (ua.includes('Mac')) return 'Mac OS';
  if (ua.includes('X11')) return 'Unix';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) return 'iOS';
  return 'Other';
}

export function isWindows() {
  return getPlatform() === 'Windows';
}

export function isMac() {
  return getPlatform() === 'Mac OS';
}

export function ctrlPressed(event) {
  return isMac() ? event.metaKey : event.ctrlKey;
}
