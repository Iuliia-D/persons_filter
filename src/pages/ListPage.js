import { Link } from "react-router-dom";
import Person from "./Person";
import sorter from "sort-nested-json";
import NotFoundPage from "./NotFoundPage";
import LoadingPage from "./LoadingPage";

const ListPage = ({ searchResults, loading, personQuery, persons }) => {
  let results = persons
    // sorter
    //   .sort(searchResults)
    //   .asc("firstName")
    .filter((person) => person.firstName.includes(personQuery))
    .map((person) => (
      <Link
        key={person.id}
        // to={`/${person.firstName}/${person.lastName}`}
        to={`/${person.id}`}
        className="person_link"
      >
        <Person key={person.id} person={person} firstName={person.firstName} />
      </Link>
    ));
  const content = results?.length ? results : <NotFoundPage />;

  return (
    <div>
      {/* <main>{content}</main> */}
      <main>{loading ? content : <LoadingPage />}</main>
    </div>
  );
};
export default ListPage;
