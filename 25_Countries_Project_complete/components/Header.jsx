import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";


export default function header() {
  const [isDark, setIsDark] = useContext(themeContext)
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
