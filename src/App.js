import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggle } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      <button onClick={() => dispatch(toggle())}>Login/Logoff Toggle</button>

      {isLogged ? <h1>Valueable information I shouldn't see</h1> : ""}
    </div>
  );
}

export default App;
