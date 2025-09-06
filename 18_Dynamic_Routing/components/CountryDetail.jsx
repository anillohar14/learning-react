// step 3: Here we can use the useparams hook and console the param 
// step 4: now we can replace the URLSearchParam to this useParams hook to get the country
// step 5: so in url when we type the /india we will get the india page but if we click on random country card it will show an error 
// to fix this error we need to fix some code in countryList file
// step 6: now the error is fixed by we type random path this will also give us an error to fix this we need to use the .catch after 
// then method in .then method 
// step 7: now let create an state to handel this error NotFound and pass false  in intial state and change the value to true in .catch method
// step 8: create an if statement to check the notfound value itf true then return an div with country not found text init 
// step 9: now add an onClick method on the back button 
import React, { useEffect, useState } from "react";
import './CountryDetails.css'
import { useParams } from "../node_modules/react-router";
export default function CountryDetail() {
  const param = useParams()
  // const country = param.country
  console.log(param) //this line is printing the params obj
    const [countryData, setcountryData] = useState([])
    const [NotFound, setNotFound] = useState(false)
    const country = param.country
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then(res => res.json())
        .then(([data]) => {
            console.log(data)
            setcountryData({
                flag: data.flags.svg,
                name: data.name.common,
                native: Object.values(data.name.nativeName)[0].common,
                population: data.population.toLocaleString('en-IN'),
                region: data.region,
                subRegion: data.subRegion,
                capital: data.capital,
                topLevelDomain: data.tld[0],
                currency: Object.values(data.currencies).map((currency) => currency.name).join(", "),
                language: Object.values(data.languages).map((language) => language).join(', ')
            })
        }).catch(err => {
          setNotFound(true)
        })
    },[])
    if(NotFound){
      return <div>Country not Found </div>
    }
  return (
    <main>
      <div className="main-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left">&nbsp;&nbsp;</i>Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt="flag" className="flag-img" loading="lazy" />
          <div className="details-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.native}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-lev-domain">{countryData.topLevelDomain}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currency}</span>
              </p>
              <p>
                <b>Language: </b>
                <span className="language">{countryData.language}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>border Country :</b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
