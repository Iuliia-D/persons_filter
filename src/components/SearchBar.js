import { useState } from "react";
import classes from "./SearchBar.module.css";
import { ReactComponent as Search } from "../icon/search-icon.svg";
import FilterSvg from "../components/FilterSvg";
import Modal from "../components/Modal";

function SearchBar({ setSearchParams, sortTypes, handleSort }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [inputActive, setInputActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.value;

    setSearchParams({ person: query });
  };

  return (
    <>
      <h1>Поиск</h1>
      <form
        className={classes.search}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className={classes.search__icon}>
          <Search
            style={inputActive ? { color: "#050510" } : { color: "#c3c3c6" }}
          />
        </div>
        <input
          className={classes.search__input}
          type="text"
          name="search"
          placeholder="Ведите имя, тег, почту..."
          id="search"
          onChange={handleSearchChange}
          onInput={() => setInputActive(true)}
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
          handleSort={handleSort}
          sortTypes={sortTypes}
        />
      </form>
    </>
  );
}
export default SearchBar;
