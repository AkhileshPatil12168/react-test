import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const link =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Menue = () => {
  const data = useParams();
  const { id } = data;
  const [res, setRes] = useState({});
  const [resMenue, setResMenue] = useState([]);

  useEffect(() => {
    getRestInof();
  }, []);

  async function getRestInof() {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    //console.log(id)

    const resJson = await resData.json();

    const data = resJson.data.cards[0].card.card.info;
    const menueData =
      resJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    console.log(resJson);
    console.log(menueData);
    //(menueData==undefined)?console.log("o stri kal aana"):console.log("aajao")
    setRes(data);
    setResMenue(menueData);
  }

  //console.log(res)
  return (
    <div>
      <div>
        <h1>res id : {id}</h1>
        <h2>res name : {res?.name} </h2>
        <img src={link + res?.cloudinaryImageId} />
        <h3>city : {res.city}</h3>
        <h3>avgRating : {res.avgRating} </h3>
      </div>
      <div>
        {
          // const justMenu= resMenue
          resMenue == undefined ? (
            <h2>closed, come tomorrow</h2>
          ) : (
            resMenue?.map((ele, index) => (
              <div key={index}>
                <h4>{ele.card.card.title}</h4>
                <ul>
                  {ele?.card?.card?.itemCards?.map((m) => (
                    <li>
                      <img src={link + m.card.info.imageId}></img>
                      {m.card.info.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default Menue;
