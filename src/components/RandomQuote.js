import React from "react";
import PropTypes from "prop-types";
import "./RandomQuote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function randomQuote(props) {
  const { quoteText, quoteAuthor } = props;
  return (
    <div className="quote">
      <h1 className="quote-text">
        <FontAwesomeIcon icon="quote-left" /> {quoteText}
      </h1>

      <p className="quote-author">-- {quoteAuthor}</p>
    </div>
  );
}
randomQuote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired
};
export default randomQuote;
