import React from "react";

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h3>{count}</h3>{" "}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
