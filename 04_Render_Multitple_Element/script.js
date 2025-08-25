// step 1 : copy the index, script, json, json-lock file from previous folder
// step 2 : install the npm by (npm i)
/* step 3 : add this code (parcel index.html){no need to write run for this code only} in the json file with the key start remember that when we need to stat the parcel
 we only need to write this code (num start) on terminal to run parcel */
import React from "react";
import { createRoot } from "react-dom/client";
import './style.css'

// step 4: now let create an card element to create na card element we need an image
// const card = <div className="card">
//     <img src="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12" alt="iphone image"/>
//     <div className="card-content">
//         <h3>Iphone</h3>
//         <p>Apple</p>
//         <p>$650</p>
//     </div>
//   </div>

// step 5:  now we will add style.css file with the help or import statement at the top 
// step 6: now i want to render multiple card so i will use the array on the root.render statment root.render([card, card])
// the second way to create an container element and add the cards array and finally render the container ignore the warning 

// const container = [
//     card,
//     card,
//     card,
//     card,
//     card
// ]
// render like this 
// root.render(<div className="container">{container}</div>)

// step 7: now let create an function which store our card 
// function Card(key) {
//     return (<div className="card" key={key}>
//     <img src="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12" alt="iphone image"/>
//     <div className="card-content">
//         <h3>Iphone</h3>
//         <p>Apple</p>
//         <p>$650</p>
//     </div>
//   </div>
// )}

// let container = [
//     Card(1), Card(2), Card(3), Card(4)
// ]
// const root = createRoot(document.getElementById("root"));
// root.render(<div className="container">{container}</div>)

// not let create an dynamic page with the help of api
// step 8 : create the Card function

const root = createRoot(document.getElementById("root"));

function Card(key, image, title, brand, price) {
    return (<div className="card" key={key}>
    <img src={image} loading="lazy" alt="product image"/>
    <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{price}</p>
    </div>
  </div>
)}

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    const container2 = data.products.map((product) => {
       return Card(product.id, product.thumbnail, product.title, product.brand, product.price)})
     root.render(<div className="container">{container2}</div>)

})