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



// step 1: Diiference between State and Props 
// State : State is a local data storage that is local to the component only and cannot be passed th other components
//  State is mutable and can be changed . A state cannot be passed as props means state cant be props
// Props : Props are read only components and cannot be modified . Props are immutable and cant be changed . Props can be passed to
// other components. However props can be used to initialize the state of the component means props can be state but state cant be props 
// We can change the value of props in the parent component and pass it to the child component but we cant change the value of props in the child compoent 
// we can cahnge the value in child component but it will be against the react component 

// IMPORTANT : A component can use both state and props

// step 2: Similiarities between State and Props
// Both state and props are used to manage data in a component
// Both state and props re-render the component when their valuse changes
// Both state and props are plain javascript objects

// step 3: let use both in App.js component
// we have added an prop name in the Counter component in the App.js file