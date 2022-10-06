import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./DetailsPage.module.css";
import ArrowBackSvg from "../components/ArrowBackSvg";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all"
      )
      .then((respons) => setPersons(respons.data.items));
  }, []);

  // persons.length === 0 ? console.log("no array") : console.log("is array");
  // console.log(persons);
  // console.log(id);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const birthFormat = (dateString) => {
    let birthday = new Date(dateString);
    let birth = birthday.toLocaleDateString("default", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return birth;
  };
  const getAge = (dateString) => {
    const ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
  };

  const phoneFormat = (phoneString) => {
    const [arr1, arr2, arr3, arr4, arr5] = [
      [phoneString.slice(0, 2)],
      [phoneString.slice(2, 5)],
      [phoneString.slice(5, 8)],
      [phoneString.slice(8, 10)],
      [phoneString.slice(10, 12)],
    ];
    let phoneNumber = arr1
      .concat(" ", "(", arr2, ")", " ", arr3, " ", arr4, " ", arr5)
      .join("");
    return phoneNumber;
  };

  return (
    <>
      {persons.length === 0 ? (
        <div>Loading...</div>
      ) : (
        persons.map((curPerson) =>
          curPerson.id === id ? (
            <div key={curPerson.id} className={classes.details}>
              <div className={classes.header}>
                <button className={classes.goBack} onClick={goBack}>
                  <ArrowBackSvg />
                </button>
                <div className={classes.header_content}>
                  <div className={classes.header_avatar}>
                    <img src={curPerson.avatarUrl} alt="person avatar"></img>
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
                  <span className={classes.birthday_date}>
                    {birthFormat(curPerson.birthday)}
                  </span>
                  <span className={classes.birthday_age}>
                    {getAge(curPerson.birthday)} лет
                  </span>
                </div>
                <div className={classes.phone}>
                  <div className={classes.phone_icon}></div>
                  <span className={classes.phone_number}>
                    {phoneFormat(curPerson.phone)}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )
      )}
    </>
  );
};

export default DetailsPage;
