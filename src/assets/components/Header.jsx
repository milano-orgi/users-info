import React from "react";
import { useState } from "react";

function Header() {
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

        <button className="dark-btn" onClick={() => toggleTheme("dark")}>
          Dark mode
        </button>

        <button
          className="light-btn hidden"
          onClick={() => toggleTheme("light")}>
          Light mode
        </button>
      </div>
    </nav>
  );
}

export default Header;

function toggleTheme(theme) {
  const body = document.body;
  const darkBtn = document.querySelector(".dark-btn");
  const lightBtn = document.querySelector(".light-btn");

  let [mode, setMode] = useState("dark");

  if (mode === "dark") {
    body.classList.add("dark");
  }

  if (mode === "dark") {
    body.classList.add("dark");
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("hidden");
    localStorage.setItem("mode", "dark");
  } else {
    body.classList.remove("dark");
    lightBtn.classList.add("hidden");
    darkBtn.classList.remove("hidden");
    localStorage.setItem("mode", "light");
  }
}
