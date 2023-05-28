import { useState } from "react";
import resList from "../data/data";

const link =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Card = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString } = props;
  return (
    <div className="resCard">
      <img src={link + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>rating : {avgRatingString}</h4>
    </div>
  );
};

function filterData(serchText, restaurant) {
  let data = restaurant.filter((res) =>
    res.info.name.toLowerCase().includes(serchText.toLowerCase())
  );
  console.log(data);
  if (serchText.length == 0) return resList;
  else return data;
}

const Body = () => {
  const [restaurants, setRestaurant] = useState(resList);
  let [serchText, setSearchInput] = useState("");

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={serchText}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const data = filterData(serchText, resList);
            console.log(serchText);
            setRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resList">
        {restaurants.map((restorunt) => {
          return <Card {...restorunt.info} key={restorunt.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
