import classes from "./Person.module.css";

const Person = ({ person }) => {
  return (
    <article>
      <img src={person.avatarUrl} alt="person avatar" />
      <div className={classes.person_description}>
        <p>
          <span className={classes.text_black}>{person.firstName} </span>
          <span className={classes.text_black}>{person.lastName} </span>
          <span className={classes.text_gray}>{person.userTag}</span>
        </p>
        <p className={classes.text_gray}>{person.position}</p>
      </div>
    </article>
  );
};
export default Person;
