import { useState } from 'react';
import { Home } from './pages/Home.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import { initTheme, toggleTheme as toggleThemeUtil } from './theme.js';

function App() {
  const [theme, setTheme] = useState(() => initTheme());

  const toggleTheme = () => {
    setTheme((prev) => toggleThemeUtil(prev));
  };

  return (
    <>
      <Home />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
