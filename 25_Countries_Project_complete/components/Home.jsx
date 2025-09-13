import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import "../App.css";

import { useTheme } from "../hooks/useTheme";

export default function Home() {

  const [isDark] = useTheme()

  const [query, setQuery] = useState("");
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  );
}
