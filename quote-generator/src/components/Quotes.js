import { useEffect, useState } from "react";

const Quotes = () => {
  const [data, setData] = useState([]);
  const [quote, setquote] = useState("");
  useEffect(() => {
    fetch("https://type.fit/api/quotes").then((res) => {
      res.json().then((resp) => {
        setData(resp);
        setInitialQuote(resp);
      });
    });
  }, []);

  const randquote = () => {
    const n = Math.floor(Math.random() * data.length);
    setquote(data[n]);
  };
  const setInitialQuote = (data) => {
    const n = Math.floor(Math.random() * data.length);
    setquote(data[n]);
  };
  
  return (
    <div>
      <section>
        <div>
          <button onClick={randquote}>New Quote</button>
          {<h3>"{quote.text}"</h3>}
          {<div>- {quote.author}</div>}
        </div>
      </section>
    </div>
  );
};

export default Quotes;
