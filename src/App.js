import "./App.css";
import React, { useState } from "react";
import Share from "./Share";
import { FaShare as ShareIcon } from "react-icons/fa";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);
  const [showShare, setShowShare] = useState(false);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <div onKeyDown={(event) => event.keyCode === 27 && setShowShare(false)}>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          {showShare && <Share setShowShare={setShowShare} />}
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button
            className="btn"
            onClick={() => {
              navigator.clipboard.writeText(
                quote.author + " once said: " + quote.content
              );
              setShowShare(!showShare);
            }}
          >
            <ShareIcon />
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
