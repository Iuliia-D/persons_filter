import { Link } from "react-router-dom";
import Person from "./Person";
import sorter from "sort-nested-json";

const ListPage = ({ searchResults, setSortType }) => {
  let results = sorter
    .sort(searchResults)
    .asc("firstName")
    .map((person) => (
      <Link key={person.id} to={`/${person.firstName}/${person.lastName}`}>
        <Person key={person.id} person={person} firstName={person.firstName} />
      </Link>
    ));
  const content = results?.length ? results : <>NotFound</>;

  return (
    <div>
      <main>{content}</main>
      {
        // searchResults.map((person) => (
        //   <Link key={person.id} to={`/${person.firstName}/${person.lastName}`}>
        //     {/* <li>{person.firstName}</li> */}
        //     <Person
        //       key={person.id}
        //       person={person}
        //       firstName={person.firstName}
        //     />
        //   </Link>
        // ))
      }
    </div>
  );
};
export default ListPage;
