import "./Banner.css";
import { ArrowLeft } from "react-bootstrap-icons";

const Banner = () => {
  return (
    <div className="header__banner">
      <div className="banner__shadow">
        <div className="banner__btns">
          <ArrowLeft size={24} color="white" />
          <button>Join Group</button>
        </div>
        <span className="banner__title">
          <h2>Computer Engineering</h2>
          <span>142,765 Computer Engineers follow this</span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
