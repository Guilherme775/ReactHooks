import React, { useState, useMemo } from "react";

function Memo() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  // useMemo memoriza valores, para que eles não sejam renderizados junto ao componente.
  const total = useMemo(() => {
    return counter * 10;
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>
      <br />
      <br />
      <span>{name}</span> <br />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Memo;
