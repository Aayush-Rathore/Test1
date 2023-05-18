import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const posts = 32;
  return (
    <nav className="page__navigation">
      <NavLink to="/" className="nav__links">
        All Posts({posts})
      </NavLink>
      <NavLink to="/Article" className="nav__links">
        Article
      </NavLink>
      <NavLink to="/Event" className="nav__links">
        Event
      </NavLink>
      <NavLink to="/Education" className="nav__links">
        Education
      </NavLink>
      <NavLink to="/Job" className="nav__links">
        Job
      </NavLink>
    </nav>
  );
};

export default Nav;
