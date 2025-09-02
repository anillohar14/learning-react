import Countriesdata from "../Countriesdata";
import CountryCard from "./CountryCard";
export default function CountriesList() {
  const array = Countriesdata.map((country) => {
   return <CountryCard
      key={country.name.common}
      href={`/country.html?name=${country.name.common}`}
      flag={country.flags.svg}
      name={country.name.common}
      population={country.population.toLocaleString("en-IN")}
      region={country.region}
      capital ={country.capital}
    />;
  });
  return (
    <div className="country-contianer">{array}</div>
  );
}
