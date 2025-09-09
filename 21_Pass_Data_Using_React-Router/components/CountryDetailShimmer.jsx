import React from 'react'
import './CountryDetailShimmer.css'
function CountryDetailShimmer() {
  return (
    <main>
      <div className="main-container">
        <span className="back-button shimmer"></span>
        <div className="country-details">
          <img src="null" alt="" />
          <div className="details-container">
            <h1></h1>
          <div className="details-text shimmer">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <span className="native-name shimmer"></span>
          <span className="population shimmer"></span>
          <span className="region shimmer"></span>
          <span className="sub-region shimmer"></span>
          <span className="capital shimmer"></span>
          <span className="top-lev-domain shimmer"></span>
          <span className="currencies shimmer"></span>
          <span className="language shimmer"></span>
          <div className="border-countries shimmer"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CountryDetailShimmer