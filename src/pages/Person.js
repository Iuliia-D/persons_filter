import classes from "./Person.module.css";

const Person = ({ person, sortType, curYear, nextYear }) => {
  console.log("в следующем году: ", nextYear);
  console.log("в этом году: ", curYear);

  const birthFormat = (dateString) => {
    let birthday = new Date(dateString);
    let birth = birthday.toLocaleDateString("default", {
      day: "numeric",
      month: "short",
    });
    return birth;
  };

  const now = new Date();
  const nextYearLabel = (now) => {
    const nowYear = now.getFullYear();
    const nextYear = nowYear + 1;
    return nextYear;
  };
  console.log(nextYearLabel(now));

  return (
    <>
      <article className={classes.person_container}>
        <img src={person.avatarUrl} alt="person avatar" />
        <div className={classes.person_description}>
          <p>
            <span className={classes.text_black}>{person.firstName} </span>
            <span className={classes.text_black}>{person.lastName} </span>
            <span className={classes.text_gray}>{person.userTag}</span>
          </p>
          <p className={classes.text_gray}>{person.position}</p>
        </div>
        <div className={classes.birthday_container}>
          {sortType === "birthday" ? (
            <p className={classes.birthday}>{birthFormat(person.birthday)}</p>
          ) : (
            ""
          )}
        </div>
      </article>
      <div>
        {sortType === "birthday" &&
        curYear.includes(person) &&
        curYear.indexOf(person) === 0 ? (
          <div className={classes.line_container}>
            <div className={classes.line}></div>

            <span className={classes.year}>{nextYearLabel(now)}</span>

            <div className={classes.line}></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Person;
