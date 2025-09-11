// step 1 here we are implementing the dark and light mode variable using the context API for this we need to create an folder contexts and under that we
// need to create an file name themeContext.js or we can use jsx extension also

// step 14: here we need to import the themeContext file for using the provider property and this property is an react component 
// so we can use this as an tag on the place of the fragments while returning and also give the value attribute so whatever we give to the value attribute it will be shown on the console
// rather than value we have povided while creating the context  
// step 15: now let provide the the isDark variable in the value atribute now let use this value in the header and outlet component
// step 16: now let move to header.jsx component

// step 23: now we can optimeze this code by removing the state variable and its logic to the themeContext.js file 

// step 26: now we are importing the themeProvider and use it like an tag now remove the unwanted components just include the header and outlet component 
// step 27: now by doing this the themeProvider will send those component to the themeCOntext.js file move to that file
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router";
import { useState } from "react";
import { themeContext, ThemeProvider } from "./contexts/themeContext";

const App = () => {

  return (
    <ThemeProvider>
    {/* <themeContext.Provider value={[isDark, setIsDark]}> */}
      <Header/>
      <Outlet/>
    {/* </themeContext.Provider> */}
    </ThemeProvider>
  );
};
export default App;
