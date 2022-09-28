import { useParams } from "react-router-dom";

const DetailsPage = ({ searchResults, setSortType }) => {
  const { department, userTag } = useParams();
  console.log(useParams());
  return (
    <div>
      <p>Hello, DetailsPage</p>
      <div>
        {department}, {userTag}
      </div>
    </div>
  );
};
export default DetailsPage;
