import { use, useState } from "react";

export default function Counter({name, children : AppleCounter}) { // here we are receiving the children props and use at the line 9 in h1 tag
  console.log(AppleCounter)
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
    <h1>{name}</h1>
    {/* <h1>{children}</h1>  here we are using the children props */}
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
        {AppleCounter} {/* here are using the AppleCounter component that we passed from the App component */}
    </div>
  );
}
