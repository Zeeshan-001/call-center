import React from "react";

function NavItem({ icon, item, active }) {
  const classes = `side-nav__item${active ? " side-nav__item--active" : ""}`;

  return (
    <li className={classes}>
      <a href="#" className="side-nav__link">
        {icon}
        <span>{item}</span>
      </a>
    </li>
  );
}

export default NavItem;
