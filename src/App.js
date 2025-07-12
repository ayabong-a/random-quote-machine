import React, { useState } from "react";
import "./App.css";
import quotes from "./quotes.json";

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