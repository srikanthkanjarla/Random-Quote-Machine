import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import "./TweetButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuoteButton(props) {
  const { path, onTweetQuote } = props;
  return (
    <a href={path} className="btn btn-tweet" onClick={onTweetQuote}>
      <FontAwesomeIcon icon={["fab", "twitter"]} /> Tweet
    </a>
  );
}
QuoteButton.propTypes = {
  onTweetQuote: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default QuoteButton;
