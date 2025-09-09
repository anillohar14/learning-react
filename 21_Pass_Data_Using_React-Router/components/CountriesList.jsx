import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountryListShimmer from "./ListShimmer.jsx";
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
  if (Countriesdata.length === 0) {
    return <ListShimmer />;
  }
  return (
    <>
      <div className="country-contianer">
        {Countriesdata.filter((country) =>
          country.name.common.toLowerCase().includes(query)
        ).map((country) => {
          return (
            <CountryCard
              data={country} // step 9: from here we are passing all the data related to the country go to countryCard and use this parameter
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
