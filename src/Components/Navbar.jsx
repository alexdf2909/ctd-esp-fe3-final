import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Components/utils/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useCharStates();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <header className={state.theme}>
      <h1><span>D</span>H Odonto</h1>

      <button
        className={`hamburger ${state.theme}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`nav ${state.theme} ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link to="/favs" onClick={() => setIsMenuOpen(false)}>Favs</Link>

        {/* Botón para cambiar de tema */}
        <button
          className={`themeButton ${state.theme}`}
          onClick={handleThemeToggle}
        >
          {state.theme === "light" ? "🌙" : "★"}
        </button>
      </nav>
      </header>
  )
}

export default Navbar