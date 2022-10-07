import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
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
  isActive,
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
        <nav className={classes.tabs__list}>
          <button
            className={
              isActive === tabsTypes.all
                ? `${classes.active} ${classes.tabs__item}`
                : `${classes.tabs__item}`
            }
            onClick={() => {
              toggleTab(tabsTypes.all);
            }}
          >
            Все
          </button>
          <button
            className={
              isActive === tabsTypes.design
                ? `${classes.active} ${classes.tabs__item}`
                : `${classes.tabs__item}`
            }
            onClick={() => {
              toggleTab(tabsTypes.design);
            }}
          >
            Designers
          </button>
          <button
            className={
              isActive === tabsTypes.analytics
                ? `${classes.active} ${classes.tabs__item}`
                : `${classes.tabs__item}`
            }
            onClick={() => {
              toggleTab(tabsTypes.analytics);
            }}
          >
            Analysts
          </button>
          <button
            className={
              isActive === tabsTypes.management
                ? `${classes.active} ${classes.tabs__item}`
                : `${classes.tabs__item}`
            }
            onClick={() => {
              toggleTab(tabsTypes.management);
            }}
          >
            Managers
          </button>
          <button
            className={
              isActive === tabsTypes.ios
                ? `${classes.active} ${classes.tabs__item}`
                : `${classes.tabs__item}`
            }
            onClick={() => {
              toggleTab(tabsTypes.ios);
            }}
          >
            iOS
          </button>
          <button
            className={
              isActive === tabsTypes.android
                ? `${classes.active} ${classes.tabs__item}`
                : `${classes.tabs__item}`
            }
            onClick={() => {
              toggleTab(tabsTypes.android);
            }}
          >
            Android
          </button>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
