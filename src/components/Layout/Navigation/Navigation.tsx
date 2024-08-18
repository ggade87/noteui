import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <header>
        <nav>
          <ul className="navMenu">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
