// import Countriesdata from "../Countriesdata";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
export default function CountriesList({ query }) {
  const [Countriesdata, setCountriesdata] = useState([]);
  const [Count, setCount] = useState(0);
  // if (Countriesdata.length === 0) {
  //   fetch(
  //     "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountriesdata(data);
  //       console.log(Countriesdata);
  //     });
  // }
  // useState is use to create an state
  //  useEffect is use to monitor an state and for fetching the data

  useEffect(() => {
    let intercalID = setInterval(() => {
      // last step : cleanup function in the useEffect is used to remove all the runnig code from this component when this component get umount i have added the
      // setInterval function to give an demo here the code will print the hii in console this will also print hii when the component
      // gets umount to stop this i have stored the id of the interval and used in cleanup function under clearInterval function
      console.log("hiii");
    }, [1000]);
    fetch(
      // this is an function which is mostly use to fetch data this function take an
      // dependeces Array for renderring the component i have passed empty array this will render my compoenet for one time
      // now i have chage the dependeceis array to an count state this will run the code whenever the state changes and it will always run the code for the first time
      // wheather you pass or keep it empty in dependences array
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesdata(data);
        // console.log(Countriesdata);
      });
    return () => {
      // this return statement will run when the component will unount from the page means when removed in App.jsx file i have written the code in that way at line 18
      clearInterval(intercalID);
      console.log("Cleaning....");
    };
  }, [Count]);
  // console.log(query);
  // const array =
  return (
    <>
      <h1>{Count}</h1>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        ClearAllCountries
      </button>
      <div className="country-contianer">
        {Countriesdata.filter((country) =>
          country.name.common.toLowerCase().includes(query)
        ).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              href={`/country.html?name=${country.name.common}`}
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
