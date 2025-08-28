import {createRoot} from 'react-dom/client'
import App from './App'
const root = createRoot(document.getElementById('root'))
// root.render("anil lohar")

// till here we set up the react by first doing mpn init --> npm i -D parcel -->  npm i react react-dom --> 
// then created and connected the html and JS file --> set the start command in package.json --> then run the code (npm start) 
// now let create an component with is in the file called App.js this file is consider and the main file in the whole folder

// here we are using the App.js component
root.render(<App/>)
// now let understand how to actually use image in react 