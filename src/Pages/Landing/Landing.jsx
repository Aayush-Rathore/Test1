import { Fragment } from "react";
import Header from "../../Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Body from "../../Components/Body/Body";

const Landing = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </Fragment>
  );
};

export default Landing;
