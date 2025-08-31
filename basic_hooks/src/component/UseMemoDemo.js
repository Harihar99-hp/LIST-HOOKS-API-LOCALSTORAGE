import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    return count * 2;
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <h2>useMemo Demo</h2>
      <p>Double: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseMemoDemo;
