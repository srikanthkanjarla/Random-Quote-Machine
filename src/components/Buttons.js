import React from "react";
import PropTypes from "prop-types";
import TweetButton from "./TweetButton";
import QuoteButton from "./QuoteButton";

function Buttons(props) {
  const { tweetPath, handleTweetQuote, handleGetQuote } = props;
  return (
    <div className="btn-group">
      <TweetButton path={tweetPath} onTweetQuote={handleTweetQuote} />
      <QuoteButton onGetQuote={handleGetQuote} />
    </div>
  );
}
Buttons.propTypes = {
  handleTweetQuote: PropTypes.func.isRequired,
  handleGetQuote: PropTypes.func.isRequired,
  tweetPath: PropTypes.string.isRequired
};
export default Buttons;
