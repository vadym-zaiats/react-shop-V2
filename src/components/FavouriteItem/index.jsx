import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import star from "../../img/star.svg";
import addStar from "../../img/star0.svg";
import death from "../../img/death.svg";
import styles from "./FavouriteItem.module.scss";
import Button from "../Button";
import Modal from "../Modal";

const FavouriteItem = ({
  logo,
  title,
  color,
  price,
  code,
  favourites,
  addToFav,
  addToBasket,
}) => {
  const [favourite, isFavourite] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    for (const car of favourites) {
      if (car.code === code) {
        return isFavourite(true);
      }
    }
  }, [code, favourites]);
  const toggleModal = () => {
    setIsActive(!isActive);
  };
  const closeModal = (e) => {
    if (e.target.classList.contains("Modal_modal_overlay__0uG9G")) {
      toggleModal();
    }
  };
  return (
    <>
      <img className={styles.size} src={logo} alt="logo" />
      <p>Brand: {title}</p>
      <p>Color: {color}</p>
      <p>Price: {price}$</p>
      <p>Barcode: {code}</p>
      <div className={styles.footer}>
        <Button text="Add to basket" onClick={toggleModal} />
        <img
          src={favourite ? star : addStar}
          onClick={() => {
            addToFav({ logo, title, color, price, code });
          }}
          alt={"is-favourite"}
        />
      </div>
      <Modal
        isActive={isActive}
        question={"Do you want to add this product to basket?"}
        toggleModal={toggleModal}
        onClick={closeModal}
        addToBasket={addToBasket}
        logo={logo}
        title={title}
        color={color}
        price={price}
        code={code}
      />
    </>
  );
};
// CardItem.propTypes = {
//   logo: PropTypes.string,
//   title: PropTypes.string,
//   color: PropTypes.string,
//   price: PropTypes.number,
//   code: PropTypes.number,
//   toggleModal: PropTypes.func,
//   favourites: PropTypes.array,
//   addToFavourite: PropTypes.func,
//   addToBasket: PropTypes.func,
// };
// CardItem.defaultProps = {
//   logo: { death },
//   title: "Назва марки",
//   color: "Колір кузова",
//   price: "Вартість авто",
//   code: "Штрих-код",
//   toggleModal: () => {
//     console.log("toggleModal");
//   },
//   favourites: () => {
//     console.log("favourites");
//   },
//   addToFavourite: () => {
//     console.log("addToFavourite");
//   },
//   addToBasket: () => {
//     console.log("addToBasket");
//   },
// };
export default FavouriteItem;
