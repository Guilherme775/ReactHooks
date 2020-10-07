import React, { useLayoutEffect, useEffect } from "react";

// diferenças entre o useEffect e o useLayoutEffect:
// useEffect é assíncrono enquanto o useLayoutEffect é síncrono
// o useLayoutEffect é executado antes da página ser renderizada
// enquanto o useEffect é executado após a página ser renderizada.

function LayoutEffect() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return <div></div>;
}

export default LayoutEffect;
