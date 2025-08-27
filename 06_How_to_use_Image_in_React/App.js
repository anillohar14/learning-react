// here we are creating an component by this way
// const App = () => {
//     return <div>Hello React User</div>
// }
// export default App


// we can also make this function by using (rfc) snippet by installing ES7+ React extension
// let understand how to render an image

// import leftArrow from './assets/images/arrowleft.png';
// console.log(leftArrow);

// const App = () => {
    //   return (
//     // <img src="./assets/images/arrowleft.png" alt="left-arrow">App</img> // we cant do this because because we wont able to give the path in react to do this we import the images
//     <img src={leftArrow} alt="left-arrow" />
//   );
// }
// export default App
// What’s happening?

// When you do:

// import leftArrow from './assets/images/arrowleft.png';
// console.log(leftArrow);


// React’s build tool doesn’t import the raw image file.

// Instead, it resolves it into a JavaScript object (depending on the bundler).

// That object usually contains metadata like { src: "blob:http://...", width: ..., height: ... } or just { default: "compiled/path/to/image.png" }.

// When you console.log it, JS prints [object Object] (default string representation of an object).


// now let create an button component in component folder
// now let import the button component
import AppleCounter from "./components/AppleCounter"
const App = () => {
    return (
             <div>
                <AppleCounter />
             </div>
  )
}
export default App


// below code it just an previous version code for parcel 1
// import leftArrow from './assets/images/right-arrow.png';
// console.log(leftArrow)
// function App() {
//   return (
//     <div>
//       <h1>React Image Example</h1>
//       <img src={leftArrow} alt="left arrow" />
//     </div>
//   );    
// }

// export default App;

// const leftArrow = new URL("./assets/images/arrow.png", import.meta.url);

// function App() {
//   return (
//     <div>
//       <h1>React Image Example</h1>
//       <img src={leftArrow.href} alt="left arrow" />
//     </div>
//   );
// }

// export default App;