import classes from "./LoadingDetailsPage.module.css";

const LoadingDetailsPage = () => {
  return (
    <div>
      <main>
        <article className={classes.loading_container}>
          <div className={classes.avatar}></div>
          <div className={classes.person_description_1}></div>
          <div className={classes.person_description_2}></div>
        </article>
      </main>
    </div>
  );
};
export default LoadingDetailsPage;
