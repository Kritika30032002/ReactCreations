import { useState } from "react";
import emojilist from "./Emojilist.json";
import './emojicss.css';

const Emoji = () => {
  const [copy, setCopy] = useState([]);
  const [value, setValue] = useState("");
  
  const input = (e) => {
    const show = e.target.value;
    setValue(show);
  };
  const emojis = emojilist.filter((emoj) =>
    emoj.keywords.includes(value.toLowerCase())
  );
  const copyEmoji = (symbol) =>{
    navigator.clipboard.writeText(symbol);
    setCopy((prevEmoji)=> [...prevEmoji, symbol])
  }
  return (
    <div>
      <p>Search for an emoji here</p>
      <input type="text" value={value} onChange={input} />
      {emojis.map((item,index) => (
        <div className="cont" key={index}>
          <span>{item.symbol}</span>
          <span className="hide">{item.title}</span>
          <button onClick={()=> copyEmoji(item.symbol)}>Add To Clipboard</button>
          {copy ? <span> Copy !</span> : ''}
        </div>
      ))}
    </div>
  );
};

export default Emoji;
