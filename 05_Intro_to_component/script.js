import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const root = createRoot(document.getElementById("root"));

// function Card(key, image, title, brand, price) {
//   return (
//     <div className="card" key={key}>
//       <img src={image} loading="lazy" alt="product image" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     const container2 = data.products.map((product) => {
//       return Card(
//         product.id,
//         product.thumbnail,
//         product.title,
//         product.brand,
//         product.price
//       );
//     });
//     //  return Card( product.thumbnail, product.id, product.title, product.brand, product.price)})
//     root.render(<div className="container">{container2}</div>);
//   });

// this is an previous code which use fetch to render element
// But there is an flow ,problem that when we change the order in fetch where we are returning the values
// this will create an error at line 23 we exchange the thumbnail and id so it will create an problem
// To solve this problem we can return the object in fetch code when we are returning the value
//  The function will look like this

// function Card(cardDetails) {
//   const {key, image, title, brand, price} = cardDetails
//   return (
//     <div className="card" key={key}>
//       <img src={image} loading="lazy" alt="product image" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     const container2 = data.products.map((product) => {
//       return Card({
//        key:  product.id,
//        brand: product.brand,
//        image: product.thumbnail,
//        title: product.title,
//        price:  product.price  // here we can change the order ther will be no effect
//     });
//     });
//     root.render(<div className="container">{container2}</div>);
//   });

// the problem is solved by using simple JS

// Now let understand and create React component

// to understand React Component first we have to create an simple react element object in to render method at line 90

// function Card(props) {
//   const { key, image, title, brand, price } = props;
//   return (
//     <div className="card" key={key}>
//       <img src={image} loading="lazy" alt="product image" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }
// root.render({
//   $$typeof: Symbol.for('react-element'),
//   type: Card, // here we can pass any thing to make an tag so we are passing an Card function which will return JSX
//   ref: null,
// props: {  // here we can set the property of the JSX function and it also use for setting attributes of tags
//   title: "iPhone",
//   image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//   brand: 'apple',
//   price: 899,
//   key: 1
// }
// })

// here the render method try to make an tag but it found an function so in this case the render method will call the Card function
// and pass all the Props in the parameter of the Card funtion at line 77 and render an single card

// IMPORTANT : from line 90 - 101 is called an React Component : React Component means an react element which has an type of function
// and that function will return an JSX means (React Element)

// the above will create an single card by for now in react it is giving an error so we need to change the code a little bit
// function Card(props) {
//   const { image, title, brand, price } = props; // here we removed the key attribute because it causing an error the react will manage the key property
//   return (
//     <div className="card">
//       <img src={image} loading="lazy" alt="product image" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }

// root.render(
//   React.createElement(Card, {
//     title: "iPhone",
//     image:
//       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//     brand: "apple",
//     price: 899,
//     key: 1,
//   })
// );

// // now by console.log you can see the object created by the react
// console.log(
//   React.createElement(Card, {
//     title: "iPhone",
//     image:
//       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//     brand: "apple",
//     price: 899,
//     key: 1,
//   })
// );

// we can further minimize the code of render method means an different way to render the card

// function Card(props) {
//   const { image, title, brand, price } = props;
//   return (
//     <div className="card">
//       <img src={image} loading="lazy" alt="product image" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }

// root.render(
//   <Card
//     title="iphone"
//     image="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
//     brand= "apple"
//     price= "899"
//     key= "1"
//   />
// );

// here the react is creating the React Element like we created we can see the react element object by searching JSX compiler on google
// SO this is an CUSTOM react component
// IMPORTANT Technical Meaning : An React component is an function return an JSX is called Component
// IMPORTANT Visual Meaning : Component is an reusable peace of UI to render multiple element
// IMPORTANT Actual Meaning : Component is an React Element which is of type function and that function should return JSX means an
// simple React Element which render

// Now we will create an card by using react component with Fetch

function Card(props) {
  const { image, title, brand, price } = props;
  return (
    <div className="card">
      <img src={image} loading="lazy" alt="product image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container2 = data.products.map((product) => {
      return (
        <Card
          key={product.id}
          brand={product.brand}
          image={product.thumbnail}
          title={product.title}
          price={product.price}
        />
      );
    });
    root.render(<div className="container">{container2}</div>);
  });
