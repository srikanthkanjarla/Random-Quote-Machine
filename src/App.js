import React from "react";
import $ from "jquery";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RandomQuote from "./components/RandomQuote";
import Buttons from "./components/Buttons";

library.add(fab, faQuoteLeft, faSyncAlt);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: "",
      quoteAuthor: "",
      backgroundImg: "",
      tweetPath: ""
    };
    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.handleTweetQuote = this.handleTweetQuote.bind(this);
    this.getRandomImage = this.getRandomImage.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.updateQuoteData = this.updateQuoteData.bind(this);
  }

  componentDidMount() {
    this.getRandomQuote();
    this.getRandomImage();
  }

  getRandomImage() {
    fetch("https://source.unsplash.com/random/1250X600")
      .then(src => src.url)
      .then(imgUrl => {
        this.setState({
          backgroundImg: imgUrl
        });
      });
  }

  getRandomQuote() {
    const self = this;
    $.ajax({
      url:
        "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
      jsonp: "callback",
      dataType: "jsonp",
      success(response) {
        self.updateQuoteData(response);
      }
    });
  }

  updateQuoteData(data) {
    if ((data.quoteText + data.quoteAuthor).length < 278) {
      this.setState({
        quoteText: data.quoteText.replace(";", ","),
        quoteAuthor: data.quoteAuthor
      });
    } else {
      this.getRandomQuote();
    }
  }

  handleGetQuote() {
    this.getRandomQuote();
    this.getRandomImage();
  }

  handleTweetQuote() {
    const { quoteText, quoteAuthor } = this.state;
    this.setState({
      tweetPath: `https://twitter.com/intent/tweet?text=${quoteText}--${quoteAuthor}`
    });
  }

  render() {
    const { quoteText, quoteAuthor, backgroundImg, tweetPath } = this.state;
    return (
      <div className="app" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Header />
        <div className="container">
          <div className="content">
            <RandomQuote quoteText={quoteText} quoteAuthor={quoteAuthor} />
            <Buttons
              tweetPath={tweetPath}
              handleTweetQuote={this.handleTweetQuote}
              handleGetQuote={this.handleGetQuote}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
