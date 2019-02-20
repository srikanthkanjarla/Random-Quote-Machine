import React from "react";
import PropTypes from "prop-types";
import "./RandomQuote.css";

function randomQuote(props) {
  const { quoteText, quoteAuthor } = props;
  return (
    <div className="quote">
      <p className="quote-author">{quoteAuthor}</p>
      <p className="quote-text">{quoteText}</p>
    </div>
  );
}
randomQuote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired
};
export default randomQuote;
