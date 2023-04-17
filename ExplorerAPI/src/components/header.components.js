import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Explorer Logo" />
          </Link>
        </div>
        <div className="header-menu">
          <div>
            <p>Hotels</p>
          </div>
          <div>
            <p>Bike Rentals</p>
          </div>
          <div>
            <p>Restaurants</p>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
