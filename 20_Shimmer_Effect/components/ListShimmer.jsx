import React from 'react'
import '../components/CountryListShimmer.css'
function ListShimmer() {
const mappend =   Array.from({length: 10}).map((el, i) => {
    return <div key={i} className="country-card shimmer-cards"></div>
  })
  return (
    <div className='country-contianer'>
      {Array.from({length: 100}).map((el, i) => {
    return <div key={i} className="country-card shimmer-cards"></div>
  })}
    </div>
  )
}

export default ListShimmer