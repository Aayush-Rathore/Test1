import { useState } from "react";
import { Eye, EyeSlash, Facebook } from "react-bootstrap-icons";
import { FcGoogle } from "react-icons/fc";
import "./File.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="modal__form">
      <h1>Sign In</h1>
      <form>
        <div className="input__fields">
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
        </div>
        <button className="btn btn-primary submit__btn">Sign In</button>
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
      <p
        style={{
          fontSize: "12px",
          fontWeight: "var(--medium)",
          textAlign: "center",
        }}
      >
        Forgot Password?
      </p>
    </div>
  );
};

export default Login;
