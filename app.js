import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  return (
   <a href="/"> 
   <img
    src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-healthy-food-logo-fork-with-green-leaves-decoration-vector-png-image_3773921.jpg" alt="just j1"
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
const Body = () => {
 return (<>
    <h1>Body</h1>
  </>)
};
const Footer = () => {
 return( <>
    <h1>Footer</h1>
  </>)
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
