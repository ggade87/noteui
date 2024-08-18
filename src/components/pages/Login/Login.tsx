import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../store/actions/actions";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    dispatch(authenticateUser(username, password));
    navigate("/");
  };

  return (
    <div className="loginPage">
      <h2>Login</h2>
      <form onSubmit={() => handleLogin()}>
        <table>
          <tr>
            <td>
              <label>
                Username:<br></br>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Password:<br></br>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Login</button>
            </td>
          </tr>
        </table>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
