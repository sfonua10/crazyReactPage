import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [celsius, setFahrenheit] = useState();

  const handleChange = event => {
    setFahrenheit((celsius = event.target.value));
  };
  const handleFahrenheit = () => {
    const fahrenheit = celsius * (9/5) + 32;
    setFahrenheit(fahrenheit);
  };
  const fahrenheit = celsius * (9/5) + 32;
  return (
    <div className="App">
      <h1>Type in number and click button to see Fahrenheit results</h1>
      <input type="text" value={celsius} onChange={handleChange} />
      <button onClick={handleFahrenheit}>Click Me</button>
      <h1>{fahrenheit}</h1>
    </div>
  );
};

export default App;
