import "./CountryListShimmer.css";
function ListShimmer() {
  return (
    <div className="country-contianer">
      {Array.from({ length: 100 }).map((el, i) => {
        return (
          <div key={i} className="country-card shimmer-cards">
            <div className="flag-container-shimmer"></div>
            <div className="card-text-shimmer">
              <h3 className="card-title-shimmer"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListShimmer;
