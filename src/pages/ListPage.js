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
  const sortFunction = (currentPersons, sortType) => {
    if (sortType === "abc" && tabType === "all") {
      return currentPersons
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person key={person.id} person={person} sortType={sortType} />
          </Link>
        ));
    } else if (sortType === "abc") {
      return currentPersons
        .filter((person) => person.department === tabType)
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person key={person.id} person={person} sortType={sortType} />
          </Link>
        ));
    } else if (sortType === "birthday" && tabType === "all") {
      return currentPersons
        .sort((a, b) => (a.birthday < b.birthday ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person key={person.id} person={person} sortType={sortType} />
          </Link>
        ));
    } else if (sortType === "birthday") {
      return currentPersons
        .filter((person) => person.department === tabType)
        .sort((a, b) => (a.birthday > b.birthday ? 1 : -1))
        .map((person) => (
          <Link key={person.id} to={`/${person.id}`} className="person_link">
            <Person key={person.id} person={person} sortType={sortType} />
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
