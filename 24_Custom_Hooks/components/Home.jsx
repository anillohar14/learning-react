import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import "../App.css";
// import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  // const size = useWindowSize();
  const [isDark] = useTheme()

  const [query, setQuery] = useState("");
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        {/* <h1 style={{ textAlign: "center" }}>
          {size.width} X {size.height}
        </h1> */}
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
