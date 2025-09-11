// step 2: so here we can create an context by using the createContext and the react will automatically import the functionality
// step 3: and now store the values of the newly created context in themeContext varible and console it
// step 4: but when we console the variable the browser will not print any thing so for that we need to first export this file and
// use this file in home.jsx component so lets export it
// step 5: move to the home.jsx component

// step 12: now let pass the an string hii in the createContext  now we acn see that we are getting the hii in the console
// step 13: For now our main goal is to pass the isDark variable but there is an problem we can not use the state hook under this file
// state hook can only be used in components and hook so we can do so by the property of themeContext object under this object
// the react provide the provider property so lets use this property in the App.jsx component move to app

// step 24: now we are defining the state isDark variable here but we know that we can olny use the state in hook or compoenet
// so we are going to create an component here an component is just an function so let create and export the function
// step 25: created an themeProvider compoenet and past the isDark variable and now we use this compoenent on the app.jsx file by wrapping with it the header and outlet component


// step 28: now we can console the props which has passed from the App.jsx in themeProvider function 
// step 29: now we are getting the obj with children in an array now let do destructuring
// step 30: and now return the themContext.provider as an tag and include this children prop with the value={[isDark, setIsDark]}
// step 31: and remove the a state from the app.jsx 
import { createContext, useState } from "react";

export const themeContext = createContext("hii");
// console.log(themeContext)

export function ThemeProvider({children}){
    console.log(children)
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return <themeContext.Provider value={[isDark, setIsDark]}>{children}</themeContext.Provider>
}
