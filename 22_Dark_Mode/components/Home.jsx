// step 21: now here we can use the useOutletContext hook to get the value from the app.jsx component its semiler like the parames
// step 22: and set them into the theme variable and console the theme variable we will get an array and we can do the destructuring 
// step 23: and now we can use this to dinamicly add the class in the main tag and it is also working 
// step 24: but we also have to apply the theme on the particular card of the countr basically in countrydetail.jsx component 
// step 25: now move to the countryDetail.jsx component 
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import "../App.css";
import { useOutletContext } from "react-router";

export default function Home() {
  // const theme = useOutletContext()
  // console.log(theme)
  const [isDark] = useOutletContext()

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
