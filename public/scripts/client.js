
// create a new tweet article from user input
  const createTweetElement = function (tweet) {

  const $newTweet = $("<article>").addClass("tweet");

  const $img = $("<img>").attr("src", tweet.user.avatars);

  const $name = $("<h4>").addClass("name").text(tweet.user.name);

  const $handle = $("<p>").addClass("handle").text(tweet.user.handle);

  const $content = $("<div>").addClass("content").text(tweet.content.text);

  const $timeStamp = $("<p>").addClass("timeStamp").text(moment(tweet.created_at).startOf('minute').fromNow());

  const $tweetIcons = $("<h4>").addClass("icons").html('<i class="fa fa-flag-o"></i><i class="fas fa-retweet"></i><i class="fa fa-heart-o"></i>');


    const $header = $("<header>").append($img).append($name).append($handle)
    const $footer = $("<footer>").append($timeStamp).append($tweetIcons)

  return $newTweet.append($header).append($content).append($footer)

 };

 //jQuery loaded 
 $(document).ready(function (){

// function to take in an array of tweets and append each new tweet "all-tweets' container of tweeter page 


   
// function activated when new tweet composed || toggles and focuses the text area 
$('#compose-new button').click(function () {
  $('section.new-tweet').slideToggle("slow");
  $('section.new-tweet textarea').focus();
})
  
  loadTweets();


// screens for invalid tweets || presents error messages to user if invalid || makes a POST requestif no errors
$('.new-tweet form').submit( function (event) {

  const tweet = $('textarea').val();

  event.preventDefault();
  $('new-tweet p').empty().slideUp();
  const $form = $(this);
  const $newTweetP = $form.children('textarea').val();
 
if ($newTweetP.length === 0) {
  
  $('.new-tweet p').text('⚠️⚠️ Nothing to Say????? ⚠️⚠️')
  $('.new-tweet p').slideDown("slow");

} else if ($newTweetP.length > 140) {
  
  $('.new-tweet p').text('🚫🚫 Yikes you have too much to say today... 🚫🚫')
  $('.new-tweet p').slideDown("slow");

} else {

  $('.new-tweet p').slideUp("fast");
  const serializedForm = $(this).serialize();
    // data: serializedForm
    // function(data) {
    //   $('.all-tweets').prepend(createTweetElement(data))
    //   $('textarea').val('');
    //   $('.counter').text(140)
    //   })
    // });

  $.ajax({ url: "/tweets", method: 'POST', data: serializedForm })
  .then(()=>{loadTweets()})
}
})

})

// takes array of tweets || calls createTweetElement for each tweet
const renderTweets = function(dataArr) {
  $('.all-tweets').empty();
  for (const tweet of dataArr) {
    const $tweet = createTweetElement(tweet);
    $('.all-tweets').prepend($tweet);
  }
};

// makes a GET request to tweet database || load tweets without refreshing the page 
const loadTweets = function () {
  $.ajax({ url: "/tweets", method: 'GET' })
  .then(function (dataArr) {
    renderTweets(dataArr);
  
  })
}
