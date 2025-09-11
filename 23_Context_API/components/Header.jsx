// step 17: now let import the themeContext.js
// step 18: we use it at line 9
// step 19: now let move to the countryDetail.jsx and do the same thing

import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";


export default function header({theme}) {
  // const [isDark, setIsDark] = theme
  const [isDark, setIsDark] = useContext(themeContext)
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
