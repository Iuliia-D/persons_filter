import { useState } from "react";
import classes from "./SearchBar.module.css";
import { ReactComponent as Search } from "../icon/search-icon.svg";
import FilterSvg from "../components/FilterSvg";
import Modal from "../components/Modal";

function SearchBar({
  persons,
  // setSearchResults,
  setSearchParams,
  searchParams,
  personQuery,
  birthday,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [inputActive, setInputActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [sortType, setSortType] = useState();

  //   const resultsArray = persons.filter(
  //     (person) =>
  //       person.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       person.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       person.userTag.toLowerCase().includes(e.target.value.toLowerCase())
  //   );

  //   setSearchResults(resultsArray);
  // };
  const handleSearchChange = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.value;

    setSearchParams({ person: query });

    // searchResults.filter(
    //   (person) =>
    //     person.firstName.toLowerCase().includes(personQuery.toLowerCase()) ||
    //     person.lastName.toLowerCase().includes(personQuery.toLowerCase()) ||
    //     person.userTag.toLowerCase().includes(personQuery.toLowerCase())
    // );
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
          // searchParams={searchParams}
          // setSearchParams={setSearchParams}
          sortType={sortType}
          setSortType={setSortType}
        />

        {/* <p>{sortType}</p> */}
      </form>
    </>
  );
}
export default SearchBar;
