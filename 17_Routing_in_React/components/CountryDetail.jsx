import React, { useEffect, useState } from "react";
import './CountryDetails.css'
export default function CountryDetail() {
    const [countryData, setcountryData] = useState([])
    const country = new URLSearchParams(location.search).get('name')
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
        })
    },[])
  return (
    <main>
      <div className="main-container">
        <span className="back-button">
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
