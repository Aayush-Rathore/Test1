import { lazy, Suspense } from "react";
import "./Navbar.css";
import whole from "../../../assets/whole.png";
import { MdArrowDropDown } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BsFillCircleFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { Fragment, useState } from "react";
const Auth = lazy(() => import("../../../Features/Auth/Auth"));

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(true);
  return (
    <Fragment>
      {showAuth && (
        <Suspense>
          <Auth setShow={setShowAuth} />
        </Suspense>
      )}
      <header className="rootPage__header">
        <div className="header__logo">
          <img src={whole} alt="Logo" />
        </div>
        <div className="header__search">
          <HiSearch size={22} color="#7a7a7a" className="icon" />
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="input"
          />
        </div>
        <div
          className="header__auth"
          onClick={() => setShowAuth(true)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span>Create account.</span>
          <strong>It’s free!</strong>
          <MdArrowDropDown size={24} color="#2e2e2e" />
        </div>
      </header>
      <header className="header__mobile">
        <RiCheckboxBlankFill size={15} color="#868e96" />
        <BsFillCircleFill size={15} color="#868e96" />
        <GoTriangleDown size={20} color="#868e96" />
      </header>
    </Fragment>
  );
};

export default Navbar;
