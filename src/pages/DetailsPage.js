import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsPage = ({ persons }) => {
  const { firstName, lastName } = useParams();

  console.log(persons);

  return (
    <div>
      <Link to={"/"}>Назад</Link>
      <p>Hello, DetailsPage</p>
      <div>
        {firstName}, {lastName}
      </div>
    </div>
  );
};
export default DetailsPage;
