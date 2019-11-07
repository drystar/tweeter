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

const createTweetElement = function () {

   const newTweet = $("<article>").addClass("new-tweet").text("humday")
   












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
    return newTweet
  };


//   // DRIVER FOR TEST CODE
  $(document).ready(function (){
  const $tweet = createTweetElement();
  console.log($tweet);
  $('.all-tweets').append($tweet);
 });