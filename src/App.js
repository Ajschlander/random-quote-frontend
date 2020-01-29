import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./styles.css";

export default function App() {
  const [quote, setQuote] = useState({});

  const getNewQuote = () => {
    fetch(process.env.REACT_APP_BACK_END_URL)
      .then(res => res.json())
      .then(res => setQuote(res));
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BACK_END_URL)
      .then(res => res.json())
      .then(res => setQuote(res));
  }, []);
  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={getNewQuote}>
        GET NEW QUOTE
      </Button>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}
