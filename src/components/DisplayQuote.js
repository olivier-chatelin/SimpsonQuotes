import React from "react";

const DisplayQuote = ({quoteData}) => {
   const {quote, character, image} = quoteData;
   return (
       <div>
          <img src={image} alt={character}/>
          <p>Name: {character}</p>
          <h2>Quote: {quote}</h2>
       </div>
   );
};
export default DisplayQuote