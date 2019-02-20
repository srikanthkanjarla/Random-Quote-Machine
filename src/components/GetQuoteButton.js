import React from "react";
import PropTypes from "prop-types";

function QuoteButton(props) {
  const { onGetNewQuote } = props;
  return (
    <button type="button" className="btn btn-quote" onClick={onGetNewQuote}>
      New Quote
    </button>
  );
}
QuoteButton.propTypes = {
  onGetNewQuote: PropTypes.func.isRequired
};

export default QuoteButton;
