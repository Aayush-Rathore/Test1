import "./SideBox.css";
import authpic from "../assets/authpic.png";
import { Link } from "react-router-dom";

const SideBox = ({ route, msg, link, policy }) => {
  return (
    <div className="modal__div">
      <div>
        <p className="goto__signup">
          {msg}
          <Link to={route} className="link">
            {" " + link}
          </Link>
        </p>
      </div>
      <img src={authpic} alt="img" style={{ margin: "31px 0 12px" }} />
      {policy && <p>{policy}</p>}
    </div>
  );
};

export default SideBox;
