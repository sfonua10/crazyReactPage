import React, { useState } from "react";

const ConvertCtoF = () => {
  let [celsius, setCelsius] = useState();
  let [fahrenheit, setFahrenheit] = useState();

  const handleChange = (e) => {
    const celsius = e.target.value;
    setCelsius(celsius);
  }

  const handleClick = (e) => {
    let fahrenheit = celsius * (9/5) + 32;
    setFahrenheit(fahrenheit);
  }

  return (
    <div className="App">
      <h1>Type in number and click button to see Fahrenheit results</h1>
      <input type="text" value={celsius} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      {fahrenheit && <h1>{fahrenheit}</h1>}
    </div>
  );
};

export default ConvertCtoF;
