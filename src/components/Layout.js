import { NavLink, Outlet } from "react-router-dom";
//import classes from "./Layout.module.css";
import SearchBar from "./SearchBar";

const Layout = ({ persons, setSearchResults, searchResults }) => {
  return (
    <>
      <header>
        <SearchBar
          persons={persons}
          setSearchResults={setSearchResults}
          searchResults={searchResults}
        />
        <div className="tabs__list">
          <NavLink to="/" end className="tabs__item">
            Все
          </NavLink>
          <NavLink to="designers" className="tabs__item">
            Designers
          </NavLink>
          <NavLink to="analists" className="tabs__item">
            Analysts
          </NavLink>
          <NavLink to="managers" className="tabs__item">
            Managers
          </NavLink>
          <NavLink to="ios" className="tabs__item">
            iOS
          </NavLink>
          <NavLink to="android" className="tabs__item">
            Android
          </NavLink>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
