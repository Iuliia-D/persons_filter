import classes from "./SearchBar.module.css";
import SesrchSvg from "../components/SearchSvg";
import FilterSvg from "../components/FilterSvg";

function SearchBar({ persons, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

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
      <div>
        <h1>Поиск</h1>

        <form className={classes.search} onSubmit={handleSubmit}>
          <button className={classes.search__button}>
            <SesrchSvg />
          </button>
          <input
            className={classes.search__input}
            type="text"
            placeholder="Ведите имя, тег, почту..."
            id="search"
            onChange={handleSearchChange}
          />
          <button className={classes.filter__button}>
            <FilterSvg />
          </button>
        </form>
      </div>
    </>
  );
}
export default SearchBar;
