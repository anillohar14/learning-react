// step 6: here we need to use the file of the context 
// step 7: so for using the themeContext we needto import it and noe we can console the the themeContext we are gitting an object
// step 8: but this not the way for using the themeContext file reather than importing the file we can use the react hook names
// useContext and pass the name of our required context so lets do that 
// step 9: the useContext hook will return an value so we need to store that value under the variable named a and console it
// step 10: now we are getting the undefine in the console because we are not passing anything while creating the context in contexts compoent 
// step 11: now let use the useCOntext hook on behaalf of useOutletContext

// step 22: import the themeContext 
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import "../App.css";
import { themeContext } from "../contexts/themeContext";

export default function Home() {
  // console.log(themeContext)
  const a = useContext(themeContext)
  console.log(a)
  // const [isDark] = useOutletContext()
  const [isDark] = useContext(themeContext)

  const [query, setQuery] = useState("");
  return (
    <main className={`${isDark ? 'dark': '' }`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
}
