console.log("hello world");
// step 5 : importing the data from data.js file
// step 6 : the inport and export is working fine
import { user } from "./data.js";
console.log(user);
// step 7 : now we will import the react and react-dom

// import React from "react";
// console.log(React);

// step 8 : the console is giving the error (Uncaught TypeError: Failed to resolve module specifier "react". 
// Relative references must start with either "/", "./", or "../".)
// step 9 : to solve this error we have to use bundler like webpack, parcel etc
// step 10 : we will use parcel as it is easy to use
// step 11 : so first we have to install parcel (npm install --save-dev parcel) this will install the parcel and save it in devDependencies
// step 12 : now we reimport the react 
import React from "react";
console.log(React);
// step 13 : now we run the parcel (npx parcel index.html) this will start the parcel server and open the browser
// stpe 14 : we need to pass the entry point file (index.html) to parcel
// step 15 : console is giving the error ( The "main" field is meant for libraries, not applications. 
// Either remove the "main" field or choose a different target name.)
// step 16 : to solve this error we have to remove the "main" field from package.json file
// step 17 : now we run the parcel again (npx parcel index.html) this will start the parcel server and open the browser
// step 18 : now the console is not giving any error and the react is imported successfully
// ste 19 : you can see when we installed the parcel the node_module file stored the parcel file under the parcel folder 
// we can see that babel/core is predent in that folder which means the parcel is using babel to convert the jsx to js automatically
// this is the power of bundler (parcel, webpack etc) 
// step 20 by starting the parcel there is an dist folder created this is the build folder which is created by parcel
// which includes the index.html and script.js file means the parcel has served this index.html file not the one that 
// we have created this is basically done by the babel in js file at the end the map file is also created and used
// parcel give various other features like hot reloading, minification, bundling etc you can explore it yourself due 
// to this we can write jsx code in our created script.js file
// step 21 : now we will render our index.html file using react-dom
// remove the h1 form our index.html and create an root div 

// import ReactDOM from "react-dom";

// now the console is giving the error (Uncaught TypeError: ReactDOM.createRoot is not a function) to solve this error
// we have cahange the import statement of react-dom now the error is solved

import {createRoot} from "react-dom/client"; // changed the import statement
const h1 = <h1>hello from react</h1>
const root = createRoot(document.getElementById("root"));
root.render(h1);

// there is an another code to start the parcel server (npm build index.html) this will also start the parcel server
// but this will not open the browser automatically we have to open it manually by going to the localhost:1234 in the browser
// this code use for the production build not for the development purpose this code will create the dist folder with the minified code
// and due to this minified code we need only 2-3 files to deploy our react app not the entire source code

