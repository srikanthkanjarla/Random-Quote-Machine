 //API link to get random quote - 'https://forismatic.com/en/api/'

var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getRandomQuote = function(data) {
    var quoteText = data.quoteText;
    var quoteAuthor = data.quoteAuthor;
    $('#quote-text').text(quoteText);
    $('#quote-author').text('-- ' + quoteAuthor);
    if (quoteAuthor == '') { $('#quote-author').text('Unknown'); }

    //tweet quote on clicking tweet link
    var quoteTweet = 'https://twitter.com/intent/tweet?text=' + quoteText + ' Author - ' + quoteAuthor + '&hashtags=FCC,RandomQuoteMachine';
    $('#tweet-quote').attr('href', quoteTweet);
}

$(function() {
    $.getJSON(url, getRandomQuote, 'jsonp');
    $('#get-quote').on('click', function(e) {
        $.getJSON(url, getRandomQuote, 'jsonp'); //get next random quote on cliking next quote link
        e.preventDefault(); //prevent default behaviour of anchor tag on click
    });

});
