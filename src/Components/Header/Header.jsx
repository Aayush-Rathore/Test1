import { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

const Header = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
    </Fragment>
  );
};

export default Header;
