export const COOKIE_NAME = 'theme';

export function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? match[1] : null;
}

export function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function initTheme() {
  const saved = getCookie(COOKIE_NAME);
  const theme = saved === 'light' || saved === 'dark'
    ? saved
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  applyTheme(theme);
  return theme;
}

export function toggleTheme(current) {
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  setCookie(COOKIE_NAME, next, 365);
  return next;
}
