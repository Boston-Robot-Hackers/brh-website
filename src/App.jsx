import { useEffect, useState } from 'react';
import { Home } from './pages/Home.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

const COOKIE_NAME = 'theme';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? match[1] : null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = getCookie(COOKIE_NAME);
    const initial = saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    setCookie(COOKIE_NAME, next, 365);
  };

  return (
    <>
      <Home />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
