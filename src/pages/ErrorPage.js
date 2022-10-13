import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <article className={classes.container}>
      <div className={classes.notFound_icon}></div>
      <h3 className={classes.errorTitle}>Какой-то сверхразум все сломал</h3>
      <p className={classes.errorContent}>Постараемся быстро починить</p>
      <p className={classes.errorLink}>
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
