import React, { useState, useEffect } from "react";

function CustomHooks() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/guilherme775"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <div>{JSON.stringify(response)}</div>;
}

// nosso hook, assim como os hooks do React sempre começar com a palavra "use".
function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse(json);
    })();
  }, [url]);

  return [loading, response];
}

export default CustomHooks;
