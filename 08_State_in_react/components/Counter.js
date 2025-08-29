import { use, useState } from "react"



export default function Counter() {
    // console.log(useState("anil"))
    // console.log(useState)
    // const stateArray = useState(0)
    // const count = stateArray[0]
    // counst setCount = stateArra[1]
        const [count, setCount] = useState(0)
  return (
    <div style={{textAlign : "center"}}>
        <h1>{count}</h1>
        <button onClick={() => {
            // stateArray[1](stateArray[0] + 1)
            setCount(count + 1)
        }}>Increase Counter</button>
    </div>
  )
}

// step 2: let we understand state 
// step 4: first we have to import useState form react 
// step 3: any function which name start with use is called an hook in react let console. log the useState

// step 4: this will print a function used by react so we have to call this function let see what is return it reutrns an array
// with two emenemts first one is the current value of the state and second one is the function which will help us to update the state
// step 5: now let use the seconnd element of the array to update the state
// step 6: let store the array in a variable and pass 0 as the first value of the state now we will use the variable in h1 and button tag
// step 7 : whats happning here when we click the button the function in the second element of array is called with the update value
// and it returns the updates value and react re-render the component with the updates value
// step 8: now let simplfy the code 
// step 9 : we can use array destruncturing to destructure the array in two variables
// step 10: now let use useState in our apple counter component