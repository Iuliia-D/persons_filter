import { useParams, useNavigate } from "react-router-dom";
import classes from "./DetailsPage.module.css";
import ArrowBackSvg from "../components/ArrowBackSvg";

const DetailsPage = ({ persons }) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  let curPerson;
  for (const person in persons) {
    if (persons[person].id === id) {
      curPerson = persons[person];
    }
  }

  const [arr1, arr2, arr3, arr4, arr5] = [
    [curPerson.phone.slice(0, 2)],
    [curPerson.phone.slice(2, 5)],
    [curPerson.phone.slice(5, 8)],
    [curPerson.phone.slice(8, 10)],
    [curPerson.phone.slice(10, 12)],
  ];

  let phoneNumber = arr1
    .concat(" ", "(", arr2, ")", " ", arr3, " ", arr4, " ", arr5)
    .join("");

  let birthday = new Date(curPerson.birthday);
  let birth = birthday.toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const getAge = (dateString) => {
    const ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
  };
  const age = getAge(curPerson.birthday);

  return (
    <div className={classes.details}>
      <div className={classes.header}>
        <button className={classes.goBack} onClick={goBack}>
          <ArrowBackSvg />
        </button>

        <div className={classes.header_content}>
          <div className={classes.header_avatar}>
            <img src={curPerson.avatarUrl}></img>
          </div>
          <div className={classes.userName}>
            <p className={classes.userName_name}>
              {curPerson.firstName} {curPerson.lastName}
            </p>
            <p className={classes.userName_tag}>{curPerson.userTag}</p>
          </div>
          <p>{curPerson.position}</p>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.birthday}>
          <div className={classes.birthday_icon}></div>
          <span className={classes.birthday_date}>{birth}</span>
          <span className={classes.birthday_age}>{age} лет</span>
        </div>
        <div className={classes.phone}>
          <div className={classes.phone_icon}></div>
          <span className={classes.phone_number}>{phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
