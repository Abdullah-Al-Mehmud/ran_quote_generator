let ranQuotes = document.getElementById("ranQuotes");
let authorName = document.getElementById("authorName");
let btn = document.getElementById("btn");
let soundBtn = document.getElementById("sound");
let copyBtn = document.getElementById("copy");
let twitterBtn = document.getElementById("twitter");
const url = "https://api.quotable.io/random";

function getQuote() {
  btn.innerText = "loading..";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      ranQuotes.innerText = data.content;
      authorName.innerText = data.author;
    });
  btn.innerText = "click me";
}

// used to give voice
soundBtn.addEventListener("click", () => {
  //speechSynthesisUtterance is a web speech api that represents a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${ranQuotes.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the Utterance
});

copyBtn.addEventListener("click", () => {
  // copying the quote text on copyBtn click
  // writeText() property writes the specified text string to the system clipboard
  navigator.clipboard.writeText(ranQuotes.innerText);
});

twitterBtn.addEventListener("click", () => {
  let tweeterUrl = `https://twitter.com/intent/tweet?url=${ranQuotes.innerText}`;
  window.open(tweeterUrl, "_blank"); // opeaning a new tab with passing quote in the url
});
btn.addEventListener("click", getQuote);
