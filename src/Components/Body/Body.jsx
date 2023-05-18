import Nav from "./Components/Nav/Nav";
import "./Body.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SideDiv from "./Components/SideDiv/SideDiv";
const AllPosts = lazy(() => import("../../Pages/AllPosts/AllPosts"));

const Body = () => {
  return (
    <main className="main__body">
      <section className="blog__sec">
        <Nav />
        <Suspense fallback={<div>Loading, Please wait...</div>}>
          <Routes>
            <Route path="/" element={<AllPosts />} />
          </Routes>
        </Suspense>
      </section>
      <section className="user__actionSec">
        <SideDiv />
      </section>
    </main>
  );
};

export default Body;
