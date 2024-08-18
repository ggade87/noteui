import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOTPGenerated, setIsOTPGenerated] = useState(false);
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignUp = () => {
    // dispatch(authenticateUser(username, password));
    setIsOTPGenerated(true);
    setOtp("");
  };
  const validateOTP = () => {
    setIsOTPGenerated(false);
  };
  return (
    <div className="signupPage">
      <h2>New User</h2>
      <form>
        {!isOTPGenerated ? (
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
                <label>
                  Confirm Password:<br></br>
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
                <button onClick={handleSignUp}>Sign up</button>
              </td>
            </tr>
          </table>
        ) : (
          <>
            <table>
              <tr>
                <td>
                  <label>
                    OTP:<br></br>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={validateOTP}>Validate OTP</button>
                </td>
              </tr>
            </table>
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
