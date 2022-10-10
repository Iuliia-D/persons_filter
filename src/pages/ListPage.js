import { Link } from "react-router-dom";
import Person from "./Person";
import NotFoundPage from "./NotFoundPage";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

const ListPage = ({
  loading,
  currentPersons,
  tabType,
  sortType,
  errorMassage,
}) => {
  let nextYear = [];
  let curYear = [];

  const BirthdayWillBe = (currentPersons) => {
    currentPersons.map((person) => {
      const now = new Date();
      const curMonth = now.getMonth(); // для проверки работопособности можно сделать "-7". Т.к. в данный момент все дни рождения в следующем году и не видно разделителя

      const personBirthday = new Date(person.birthday);
      const personBMonth = personBirthday.getMonth();

      const difference = personBMonth - curMonth;

      difference < 0 ? nextYear.push(person) : curYear.push(person);
    });
    return curYear, nextYear;
  };

  const sortFunction = (currentPersons, sortType) => {
    BirthdayWillBe(currentPersons);
    if (sortType === "abc" && tabType === "all") {
      return currentPersons
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person
              key={person.id}
              person={person}
              sortType={sortType}
              nextYear={nextYear}
              curYear={curYear}
            />
          </Link>
        ));
    } else if (sortType === "abc") {
      return currentPersons
        .filter((person) => person.department === tabType)
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person
              key={person.id}
              person={person}
              sortType={sortType}
              nextYear={nextYear}
              curYear={curYear}
            />
          </Link>
        ));
    } else if (sortType === "birthday" && tabType === "all") {
      return currentPersons
        .sort((a, b) => (a.birthday < b.birthday ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person
              key={person.id}
              person={person}
              sortType={sortType}
              nextYear={nextYear}
              curYear={curYear}
            />
          </Link>
        ));
    } else if (sortType === "birthday") {
      return currentPersons
        .filter((person) => person.department === tabType)
        .sort((a, b) => (a.birthday > b.birthday ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person
              key={person.id}
              person={person}
              sortType={sortType}
              nextYear={nextYear}
              curYear={curYear}
            />
          </Link>
        ));
    } else {
      return currentPersons.map((person) => (
        <Link key={person.id} to={`/${person.id}`} className="person_link">
          <Person key={person.id} person={person} sortType={sortType} />
        </Link>
      ));
    }
  };

  const sortedCurPersons = sortFunction(currentPersons, sortType);

  const content = sortedCurPersons?.length ? (
    sortedCurPersons
  ) : (
    <NotFoundPage />
  );

  return (
    <div>
      <main>
        {errorMassage === true ? (
          <ErrorPage />
        ) : loading ? (
          content
        ) : (
          <LoadingPage />
        )}
      </main>
    </div>
  );
};
export default ListPage;
