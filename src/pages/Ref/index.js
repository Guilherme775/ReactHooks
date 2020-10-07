import React, { useRef } from "react";

// useRef é utilizado para evitar que o componente renderize toda vez que um estado é alterado.
// ou
// acessar elementos da nossa DOM.

function Ref() {
  // primeiro caso de uso(alterando um valor sem que o componente renderize):

  //   console.log("rendered");

  //   const number = useRef(0);

  //   function handleSetValue() {
  //     const newNumber = Math.round(Math.random() * (10 - 1) + 1);
  //     number.current = newNumber;
  //   }

  //   function handlePrintValue() {
  //     alert(number.current);
  //   }
  //   return (
  //     <div>
  //       <button onClick={handleSetValue}>Set value</button>
  //       <button onClick={handlePrintValue}>Print value</button>
  //     </div>
  //   );

  // segundo caso de uso(manipulando elementos da DOM):
  console.log("rendered");

  const inputRef = useRef(null);

  function handlePrintName() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print name</button>
    </div>
  );
}

export default Ref;
