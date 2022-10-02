import CloseModalSvg from "../components/CloseModalSvg";
//import classes from "./Modal.modules.css";

function Modal({ active, setActive, sortType, setSortType }) {
  return (
    <div
      className={active ? "modal active--modal" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active--modal" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <span className="modal__header_title">Сортировка</span>
          <button
            className="modal__header__btn"
            onClick={() => setActive(false)}
          >
            <CloseModalSvg />
          </button>
        </div>

        {/* <p>{sortType}</p> */}
        <div className="modal__body">
          <div className="input">
            <input
              type="radio"
              name="sort"
              value={"abc"}
              id="radioBtn1"
              checked={true}
              className="input_item"
              onChange={(e) => setSortType(e.target.value)}
            />
            <label htmlFor="radioBtn1">По алфавиту</label>
          </div>
          <div className="input">
            <input
              type="radio"
              name="sort"
              value="birthday"
              id="radioBtn2"
              className="input_item"
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