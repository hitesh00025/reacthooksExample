import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);  // Empty dependency array means this function will never change

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent handleClick={handleClick} />
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

function ChildComponent({ handleClick }) {
  console.log("Child component rendered!");
  return <button onClick={handleClick}>Click Me</button>;
}

export default ParentComponent;
