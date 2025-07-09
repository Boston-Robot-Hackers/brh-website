import React from 'react';

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-nav shadow backdrop-blur-md cursor-pointer hover:shadow-lg"
            aria-label="Toggle dark mode"
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}
