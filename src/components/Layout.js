import { NavLink, Outlet } from "react-router-dom";
import { getPersons } from "../api/axios";
import { useState, useEffect } from "react";
import classes from "./Layout.module.css";
import SearchBar from "./SearchBar";

const setActive = ({ isActive }) => (isActive ? classes.activeLink : " ");

const Layout = () => {
  const [persons, setPersons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPersons().then((json) => {
      // const jsonAbc = sorter.sort(json).asc("firstName");
      // console.log(jsonAbc);
      // setPersons(jsonAbc);
      // setSearchResults(jsonAbc);
      setPersons(json);
      setSearchResults(json);
    });
  }, []);

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
