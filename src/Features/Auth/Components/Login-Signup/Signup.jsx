import { useState } from "react";
import { Eye, EyeSlash, Facebook } from "react-bootstrap-icons";
import { FcGoogle } from "react-icons/fc";
import "./File.css";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="modal__form">
      <h1>Create Account</h1>
      <form>
        <div className="input__fields">
          <div className="input__name">
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
            />
            <input type="text" placeholder="Last Name" aria-label="Last Name" />
          </div>
          <input
            className="email"
            type="text"
            aria-label="Email"
            placeholder="Email"
          />
          <div style={{ position: "relative" }}>
            <input
              className="password"
              type={showPass ? "text" : "password"}
              aria-label="Password"
              placeholder="Password"
            />
            <span onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <EyeSlash size={18} color="#8a8a8a" />
              ) : (
                <Eye size={18} color="#8a8a8a" />
              )}
            </span>
          </div>
          <input
            className="password"
            type={showPass ? "text" : "password"}
            aria-label="Confirm Password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="btn btn-primary submit__btn">Create Account</button>
      </form>
      <div>
        <div className="loagin__with" style={{ marginBottom: "8px" }}>
          <Facebook size={16} color="#2F6CE5" />
          Sign in with Facebook
        </div>
        <div className="loagin__with">
          <FcGoogle size={16} />
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Signup;
