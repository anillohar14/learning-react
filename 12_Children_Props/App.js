import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";
import { Fragment } from "react/jsx-runtime";
console.log(Fragment);
console.log(Symbol.for("react.fragment"));
const a = (
  <div>
    <Counter name="Counter Component">
      <AppleCounter />
    </Counter>
  </div>
);
const App = () => {
  console.log(a);
  return a;
};

export default App;

// What is Children Props ?
// Children props is a speecial props that is used to pass the children of a component to that component where it is used and we can pass anything sting , function, object, array,component etc
// Where we can use Children Props?
// we can use the Children Props by making a component as an opening and closing tag and then we can pass any JSX inside that tag
// and by using curly braces we can write an javascript
// lets do this in the App Component let make the Counter component as an opening and closing tag and then pass hello 
// then in the Counter component we have to create an children props and then we can use that chldren props where ever we want to use lets move to the Counter component
// srep 1: lets do something more intrusting in the Counter component we will pass the Apple Counter compoent by removing the hello text