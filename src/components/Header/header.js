import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img
        src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-healthy-food-logo-fork-with-green-leaves-decoration-vector-png-image_3773921.jpg"
        alt="just j1"
        id="imglogo"
      ></img>
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setLoggedIN] = useState(false);
  return (
    <div className="header">
      <div className="navItem">
        <Title />
        <ul>
          <Link to="/about"><li>about</li></Link>
          <Link to="/contact"><li>contact</li></Link>
          <Link to="cart"><li>cart</li></Link>



        </ul>

        {isLoggedIn ? (
          <button onClick={() => setLoggedIN(false)}>LogOut</button>
        ) : (
          <button onClick={() => setLoggedIN(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
