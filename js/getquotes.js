/*
var url = API link to get random quote - 'https://forismatic.com/en/api/'
1.getQuote()    : get random quote from API source and call filterQuote()
2.filterQuote() : if quote length is more than 140 characters get new quote  and call quoteData() 
3.quoteData()  : add quote data to object and call viewQuote()  
4.viewQuote()   : display quote to user
*/


var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';

function getQuote() {
    $.getJSON(url, filterQuote, 'jsonp');
}

function filterQuote(data) {
    if ((data.quoteText).length > 139) {

        getQuote();
    } else {
        quoteText(data);
    }
}

function quoteText(data) {
    //quote data object
    var quoteObj = {
        quote: data.quoteText,
        quoteAuthor: data.quoteAuthor,
        quoteHashTag: 'FreeCodeCamp,RandomQuoteMachine'
    }
    viewQuote(quoteObj);
}


function viewQuote(quoteObj) {
    $('#quote-text').text(quoteObj.quote);
    $('#quote-author').text('-- ' + quoteObj.quoteAuthor);
    // if author data empty display unknown
    if (quoteObj.quoteAuthor == '') { $('#quote-author').text('-- Unknown'); }
    //tweet quote on clicking tweet link
    var quoteTweet = 'https://twitter.com/intent/tweet?text=' + quoteObj.quote + ' - ' + quoteObj.quoteAuthor + '&hashtags=' + quoteObj.quoteHashTag + '';
    $('#tweet-quote').attr('href', quoteTweet);
}

$('#get-quote').on('click', function(e) {
    getquote();
    e.preventDefault(); //prevent default behaviour of anchor tag on click
});




getQuote();