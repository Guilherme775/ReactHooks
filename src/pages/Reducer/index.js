import React, { useReducer } from "react";

function handleReducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };

    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

function Reducer() {
  const [state, dispatch] = useReducer(handleReducer, initialValue);

  //   const reducer = useReducer(
  //     function (state, action) {},
  //     "Guilherme",
  //     function (initialValue) {
  //       return { name: initialValue };
  //     }
  //   );

  //   console.log(reducer);

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default Reducer;
