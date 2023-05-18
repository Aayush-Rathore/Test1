import { Fragment } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const More = () => {
  return (
    <Fragment>
      <div>
        <button
          className="toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BiDotsHorizontalRounded size={28} />
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="/">
              Edit
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default More;
