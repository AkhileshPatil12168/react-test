const ShimmerCard = () => {
  return (
    <div className="resCard">
      <img src=""></img>
      <h2></h2>
      <h3></h3>
      <h4>rating : </h4>
    </div>
  );
};

const ShimmerBody = () => {
  return (
    <>
      <div className="searchContainer">
        <input type="text" className="searchInput" placeholder="Search" />
        <button className="searchBtn" onClick={() => {}}>
          search
        </button>
      </div>
      <div className="resList"></div>
      <ShimmerCard />
    </>
  );
};
export default ShimmerBody;
