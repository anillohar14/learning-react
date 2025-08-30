import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";
import { Fragment } from "react/jsx-runtime";
console.log(Fragment);
console.log(Symbol.for("react.fragment"));
const a = (
  <Fragment>
  <div>
    <Counter name="Counter Component" />
    <AppleCounter />
  </div>
  </Fragment>
);
const App = () => {
  console.log(a);
  return a;
};

export default App;

// What is React Fragment ?
// React Fragment is a component that allows us to group a list of children without adding extra nodes to the DOM means an extra div
// is not added to the DOM we can use React Fragment in two ways 1) <></> 2) <Frament></Fragment>
// when we use the <Fragment></Fragment> we need to inport if from react like this import { Fragment } from 'react
// step 1: lets console log the Fragment component and it will return this Symbol(react.fragment) Symbol is an data type in JS
// step 2: now we will create a variable and store the JSX in it and return that variable in the app component 
// step 3: now log the variable a and then we can see the React.fragment is added to the JSX
// step 4: noe the react will ignore the Fragment component and will not add it to the DOM