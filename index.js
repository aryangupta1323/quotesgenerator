var container = document.querySelector(".container");
var loader = document.querySelector(".loader");
var twitter = document.querySelector(".twit");
var quote = document.querySelector("span");
var author = document.querySelector("p");
quotesGenerator(); //for getting random quotes when ever we refresh
document.querySelector(".click").addEventListener("click", quotesGenerator);

function quotesGenerator() {
  loading();
  const randomquote = Math.floor(Math.random() * localQuotes.length);

  quote.innerHTML = localQuotes[randomquote].text;
  if(!localQuotes[randomquote].author)
  author.textContent = "Aryan Gupta";
  else
  author.textContent = localQuotes[randomquote].author;
  completed();
}

twitter.addEventListener("click", function() {
  var tweetUrl = `https://twitter.com/intent/tweet?text=${quote.innerHTML} - ${author.innerHTML}`;
  window.open(tweetUrl, "_blank");
})

function loading() {
  loader.hidden = false;
  container.hidden = true;
}

function completed() {
  loader.hidden = true;
  container.hidden = false;
}
