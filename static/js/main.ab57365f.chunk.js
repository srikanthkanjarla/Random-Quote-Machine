(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),u=a.n(r),c=(a(21),a(9)),l=a(10),s=a(15),i=a(11),m=a(14),h=a(2),d=a(12),p=a.n(d),f=(a(24),a(4)),b=a(13),E=a(5);a(26);var g=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header-text"},o.a.createElement("span",{className:"first-letter"},"Q"),o.a.createElement("span",null,"u"),o.a.createElement("span",null,"o"),o.a.createElement("span",null,"t"),o.a.createElement("span",null,"e"),o.a.createElement("span",{className:"first-letter"},"M"),o.a.createElement("span",null,"a"),o.a.createElement("span",null,"c"),o.a.createElement("span",null,"h"),o.a.createElement("span",null,"i"),o.a.createElement("span",null,"n"),o.a.createElement("span",null,"e")))};a(28);var v=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",null,"View Source on"," ",o.a.createElement("a",{href:"https://github.com/srikanthkanjarla/Random-Quote-Machine",target:"_blank",rel:"noopener noreferrer"},"Github")),o.a.createElement("span",null,"Images from"," ",o.a.createElement("a",{href:"https://unsplash.com/",target:"_blank",rel:"noopener noreferrer"},"Unsplash"," ")),o.a.createElement("span",null,"Quotes API"," ",o.a.createElement("a",{href:"https://forismatic.com/en/api/",target:"_blank",rel:"noopener noreferrer"},"forismatic")))},w=(a(30),a(3));var Q=function(e){var t=e.quoteText,a=e.quoteAuthor;return o.a.createElement("div",{className:"quote"},o.a.createElement("h1",{className:"quote-text"},o.a.createElement(w.a,{icon:"quote-left"})," ",t),o.a.createElement("p",{className:"quote-author"},"-- ",a))};a(7),a(36);var k=function(e){var t=e.path,a=e.onTweetQuote;return o.a.createElement("a",{href:t,className:"btn btn-tweet",onClick:a},o.a.createElement(w.a,{icon:["fab","twitter"]})," Tweet")};a(38);var j=function(e){var t=e.onGetQuote;return o.a.createElement("button",{type:"button",className:"btn btn-quote",onClick:t},o.a.createElement(w.a,{icon:"sync-alt"})," New Quote")};var q=function(e){var t=e.tweetPath,a=e.handleTweetQuote,n=e.handleGetQuote;return o.a.createElement("div",{className:"btn-group"},o.a.createElement(k,{path:t,onTweetQuote:a}),o.a.createElement(j,{onGetQuote:n}))};f.b.add(b.a,E.a,E.b);var T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={quoteText:"",quoteAuthor:"",backgroundImg:"",tweetPath:""},a.handleGetQuote=a.handleGetQuote.bind(Object(h.a)(Object(h.a)(a))),a.handleTweetQuote=a.handleTweetQuote.bind(Object(h.a)(Object(h.a)(a))),a.getRandomImage=a.getRandomImage.bind(Object(h.a)(Object(h.a)(a))),a.getRandomQuote=a.getRandomQuote.bind(Object(h.a)(Object(h.a)(a))),a.updateQuoteData=a.updateQuoteData.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getRandomQuote(),this.getRandomImage()}},{key:"getRandomImage",value:function(){var e=this;fetch("https://source.unsplash.com/random/1250X600").then(function(e){return e.url}).then(function(t){e.setState({backgroundImg:t})})}},{key:"getRandomQuote",value:function(){var e=this;p.a.ajax({url:"https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",jsonp:"callback",dataType:"jsonp",success:function(t){e.updateQuoteData(t)}})}},{key:"updateQuoteData",value:function(e){(e.quoteText+e.quoteAuthor).length<278?this.setState({quoteText:e.quoteText.replace(";",","),quoteAuthor:e.quoteAuthor}):this.getRandomQuote()}},{key:"handleGetQuote",value:function(){this.getRandomQuote(),this.getRandomImage()}},{key:"handleTweetQuote",value:function(){var e=this.state,t=e.quoteText,a=e.quoteAuthor;this.setState({tweetPath:"https://twitter.com/intent/tweet?text=".concat(t,"--").concat(a)})}},{key:"render",value:function(){var e=this.state,t=e.quoteText,a=e.quoteAuthor,n=e.backgroundImg,r=e.tweetPath;return o.a.createElement("div",{className:"app",style:{backgroundImage:"url(".concat(n,")")}},o.a.createElement(g,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"content"},o.a.createElement(Q,{quoteText:t,quoteAuthor:a}),o.a.createElement(q,{tweetPath:r,handleTweetQuote:this.handleTweetQuote,handleGetQuote:this.handleGetQuote})),o.a.createElement(v,null)))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[16,2,1]]]);
//# sourceMappingURL=main.ab57365f.chunk.js.map