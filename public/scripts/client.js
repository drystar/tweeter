const data = [
  {
   "user": {
   "name": "Newton",
   "avatars": "https://i.imgur.com/73hZDYK.png",
   "handle": "@SirIsaac"
    },
    "content": {
     "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
    
  {
   "user": {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd"
   },
     "content": {
      "text": "Je pense , donc je suis"
     },
    "created_at": 1461116232227
  },

  {
   "user": {
    "name": "Chris",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@chris" 
   },
    "content": {
      "text": "I am test. But I could be an additional object!"
      },
    "created_at": 1461113959088
  }
]
// class each element of the tweet
// appends elements to the article to generaate new tweet

const createTweetElement = function (tweet) {

  const $newTweet = $("<article>").addClass("tweet");
console.log("ppp", tweet)
  const $img = $("<img>").attr("src", tweet.user.avatars);

  const $name = $("<h4>").addClass("name").text(tweet.user.name);

  const $handle = $("<p>").addClass("handle").text(tweet.user.handle);

  const $content = $("<div>").addClass("content").text(tweet.content.text);

  const $timeStamp = $("<p>").addClass("timeStamp").text(tweet.created_at);

  const $tweetIcons = $("<h4>").addClass("icons").html('<i class="fa fa-flag-o"></i><i class="fas fa-retweet"></i><i class="fa fa-heart-o"></i>');


    const $header = $("<header>").append($img).append($name).append($handle)
    const $footer = $("<footer>").append($timeStamp).append($tweetIcons)

return $newTweet.append($header).append($content).append($footer)

 };


// //   // DRIVER FOR TEST CODE
//  $(document).ready(function (){
//  const $tweet = createTweetElement(data);
//  console.log($tweet);
//  $('.all-tweets').append($tweet)
// });

// Note to self: comment out driver code to avoid excess running of createTweet function//bug

// function takes an array of tweets and appends each new tweet to tweeter page 
$(document).ready(function (){
   
  renderTweets(data);

})

const renderTweets = function(dataArr) {
  for (const tweet of dataArr) {
   // console.log("sup", tweet)
    const $tweet = createTweetElement(tweet);
    $('section.all-tweets').append($tweet);
  }
};

const loadTweets = function () {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (allTweets) {
    renderTweets(allTweets);
  })
}

loadTweets();

$('.new-tweet form').submit( function (event) {
  event.preventDefault();
  const $form = $(this);
  const tweet = $form.serialize();
  console.log("before ajax");
  $.ajax({ url: "/tweets/", method: 'POST', data: tweet })
})

// === Failed Function Breakdown ===
 // const $img = $('<img>').attr('src', tweet.user.avatars);

 // const $header = $('header').addClass('header')

 // const $article = $('<article>').addClass('tweet')

 // const $tweet = $("<article>").addClass("tweet");
 // const $header = $("<header>").addClass("tweet-header");

 // const $img = $("<img>").addClass("tweet-img");
 // const $name = $("<span>").addClass("tweet-name");
 // const $handle = $("<span>").addClass("tweet-handle");

 // const $body = $("<p>").addClass("tweet-body");

 // const $footer = $("footer").addClass("tweet-footer");
 // const $created_at = $("<span>").addClass("timeStamp");

 // const $tweetIcons = $("<span>").addClass("tweet-icons");
 // const $flag = $("<i>").addClass("font-icons");
 // const $repeat = $("<i>").addClass("font-icons");
 // const $favorite = $("<i>").addClass("font-icons");

   // $name.append(tweet.user.name);
   // $handle.append(tweet.user.handle);
   // $header.append($img, $name, $handle);
   // $body.append(tweet.content.text);
   // $flag.append("flag");
   // $repeat.append("retweet");
   // $favorite.append("heart");
   // $tweetIcons.append($flag, $repeat, $favorite);
   // $created_at.append(tweet.createdAt);

 // const $theTweet = $($tweet).append($header).append($body).append($footer);
   // return $theTweet;