export default function SearchBar({setQuery}) {
  return (
    <div className="search-container">
  <i className="fa-solid fa-magnifying-glass" />
  <input
    type="text"
    onChange={(e) => {setQuery(e.target.value.toLowerCase())}}
    placeholder="Search for a Country..."
    fdprocessedid="kazxbo"
  />
</div>
  )
}
