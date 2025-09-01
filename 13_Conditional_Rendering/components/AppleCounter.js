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
