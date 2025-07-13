import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MembersPage from './pages/MembersPage.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import { initTheme, toggleTheme as toggleThemeUtil } from './theme.js';

function App() {
  const [theme, setTheme] = useState(() => initTheme());

  const toggleTheme = () => {
    setTheme((prev) => toggleThemeUtil(prev));
  };

  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </>
  );
}

export default App;