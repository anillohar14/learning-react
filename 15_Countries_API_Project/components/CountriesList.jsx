import Countriesdata from "../Countriesdata";
import CountryCard from "./CountryCard";
export default function CountriesList({query}) {
  console.log(query)
  const array = Countriesdata.filter((country) =>country.name.common.toLowerCase().includes(query)).map((country) => {
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
