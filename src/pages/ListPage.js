import { Link } from "react-router-dom";
import Person from "./Person";
import NotFoundPage from "./NotFoundPage";
import LoadingPage from "./LoadingPage";

const ListPage = ({ loading, currentPersons, tabType }) => {
  let results = currentPersons.map((person) => (
    <Link key={person.id} to={`/${person.id}`} className="person_link">
      <Person key={person.id} person={person} firstName={person.firstName} />
    </Link>
  ));

  let tabResults = currentPersons
    .filter((person) => person.department === tabType)
    .map((person) => (
      <Link key={person.id} to={`/${person.id}`} className="person_link">
        <Person key={person.id} person={person} firstName={person.firstName} />
      </Link>
    ));

  console.log(currentPersons);

  const tabsSelection = tabResults?.length ? tabResults : results;
  const content = tabsSelection?.length ? tabsSelection : <NotFoundPage />;

  return (
    <div>
      <main>{loading ? content : <LoadingPage />}</main>
    </div>
  );
};
export default ListPage;
