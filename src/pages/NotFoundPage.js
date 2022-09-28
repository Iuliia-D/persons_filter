import classes from "./NotFoundPage.module.css";

const NotFound = () => {
  return (
    <article className={classes.container}>
      <div className={classes.notFound_icon}></div>
      <h3>Мы никого не нашли</h3>
      <p>Попробуй скорректировать запрос</p>
    </article>
  );
};
export default NotFound;
