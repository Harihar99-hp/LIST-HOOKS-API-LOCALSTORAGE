import React, { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>useRef Demo</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefDemo;
