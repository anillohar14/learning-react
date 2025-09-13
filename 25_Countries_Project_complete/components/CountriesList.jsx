import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import ListShimmer from "./ListShimmer.jsx";
export default function CountriesList({ query }) {
  const [Countriesdata, setCountriesdata] = useState([]);


  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,currencies,languages,tld,subregion,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesdata(data);
      });
  }, []);
  if (!Countriesdata.length) {
    return <ListShimmer />;
  }
  return (
    <>
      <div className="country-contianer">
        {Countriesdata.filter((country) =>
          country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
        ).map((country) => {
          return (
            <CountryCard
              data={country} 
              key={country.name.common}
              href={`${country.name.common}`}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </>
  );
}
