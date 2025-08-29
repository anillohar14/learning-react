import AppleBasket from "./AppleBasket";
import Button from "./button";
import "./AppleCounter.css";
import { useState } from "react";
const RightArrow = new URL("../assets/images/right-arrow.png", import.meta.url);
const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url);


// import {createRoot} from 'react-dom/client'
// const root = createRoot(document.getElementById('root'))


// const totalApples = 10
// let rightApples = 0
// let leftApples = totalApples-rightApples
const AppleCounter = () => {
  const totalApples = 10
  const [rightApples, setRightApples] = useState(0)
  const [leftApples, setLeftApples] = useState(totalApples - rightApples)

  const rightArrowClicked = () => {
    if(rightApples < 10){
      // rightApples++
      // leftApples--
      // root.render(<AppleCounter/>)
      setLeftApples(leftApples - 1)
      setRightApples(rightApples + 1)
    }
  }
  const leftArrowClicked = () => {
    if(leftApples < 10){
      // rightApples--
      // leftApples++
      // root.render(<AppleCounter/>)
      setLeftApples(leftApples + 1)
      setRightApples(rightApples - 1)
    }
  }

  return (
    <section>
      <AppleBasket appleCount={leftApples} basketName="basket 1" />
      <Button imageURL={LeftArrow.href} onClick={leftArrowClicked} title="Left Arrow" />
      <Button imageURL={RightArrow.href} onClick={rightArrowClicked} title="Right Arrow" />
      <AppleBasket appleCount={rightApples} basketName="basket 2" />
    </section>
  );
};

export default AppleCounter;



// step 11: now we are implementing the apple counter with state
// step 12: first we have import the useState in this component
// step 14: now we will create two states for both the basketes under the Applecounter component
// step 15: here what we are doing is we are creating two states rightApples and leftApples and setting the initial value of rightApples to 0
// and leftApples to totalApples - rightApples so initially leftApples will be 10
// step 16: now we will use these states in the AppleBasket component