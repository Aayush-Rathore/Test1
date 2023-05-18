import Group from "../../assets/group.svg";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { X, InfoCircle, GeoAlt } from "react-bootstrap-icons";
import "./SideDiv.css";

const SideDiv = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <section className="user__actionSec">
      <div className="btns">
        <button
          type="button"
          className="btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Write a Post
        </button>
        <button type="button" className="btn btn-primary">
          <img
            src={Group}
            alt="group"
            style={{ width: "22px", height: "22px" }}
          />
          <span>Join Group</span>
        </button>
      </div>

      <div className="actionSec__div">
        <div className="location__input">
          <GeoAlt size={18} />
          <input
            type="text"
            placeholder="Enter your location"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          {inputValue === "" ? (
            <HiPencil size={20} />
          ) : (
            <X size={20} onClick={() => setInputValue("")} />
          )}
        </div>
        <div className="info__forUser">
          <InfoCircle size={14} className="icon" />
          <p>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideDiv;
