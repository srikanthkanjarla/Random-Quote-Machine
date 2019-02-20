import React from "react";
import PropTypes from "prop-types";

function QuoteButton(props) {
  const { src, onTweetQuote } = props;
  return (
    <a href={src} className="btn btn-tweet" onClick={onTweetQuote}>
      Tweet
    </a>
  );
}
QuoteButton.propTypes = {
  onTweetQuote: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default QuoteButton;
