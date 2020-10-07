import React, { useRef, forwardRef, useImperativeHandle } from "react";

// semelhante ao useRef que permite manipular elementos da DOM de forma imperativa, porém agora com componentes do React.

function ImperativeHandle() {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <div>
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        submit: handleSubmit,
      };
    },
    []
  );

  return (
    <form>
      <input ref={inputRef} />
    </form>
  );
});

export default ImperativeHandle;
