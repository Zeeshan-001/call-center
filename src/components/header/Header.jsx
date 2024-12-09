import React, { useState } from "react";
import userImage from "../../assets/images/user.jpg";
import logo from "../../assets/svgs/logo.svg";
import { FiBell } from "react-icons/fi";

function Header({ onClientSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onClientSearch(value);
  };

  return (
    <header className="header">
      <div className="user-nav__logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>

      {/* Handle Input Fron User */}
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Geben Sie den Vor- oder Nachnamen ein"
          value={inputValue}
          name="name"
          onChange={handleInput}
        />
      </form>

      <nav className="user-nav">
        {/* Notification  */}
        <div className="user-nav__icon-box">
          <FiBell />
          <span className="user-nav__notification">7</span>
        </div>

        {/* User Menu */}
        <div className="user-nav__user">
          <img
            src={userImage}
            alt="User picture"
            className="user-nav__user-photo"
          />

          <div className="user-nav__user-info">
            <span className="user-nav__user-name">Jessica Schmitt</span>
            <span className="user-nav__user-title">Admin</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
