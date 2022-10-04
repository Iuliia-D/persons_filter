import { Link } from "react-router-dom";
import Person from "./Person";
//import sorter from "sort-nested-json";
import NotFoundPage from "./NotFoundPage";
import LoadingPage from "./LoadingPage";

const ManagersListPage = ({ loading, personQuery, persons }) => {
  let results = persons
    .filter((person) => person.department.includes("management"))
    .filter(
      (person) =>
        person.firstName.toLowerCase().includes(personQuery.toLowerCase()) ||
        person.lastName.toLowerCase().includes(personQuery.toLowerCase()) ||
        person.userTag.toLowerCase().includes(personQuery.toLowerCase())
    )
    .map((person) => (
      <Link key={person.id} to={`/${person.id}`} className="person_link">
        <Person key={person.id} person={person} firstName={person.firstName} />
      </Link>
    ));
  const content = results?.length ? results : <NotFoundPage />;

  return (
    <div>
      <main>{loading ? content : <LoadingPage />}</main>
    </div>
  );
};
export default ManagersListPage;
