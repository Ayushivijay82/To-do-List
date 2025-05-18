import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(12);
  const [value, setValue] = useState("Piyush");

  // console.log(val);
  return (
    <div>
      <p>Count Component - {count}</p>
      <h6>Number is {count % 2 === 0 ? "even" : "odd"}</h6>
      <button onClick={() => setValue("React")}>Change</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default CounterComponent;
