import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={randomNumber}>Random Number</button>
    </div>
  );
}

export default App;
