import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const incrementButtonHandler = () => {
    setCounter((pre) => {
      return pre + 1;
    });
  };

  const decrementButtonHandler = () => {
    setCounter((pre) => {
      return pre - 1;
    });
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={incrementButtonHandler}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrementButtonHandler}>
        Decrement
      </button>
    </div>
  );
}

export default App;
