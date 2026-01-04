import React, { useState } from "react";

function Header() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      document.body.classList.add("dark");
      setMode("dark");
    } else {
      document.body.classList.remove("dark");
      setMode("light");
    }
  };

  return (
    <nav className="container">
      <h1 className="logo">Users</h1>

      <div className="search">
        <input type="search" placeholder="Search users..." />
      </div>

      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="login">Login</button>

        <button
          className={mode === "light" ? "dark-btn" : "light-btn"}
          onClick={toggleMode}>
          {mode === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
