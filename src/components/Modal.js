import CloseModalSvg from "../components/CloseModalSvg";
import classes from "./Modal.module.css";

function Modal({ active, setActive, sortType, setSortType }) {
  return (
    <div
      className={
        active
          ? `${classes.modal} ${classes.active__modal}`
          : `${classes.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${classes.modal__content} ${classes.active__modal}`
            : `${classes.modal__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modal__header}>
          <span className={classes.modal__header_title}>Сортировка</span>
          <button
            className={classes.modal__header__btn}
            onClick={() => setActive(false)}
          >
            <CloseModalSvg />
          </button>
        </div>

        {/* <p>{sortType}</p> */}
        <div className={classes.modal__body}>
          <div className={classes.input}>
            <input
              type="radio"
              name="sort"
              value={"abc"}
              id="radioBtn1"
              checked={true}
              className={classes.input_item}
              onChange={(e) => setSortType(e.target.value)}
            />
            <label htmlFor="radioBtn1">По алфавиту</label>
          </div>
          <div className={classes.input}>
            <input
              type="radio"
              name="sort"
              value="birthday"
              id="radioBtn2"
              className={classes.input_item}
              onChange={(e) => setSortType(e.target.value)}
            />
            <label htmlFor="radioBtn1">По дню рождения</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
