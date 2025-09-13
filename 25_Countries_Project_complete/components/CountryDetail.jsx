import { useEffect, useState } from "react";
import "./CountryDetails.css";
import { Link, useLocation, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer.jsx";

import { useTheme } from "../hooks/useTheme.js";

export default function CountryDetail() {
  const [isDark] = useTheme()
  const param = useParams();
  const country = param.country;
  const [countryData, setcountryData] = useState(null);
  const [NotFound, setNotFound] = useState(false);

  const { state } = useLocation();

  function updateCountryData(data) {
    setcountryData({
      flag: data.flags.svg,
      name: data.name.common,
      native: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      topLevelDomain: data.tld[0],
      currency: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      language: Object.values(data.languages)
        .map((language) => language)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountries]) => borderCountries.name.common);
      })
    ).then((borders) => {
      setTimeout(() => {
        setcountryData((prevState) => ({ ...prevState, borders }));
      });
    });
  }
  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [country]);

  if (NotFound) {
    return <div>Country not Found </div>;
  }
  if (!countryData) {
    return <CountryDetailShimmer />;
  }
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      {/* <h1 style={{ textAlign: "center" }}>
        {size.width} X {size.height}
      </h1> */}
      <div className="main-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left">&nbsp;&nbsp;</i>Back
        </span>
        <div className="country-details">
          <img
            src={countryData.flag}
            alt="flag"
            className="flag-img"
            loading="lazy"
          />
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
                <span className="top-lev-domain">
                  {countryData.topLevelDomain}
                </span>
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
            {countryData.borders !== 0 && (
              <div className="border-countries">
                <b>border Country :</b>&nbsp;
                {countryData.borders?.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
