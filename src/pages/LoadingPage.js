import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
  const clientHeight = document.documentElement.clientHeight;
  console.log(clientHeight);
  const amountItems = clientHeight / 104;
  const repeat = Math.round(amountItems);
  console.log(repeat);

  const items = (
    <article>
      <div className={classes.avatar}></div>
      <div className={classes.person_description}>
        <div className={classes.person_description_1}></div>
        <div className={classes.person_description_2}></div>
      </div>
    </article>
  );

  let itemsArr = new Array(repeat);
  let contant = itemsArr.fill(items);

  return (
    <div>
      <main>{contant}</main>
    </div>
  );
};
export default LoadingPage;
