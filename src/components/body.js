import { useEffect, useState } from "react";
import resList from "../data/data";

import ShimmerBody from "./ShimmerUi";

const link =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Card = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props;

  return (
    <div className="resCard">
      <img src={link + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>rating : {avgRating}</h4>
    </div>
  );
};

function filterData(serchText, restaurant) {
  let data = restaurant.filter((res) =>
    res?.data?.data?.name.toLowerCase().includes(serchText.toLowerCase())
  );

  return data;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurant] = useState([]);
  let [serchText, setSearchInput] = useState("");

  useEffect(() => {
    getSwiggyData();
  }, []);

  async function getSwiggyData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.66682693229555&lng=74.25015181303024&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData.data.cards)
    setRestaurant(jsonData?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards);
  }

  return restaurants.length === 0 ? (
    <ShimmerBody />
  ) : (
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
            const data = filterData(serchText, restaurants);

            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resList">
        {filteredRestaurants.map((restorunt) => {
          return (
            <Card {...restorunt?.data?.data} key={restorunt?.data?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
