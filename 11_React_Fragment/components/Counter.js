import { use, useState } from "react";

export default function Counter({name}) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
    <h1>{name}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log("hello");
          console.log(count)
          setCount(count + 1);
          // alert(count)
          setCount(count + 1);
          // setCount((previousState) => previousState + 1)
          // setCount((previousState) => previousState + 1)
          console.log(count)
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}
