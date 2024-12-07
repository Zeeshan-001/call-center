import React from "react";
import userImage from "../../assets/images/user.jpg";
import logo from "../../assets/svgs/logo.svg";
import { IoMdSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="user-nav__logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Kunden suchen"
        />

        <button className="search__button">
          <IoMdSearch />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <FiBell />
          <span className="user-nav__notification">7</span>
        </div>

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
