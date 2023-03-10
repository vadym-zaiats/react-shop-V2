import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import Button from "../Button";
const Modal = ({
  isActive,
  question,
  toggleModal,
  onClick,
  addToBasket,
  title,
  code,
}) => {
  return isActive ? (
    <div className={styles.modal_overlay} onClick={onClick}>
      <div className={styles.modal_window}>
        <div>{question}</div>
        <div className={styles.modal_window_buttons}>
          <Button
            text={"Ok"}
            onClick={() => {
              toggleModal();
              addToBasket({ title, code });
            }}
          />
          <Button
            text={"Сancel"}
            onClick={() => {
              toggleModal();
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  isActive: PropTypes.bool,
  question: PropTypes.string,
  toggleModal: PropTypes.func,
  onClick: PropTypes.func,
  addToBasket: PropTypes.func,
  title: PropTypes.string,
  code: PropTypes.number,
};
Modal.defaultProps = {
  isActive: false,
  question: "Згодження",
  toggleModal: () => {
    console.log("Hello world");
  },
  onClick: () => {
    console.log("Hello world");
  },
  addToBasket: () => {
    console.log("Hello world");
  },
  title: "Модель авто",
  code: "Штрих-код авто",
};
export default Modal;
