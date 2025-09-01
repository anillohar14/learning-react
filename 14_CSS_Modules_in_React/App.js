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

// step 1 : lets style our butoon of Counter component lets create an counter.css file and move to the counter.js component