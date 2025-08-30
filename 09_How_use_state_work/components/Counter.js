import { use, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
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
// step 1: now let undersatand how useState works
// step 2: when ever we use useState it will create an array like in this folder we use the useState the array will look
// like this const state = [0] when we use the second useState the will look like ths const state = [0,0]
// step 3: so the usestate will give the intial value in the array by its first element in the array
// step 4: now lets do some change in the code in the onClick function we will create an another useState which wii do the same thing
// step 5: so the counter value should be 2 but it is not happening why ? lets undetstand so when the setCount is called react will
// change the array and set the value to 0 to 1 like this const state = [1] this array is created by react
// IMPORTANT : code under the onCLick and the setCount function will be execute at the end first it will runs all other code 
// for an example let add the alert add give the count value you will the see the count value in 0 not 1 this is because the
// setCount will be executed at the end so the alert will show the old value
// step 6: noe let fix this issue so for that we will use the callback function in the setCount function with previousState 
// so this thing will work fine now why ? because this will not update the value of count it will remember the previuos state 
// and then re-render the component but in the simple setcount it won't remember the previous state let me show you an example
// step 7: we will log the value of the count variable in the start and in the end by commennting the previousState functions
// look this will not update the value of count under the setCount function but at the last setCount function will end then only it 
// will update the value in the react created array which is 1 not 2 
// CONCLUSION: so always use the previousState function in the seState function when you are updating the state based on the previoud state
