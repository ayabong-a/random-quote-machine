import React, { useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [fade, setFade] = useState(false);

  const getRandomQuote = () => {
    setFade(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setFade(true);
    }, 100);
  };

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" — ${quote.author}`
  )}`;

  return (
    <div className="App">
      <h1>Echoes of Thought</h1>
      <blockquote className={fade ? "fade-in" : ""}>
        "{quote.text}"<footer>— {quote.author}</footer>
      </blockquote>
      <div className="buttons">
        <button onClick={getRandomQuote}>New Quote</button>
        <a href={tweetURL} target="_blank" rel="noopener noreferrer">
          <button className="tweet-btn"><i className="fab fa-twitter"></i> Tweet This</button>
        </a>
      </div>
    </div>
  );
}

export default App;
