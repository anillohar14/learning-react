// step 10: here i am replacing the <a></a> tag from Link and impor its file and due this our pags will stop reloading whenever we go to countryDetail page 
// this is an simple javascript fetature which is present under the dom of history 
import { Link } from "react-router";

export default function CountryCard({href, flag, name, population, region, capital}) {
  return (
<Link className="country-card" to={href} load="lazy">
  <img src={flag} alt="flag" />
  <div className="card-text">
    <h3 className="card-title">{name} </h3>
    <p>
      <b>Population: </b>{population}
    </p>
    <p>
      <b>Region: </b>{region}
    </p>
    <p>
      <b>Capital: </b>{capital}
    </p>
  </div>
</Link>
  )
}
