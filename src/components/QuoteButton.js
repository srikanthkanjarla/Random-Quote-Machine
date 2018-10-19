import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import "./QuoteButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuoteButton(props) {
  const { onGetQuote } = props;
  return (
    <button type="button" className="btn btn-quote" onClick={onGetQuote}>
      <FontAwesomeIcon icon="sync-alt" /> New Quote
    </button>
  );
}
QuoteButton.propTypes = {
  onGetQuote: PropTypes.func.isRequired
};

export default QuoteButton;
