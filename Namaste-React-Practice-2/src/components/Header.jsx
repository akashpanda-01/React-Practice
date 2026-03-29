import "./Header.css";
import NavLink from "react"
const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" alt="logo" src="../../assets/FoodVilla.png"/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
