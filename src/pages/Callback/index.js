import React, { useState, useCallback } from "react";

// função para mostrar que a cada vez que o componente é renderizado a quantidade de funções aumenta.
const fnCounter = new Set();

function Callback() {
  const [counter, setCounter] = useState(0);

  // o useCallback é utilizado quando você quer passar uma função para um componente filho.
  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  fnCounter.add(handlePlus);
  console.log(fnCounter.size);

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button(props) {
  return <button onClick={props.onClick}>+</button>;
}

export default Callback;
