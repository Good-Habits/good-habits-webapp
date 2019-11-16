import React from "react";

const TopNav = ({ title }) => (
  <nav className="horizontal-centered">
    <button className="shake">🍔</button>
    <p>
      <i>Good</i>
      <strong>Habits</strong>
      {title && `: ${title}`}
    </p>
    <a href="/auth/logout" className="logout">
      logout
    </a>
  </nav>
);

export default TopNav;
