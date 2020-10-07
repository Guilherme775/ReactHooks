import React, { useState, useEffect } from "react";

function Effect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("first render");
  }, []);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default Effect;
