// step 1: here we are creating an dinamic way to swich between dark and light mode
// step 2: we need to add an onClick function on p tag because the button is an p tag
// step 3: to make this functionality dinamic let create an useState and set the value for it so when the user click the value of isDark variable will change
// step 4: but there is an problem that when the user reload the page it will set to the initial value false in isDark variable and the page will get light mode
// to solve this we have to use the localStorage functionality so let create this by using the isDarkMode variable in localstorage
// step 5: so we have created the variable and also console it but the problem is that it is giving the false and true in string we need to change to boolien so we use JSON.parse(locaalStorage.getItem('isDarkMode'))
// step 6: now let use the in the intitial state of the isDark variable
// step 7: now we need to use if conditional to check the isDarkMode variable and set the theme mode our work is done
// step 8: but this is not the correct way to dirctly interact with the DOM in react
// step 9 now let do some changes in our App.css file we have change the run of main and header tag so when the dark class will added on those tag the theme will change 
// step 10: so now we can avoid directly changing the DOM we will do this staticaly so we will directly add thfe class to the header tag by using the ternery operator
// step 11: so now we have added the class dinamicly for the header but we can't do this for the main tag we need to (Uplift the State) means we need to
// create this isDark sate to the parent state which needs to include both the components the header and the Home home includes the main tag
// step 12 liftUp the state means copy this state to the App.jsx component 

// step 16: now we are getting the state in the theme so we don't need the isdark statewe will comment it and the the theme value
// step 17: so we have used them and it's working fine for olny header
// step 18: now we will go back to app.jsx component and pass the theme there and see how we can do that use the context api
import { useState } from "react";

export default function header({theme}) {
  const [isDark, setIsDark] = theme
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );
  // if (isDark) {
  //   document.body.classList.toggle("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  console.log(JSON.parse(localStorage.getItem("isDarkMode")));
  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the World?</a>
        </h2>
        <p
          className="dark-mode"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
