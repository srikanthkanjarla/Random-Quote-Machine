import React from "react";
import Header from "./components/Header";
import RandomQuote from "./components/RandomQuote";
import TwitterIntentLink from "./components/TwitterIntentLink";
import GetQuoteButton from "./components/GetQuoteButton";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Button.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText:
        "Be sure you put your feet in the right place, then stand firm",
      quoteAuthor: "Abraham Lincoln",
      backgroundImageURL: "",
      twitterIntentURL: ""
    };
    this.handleGetNewQuote = this.handleGetNewQuote.bind(this);
    this.handleTweetQuote = this.handleTweetQuote.bind(this);
    this.getRandomImage = this.getRandomImage.bind(this);
    this.updateQuoteData = this.updateQuoteData.bind(this);

    // JSONP callback method and quotes API end-point
    this.randomNum = Math.round(10000 * Math.random());
    this.callbackMethodName = `cb_${this.randomNum}`;
    this.END_POINT =
      "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=";
  }

  componentDidMount() {
    // JSONP global callback method
    window[this.callbackMethodName] = data => {
      this.updateQuoteData({ text: data.quoteText, author: data.quoteAuthor });
    };
    this.getRandomQuote();
    this.getRandomImage();
  }

  // JSONP function call to API
  getJsonp(url, callback) {
    const script = document.createElement("script");
    script.id = `script_${this.callbackMethodName}`;
    script.src = url + callback;
    document.body.appendChild(script);
    document.getElementById(script.id).remove();
  }

  getRandomQuote() {
    this.getJsonp(this.END_POINT, this.callbackMethodName);
  }

  getRandomImage() {
    fetch("https://source.unsplash.com/random/")
      .then(src => src.url)
      .then(imageURL => {
        this.setState({
          backgroundImageURL: imageURL
        });
      });
  }

  updateQuoteData(data) {
    if ((data.text + data.author).length < 278) {
      this.setState({
        quoteText: data.text.replace(";", ","),
        quoteAuthor: data.author
      });
    } else {
      this.getRandomQuote();
    }
  }

  handleGetNewQuote() {
    this.getRandomQuote();
    this.getRandomImage();
  }

  handleTweetQuote() {
    const { quoteText, quoteAuthor } = this.state;
    this.setState({
      twitterIntentURL: `https://twitter.com/intent/tweet?text=${quoteText}--${quoteAuthor}`
    });
  }

  render() {
    const {
      quoteText,
      quoteAuthor,
      backgroundImageURL,
      twitterIntentURL
    } = this.state;
    const style = {
      backgroundImage: `linear-gradient(rgba(125, 17, 40,0.5),rgb(125,17,40)),url(${backgroundImageURL})`
    };
    return (
      <div className="app" style={style}>
        <Header />
        <RandomQuote quoteText={quoteText} quoteAuthor={quoteAuthor} />
        <div className="button-controls">
          <TwitterIntentLink
            src={twitterIntentURL}
            onTweetQuote={this.handleTweetQuote}
          />
          <GetQuoteButton onGetNewQuote={this.handleGetNewQuote} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
