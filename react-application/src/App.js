import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState();
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <h1>Counter :{counter}</h1>
      <button onClick={increment} className="btn">
        plus
      </button>
      <button onClick={decrement} className="btn">
        minus
      </button>
    </div>
  );
}

export default App;
