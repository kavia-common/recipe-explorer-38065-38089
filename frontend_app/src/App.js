import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './SignIn';

/**
 * PUBLIC_INTERFACE
 * App is the root component of the Recipe Explorer frontend.
 * It currently renders the Sign In screen to align with the Figma extract.
 * Includes a theme toggle for light/dark modes.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document root for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {/* Render the Figma-aligned Sign In screen */}
        <SignIn />
      </header>
    </div>
  );
}

export default App;
