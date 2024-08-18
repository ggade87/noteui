import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import Login from "../../pages/Login/Login";
import { logout } from "../../store/actions/actions";
const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector(
    (state: any) => state.home.isAuthenticated
  );
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <>
      <header>
        {!isAuthenticated ? (
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
                <button onClick={() => handleLogout()}>Sign up</button>
              </li>
            </ul>
          </nav>
        ) : (
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
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
