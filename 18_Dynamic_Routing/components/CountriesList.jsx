import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
export default function CountriesList({ query }) {
  const [Countriesdata, setCountriesdata] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
      .then((res) => res.json())
      .then((data) => {
        setCountriesdata(data);
      });
  }, []);
  return (
    <>
      <div className="country-contianer">
        {Countriesdata.filter((country) =>
          country.name.common.toLowerCase().includes(query)
        ).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              // href={`/country?name=${country.name.common}`} // changing this path 
              href={`${country.name.common}`} // changing this path 
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
