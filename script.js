var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";
function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}
function createTweet(input) {
	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
    	if (tweetText.length > 140) {
	getQuote();
}
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = "Unknown author";
	}

else {
	var tweet = tweetLink + encodeURIComponent(tweetText);
	$('.quote').text(input.quoteText);
	$('.author').text("Author: " + input.quoteAuthor);
	$('.tweet').attr('href', tweet);
}
}
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});
