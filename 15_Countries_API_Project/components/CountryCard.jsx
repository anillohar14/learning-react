export default function CountryCard({href, flag, name, population, region, capital}) {
  return (
<a className="country-card" href={href} load="lazy">
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
</a>

  )
}
