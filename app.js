import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data.js";
const link =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Title = () => {
  return (
    <a href="/">
      <img
        src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-healthy-food-logo-fork-with-green-leaves-decoration-vector-png-image_3773921.jpg"
        alt="just j1"
        id="imglogo"
      ></img>
    </a>
  );
};
const Header = () => {
  return (
    <div>
      <div className="header">
        <Title />
        <ul>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

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
const Body = () => {
  return (
    <div className="resList">
      {
        resList.map(restorunt=>{
          return(<Card {...restorunt.info} key={...restorunt.info.id}/>)
        })
      }
     
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <h1> footer</h1>
    </>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />

      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
