import React from "react";
import "./Header.css";

function Header() {
  const headerText = "QuoteMachine";
  return (
    <header className="header">
      <div className="header-text">
        {headerText.split("").map(letter => (
          <span>{letter}</span>
        ))}
      </div>
    </header>
  );
}

export default Header;
