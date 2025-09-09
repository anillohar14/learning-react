import { Link } from "react-router";
// step 4: in the link tag we can pass the third paramenter called state and we can pass any thing from here obj, arr, str,etc
// step 5: to access this state we need to go to the page were the link is refering it is refering us to the countryDetail.jsx
// step 10: lets use the parameter data now we pass the data into an object and this data will pass on to the countrDetail.jsx file under the state
export default function CountryCard({href, flag, name, population, region, capital, data}) {
  return (
<Link className="country-card" to={href} state={data}> 
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
