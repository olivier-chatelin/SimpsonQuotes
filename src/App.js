import './App.css';
import React, {useState} from "react";
import DisplayQuote from "./components/DisplayQuote";
import axios from "axios";

function App() {
  const initQuote = {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
  }
  const [quoteData, setQuoteData] = useState(initQuote);
  const handleChangeQuote = () => {
    axios.
        get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((response)=>response.data)
        .then((data) => {
          setQuoteData(data[0])
        });

  }
  return (
  <>
    <button type={"button"} onClick={handleChangeQuote}>Other Quote</button>
    <DisplayQuote quoteData={quoteData}/>
  </>
  );
};

export default App;
