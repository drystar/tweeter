$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    let newTweetLength = $(this).val().length;
    let newTweetCounter = $(this).siblings('.counter');

    if (newTweetLength > 139) {
      newTweetCounter.addClass('tweetTooLong');
    } else if (newTweetLength <= 139) {
      newTweetCounter.removeClass('tweetTooLong');
    }
    newTweetCounter.text(139 - newTweetLength);
  });

});