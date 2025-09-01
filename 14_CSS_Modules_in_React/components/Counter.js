import { use, useState } from "react";
// import styles from "./Counter.css"
import styles from "./Counter.module.css" // step 4: now we have to import the file in the counter.js component
export default function Counter({name, children : AppleCounter}) { // here we are receiving the children props and use at the line 9 in h1 tag
  console.log(AppleCounter)
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
    <h1>{name}</h1>
    {/* <h1>{children}</h1>  here we are using the children props */}
      <h1>{count}</h1>
      <button className={styles.button} // step 5: now we  have to use the styles object to access the css class
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

// step 2: here we have use the normal css file but this is not the correct way to use css in react because
// all the css file are global in nature so if we have two button class in two different component that 
// css will be applied to both the component so to avoid this we have CSS Modules in react
// step 3: to use CSS Modules in react we havee to change the file name from counter.css to counter.module.css
// step 4: now we have to import the file in the counter.js component
// step 5: now let use some more styles in the counter.module.css file 