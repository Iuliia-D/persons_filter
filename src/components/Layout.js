import { Outlet } from "react-router-dom";
//import classes from "./Layout.module.css";
import SearchBar from "./SearchBar";

const Layout = ({
  persons,
  setModalActive,
  setSearchParams,
  searchParams,
  personQuery,
  birthday,
  tabsTypes,
  toggleTab,
}) => {
  return (
    <>
      <header>
        <SearchBar
          persons={persons}
          setModalActive={setModalActive}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          personQuery={personQuery}
          birthday={birthday}
        />
        <nav className="tabs__list">
          <button
            className="tabs__item"
            onClick={() => toggleTab(tabsTypes.all)}
          >
            Все
          </button>
          <button
            className="tabs__item"
            onClick={() => toggleTab(tabsTypes.design)}
          >
            Designers
          </button>
          <button
            className="tabs__item"
            onClick={() => toggleTab(tabsTypes.analytics)}
          >
            Analysts
          </button>
          <button
            className="tabs__item"
            onClick={() => toggleTab(tabsTypes.management)}
          >
            Managers
          </button>
          <button
            className="tabs__item"
            onClick={() => toggleTab(tabsTypes.ios)}
          >
            iOS
          </button>
          <button
            className="tabs__item"
            onClick={() => toggleTab(tabsTypes.android)}
          >
            Android
          </button>
        </nav>

        {/* <div className="tabs__list">
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
        </div> */}
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
