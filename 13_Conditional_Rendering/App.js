import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";
import { Fragment } from "react/jsx-runtime";
console.log(Fragment);
console.log(Symbol.for("react.fragment"));
const App = () => {

  return   <div>
    <Counter name="Counter Component">
      <AppleCounter />
    </Counter>
  </div>

//   return   <div>
//    { true? <AppleCounter /> : <Counter />}
//   </div>
};

export default App;

// step 1: Here we are going to understand what is conditional rendering in react 
// step 2: Conditional rendering means that we can render different component or element based on some condition
// by terinary operator or if else statement 
// step 3: let go an pratical and understand when the baskets of apples are full means when they become 10 we
// have to render this after the basket text (full) and when it becomes 0 we have to render (empty) lets move to
// AppleBasket.js component

// step 7: Now we are using ternary operator to render the compoents at line 14 to 17