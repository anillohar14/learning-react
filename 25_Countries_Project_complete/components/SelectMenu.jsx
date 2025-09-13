export default function SelectMenu({setQuery}) {
  return (
   <select name="" className="filter-container" fdprocessedid="yaeool" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
  <option value="Africa" hidden>
    Filter by Region
  </option>
  <option value="Africa">Africa</option>
  <option value="America">Americas</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>

  )
}
