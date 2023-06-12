import { useEffect, useState } from "react";

const useResdata = (id) => {
  const [res, setRes] = useState(null);
  const [resMenue, setResMenue] = useState(null);

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

    // console.log(resJson);
    // console.log(menueData);
    //(menueData==undefined)?console.log("o stri kal aana"):console.log("aajao")
    setRes(data);
    setResMenue(menueData);
  }

  return [res, resMenue];
};

export default useResdata;
