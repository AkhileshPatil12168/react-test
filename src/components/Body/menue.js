import { useParams } from "react-router-dom";
import useResdata from "../../utils/useRestauratMenue";

import ShimmerBody from "../ShimmerUi";
import useOnline from "../../utils/useOnline";

const link =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Menue = () => {
  const { id } = useParams();
  const data =  useResdata(id)

  const onlineStatus = useOnline()

  if(!onlineStatus){
    return (<h1>you are offline</h1>)
  }

  return (!data[0] || !data[1]) ?(<ShimmerBody/>) :(
    <div>
      <div>
        <h1>res id : {id}</h1>
        <h2>res name : {data[0]?.name} </h2>
        <img src={link + data[0]?.cloudinaryImageId} />
        <h3>city : {data[0]?.city}</h3>
        <h3>avgRating : {data[0]?.avgRating} </h3>
      </div>
      <div>
        {
          // const justMenu= resMenue
          data[1] == undefined ? (
            <h2>closed, come tomorrow</h2>
          ) : (
            data[1]?.map((ele, index) => (
           
              <div key={index}>
                <h4>{ele.card.card.title}</h4>
            
                <ul>
                  {ele?.card?.card?.itemCards?.map((m) => (
                    <li>
                      <img src={link + m?.card?.info?.imageId}></img>
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
