// import AppleBasket from "./AppleBasket";
// import Button from "./button";
// import "./AppleCounter.css";

// // ✅ Correct way to load the image in Parcel 2
// const RightArrow = new URL("../assets/images/right-arrow.png", import.meta.url);
// const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url);

// const AppleCounter = ({onClick}) => {
//   return (
//     <section onClick={onClick}>
//       <h1
//         onClick={() => {
//           console.log("hii"); // this is how we can handel an event in react in html this is written like this onclick but in react we use to write onClick
//         }}
//       >
//         Hello
//       </h1>
//       <input
//         type="text"
//         onChange={() => {   // IMPORTANT react will not handel event on component but we can pass the onClick event
//           console.log("hello"); // in react onChange function will run on every change but not in html and by consoleing the event object it will be different
//         }}
//       />
//       <AppleBasket appleCount={0} basketName="basket 1" />
//       <Button onClick={() => {
//         console.log('Left Arrow Clicked')
//       }} imageURL={LeftArrow.href} title="Left Arrow" />
//       <Button onClick= {() => {
//         console.log('Right Arrow Clicked')
//       }} imageURL={RightArrow.href} title="Right Arrow" />
//       <AppleBasket appleCount={10} basketName="basket 2" />
//     </section>
//   );
// };

// export default AppleCounter;

// // let see how can we pass an event lets go to app.js file

// ___________________________________________________________________________________


// now let implemet the functionaly of the Apple Counter 


import AppleBasket from "./AppleBasket";
import Button from "./button";
import "./AppleCounter.css";

// ✅ Correct way to load the image in Parcel 2
const RightArrow = new URL("../assets/images/right-arrow.png", import.meta.url);
const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url);

// const AppleCounter = () => {
//   const totalApples = 10
//   let rightApples = 0
//   let leftApples = totalApples-rightApples

//   const rightArrowClicked = () => {
//     rightApples++
//     leftApples--
//   }
//   const leftArrowClicked = () => {
//     rightApples--
//     leftApples++
//     console.log(rightApples)
//     console.log(leftApples)
//   }
// now we have added the functionality but the browser is not rendering it we can see the variables in console the functionlity is working properly 
// Now let fix this problem we have to re-render the AppleCounter component by using (root.render()) method 
// so let do that by modifying our eventleitener function

import {createRoot} from 'react-dom/client' // to re-render an component we need to import this
const root = createRoot(document.getElementById('root'))


const totalApples = 10
let rightApples = 0
let leftApples = totalApples-rightApples
const AppleCounter = () => {

  const rightArrowClicked = () => {
    if(rightApples < 10){
      rightApples++
      leftApples--
      root.render(<AppleCounter/>)
    }
  }
  const leftArrowClicked = () => {
    if(leftApples < 10){
      rightApples--
      leftApples++
      root.render(<AppleCounter/>)
    }
  }

  return (
    <section>
      <h1>Hello</h1>
      <input type="text"/>
      <AppleBasket appleCount={leftApples} basketName="basket 1" />
      <Button imageURL={LeftArrow.href} onClick={leftArrowClicked} title="Left Arrow" />
      <Button imageURL={RightArrow.href} onClick={rightArrowClicked} title="Right Arrow" />
      <AppleBasket appleCount={rightApples} basketName="basket 2" />
    </section>
  );
};

export default AppleCounter;




