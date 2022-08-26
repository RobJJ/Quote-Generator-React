import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./components/card.component";
import Spinner from "./components/spinner.component";

//
function App() {
  //
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});
  //
  const switchLock = useRef(true);
  //
  useEffect(() => {
    if (switchLock.current) {
      switchLock.current = false;
      fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((res) => {
          setQuotes(res);
          setQuote({ ...res[Math.floor(Math.random() * res.length)] });
        });
    }
  }, []);
  //
  const handleClick = () => {
    console.log("CLICK HANDLER HAS BEEN CALLED");
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIdx];
    setQuote({ ...randomQuote });
  };
  //
  return (
    <div className="container">
      {Object.values(quote).length < 1 ? (
        <Spinner />
      ) : (
        <Card quote={quote} newQuote={handleClick} />
      )}
    </div>
  );
}

export default App;
