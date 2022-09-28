import { NavLink, Outlet } from "react-router-dom";
//import { getPersons } from "../api/axios";

import classes from "./Layout.module.css";
import SearchBar from "./SearchBar";

const setActive = ({ isActive }) => (isActive ? classes.activeLink : " ");

const Layout = ({ persons, setSearchResults, searchResults }) => {
  return (
    <>
      <header>
        <SearchBar
          persons={persons}
          setSearchResults={setSearchResults}
          searchResults={searchResults}
        />
        <NavLink to="/" className={setActive}>
          Все
        </NavLink>
        <NavLink to="/designers" className={setActive}>
          Designers
        </NavLink>
        <NavLink to="/analists" className={setActive}>
          Analysts
        </NavLink>
        <NavLink to="/managers" className={setActive}>
          Managers
        </NavLink>
        <NavLink to="/ios" className={setActive}>
          iOS
        </NavLink>
        <NavLink to="/android" className={setActive}>
          Android
        </NavLink>

        {/* <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Все
        </NavLink>
        <NavLink
          to="/designers"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Designers
        </NavLink>
        <NavLink
          to="/analists"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Analysts
        </NavLink>
        <NavLink
          to="/managers"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Managers
        </NavLink>
        <NavLink
          to="/ios"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          iOS
        </NavLink>
        <NavLink
          to="/android"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Android
        </NavLink> */}
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
