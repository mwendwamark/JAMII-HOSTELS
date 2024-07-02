import "./LoginPage.css";
import LoginImage from "../../assets/loginImage.jpg";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import GLogin from "../../Components/GoogleOauth/GoogleOauth";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <>
      <div className="login-page container section">
        <div className="login-section container">
          <div className="login-side-image">
            <img src={LoginImage} alt="Login" />
            <div className="login-overlay-text">
              <h1>
                Introducing <span>Jamii Hostels</span>
              </h1>
              <p>
                Experience the best hostel stay. Login to start your journey.
              </p>
            </div>
          </div>

          <div className="login-form-div">
            <h1>Login</h1>

            <form autoComplete="on" className="login-form">
              <div className="login-form-inputs">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              <div className="login-form-inputs">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    type={type}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <span className="show-password" onClick={handleToggle}>
                    {type === "password" ? <IoMdEye /> : <IoEyeOff />}
                  </span>
                </div>
              </div>

              <div className="forgot-password">
                <p>
                  <NavLink to="/forgot-password">Forgot password?</NavLink>
                </p>
              </div>

              <div className="login-buttons">
                <button>Login</button>
                <div className="divider">
                  <span>or</span>
                </div>
                <GLogin className="google-login"/>
              </div>

              <div className="sign-up-redirect">
                <p>Don't have an account? <NavLink to="/create-account">Create account</NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
