import classes from "./Person.module.css";

const Person = ({ person, sortType }) => {
  const birthFormat = (dateString) => {
    let birthday = new Date(dateString);
    let birth = birthday.toLocaleDateString("default", {
      day: "numeric",
      month: "short",
    });
    return birth;
  };

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
        <div>
          {sortType === "birthday" ? (
            <p className={classes.birthday}>{birthFormat(person.birthday)}</p>
          ) : (
            ""
          )}
        </div>
      </article>
    </>
  );
};
export default Person;
