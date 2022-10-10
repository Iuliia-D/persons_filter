import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <article className={classes.container}>
      <div className={classes.notFound_icon}></div>
      <h3>Какой-то сверхразум все сломал</h3>
      <p>Постараемся быстро починить</p>
      <p>
        <a
          href="/"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Попробовать снова
        </a>
      </p>
    </article>
  );
};
export default ErrorPage;
