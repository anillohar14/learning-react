// step 13: so here we are pasting the isDark state 
// step 14: now let pass this state to the header component by the name of theme
// step 15 : now go to the header component and use it

// step 19: so we have successfully used the theme in the header there now it time to pass in home compoent so we can not do the same as we did fo the header because we dont have the outle compoent  
// here we need to use the context property of the outlet and pass in this state
// step 20: now let go to the home compoenet
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(
      JSON.parse(localStorage.getItem("isDarkMode"))
    );
  return (
    <>
      <Header theme={[isDark, setIsDark]}/>
      <Outlet context={[isDark, setIsDark]}/>
    </>
  );
};
export default App;
