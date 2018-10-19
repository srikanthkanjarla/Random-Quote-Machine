import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
        View Source on{" "}
        <a
          href="https://github.com/srikanthkanjarla/Random-Quote-Machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </span>
      <span>
        Images{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash{" "}
        </a>
      </span>
      <span>
        Quotes{" "}
        <a
          href="https://forismatic.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          forismatic
        </a>
      </span>
    </footer>
  );
}
export default Footer;
