import { useState } from "react";
import classes from "./SearchBar.module.css";
import { ReactComponent as Search } from "../icon/search-icon.svg";
import FilterSvg from "../components/FilterSvg";

function SearchBar({
  persons,
  setSearchResults,
  setModalActive,
  setSearchParams,
  searchParams,
}) {
  const handleSubmit = (e) => e.preventDefault();

  const [inputActive, setInputActive] = useState(false);

  const personQuery = searchParams.get("person") || "";

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(persons);

    const form = e.target;
    const query = form.search.value;
    setSearchParams({ person: query });

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

        {/* <p>{sortType}</p> */}
      </form>
    </>
  );
}
export default SearchBar;
