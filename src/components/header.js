import { useState } from "react";

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
  const [isLoggedIn, setLoggedIN] = useState(false);
  return (
    <div className="header">
      <div className="navItem">
        <Title />
        <ul>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
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
