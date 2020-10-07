import React, { useState, useEffect, useDebugValue } from "react";

function DebugValue() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/guilherme775"
  );

  const [loading2, response2] = useFetch(
    "https://api.github.com/users/guilfgsfgherme77fggfdgfsdg5"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <div>{JSON.stringify(response)}</div>;
}

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({ json, status: resp.status });
    })();
  }, [url]);

  // o useDebugValue é utilizado para colocar informações ao lado do nome do CustomHook
  // auxiliando assim o processo de debug.

  // como no exemplo onde estou colocando o status da requisição ao lado do hook
  // para descobrir qual requisição deu errado.

  useDebugValue(response?.status, (message) => {
    return `Status: ${message}`;
  });

  return [loading, response];
}

export default DebugValue;
