import { useState } from "react";
import classes from "./SearchBar.module.css";
import SesrchSvg from "../components/SearchSvg";
import FilterSvg from "../components/FilterSvg";
import Modal from "../components/Modal";

function SearchBar({ persons, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const [modalActive, setModalActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [sortType, setSortType] = useState();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(persons);

    const resultsArray = persons.filter(
      (person) =>
        person.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        person.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        person.userTag.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <>
      <h1>Поиск</h1>

      <form className={classes.search} onSubmit={handleSubmit}>
        {/* <button className={classes.search__button} */}
        <button
          // className={
          //   inputActive
          //     ? "search__button search__button--active"
          //     : "search__button"
          // }
          className={
            inputActive
              ? `${classes.search__button_active}`
              : `${classes.search__button}`
          }
        >
          <SesrchSvg />
        </button>
        <input
          className={classes.search__input}
          type="text"
          placeholder="Ведите имя, тег, почту..."
          id="search"
          onChange={handleSearchChange}
          onClick={() => setInputActive(true)}
        />
        <button
          className={classes.filter__button}
          onClick={() => setModalActive(true)}
        >
          <FilterSvg />
        </button>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          sortType={sortType}
          setSortType={setSortType}
        />
        {/* <p>{sortType}</p> */}
      </form>
    </>
  );
}
export default SearchBar;
