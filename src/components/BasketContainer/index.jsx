import PropTypes from "prop-types";
import BasketItem from "../BasketItem";
import styles from "./BasketContainer.module.scss";
const BasketContainer = ({ basket, addToFav, favourites, addToBasket }) => {
  return (
    <>
      <ul className={styles.list}>
        {basket.map(({ title, price, logo, code, color }) => (
          <li key={code} className={styles.item}>
            <BasketItem
              logo={logo}
              title={title}
              color={color}
              price={price}
              code={code}
              favourites={favourites}
              addToFavourite={addToFav}
              addToBasket={addToBasket}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

BasketContainer.propTypes = {
  favourites: PropTypes.array,
  basket: PropTypes.array,
  addToFav: PropTypes.func,
};
BasketContainer.defaultTypes = {
  basket: [],
  favourites: [],
  addToFav: () => {
    console.log("addToFav");
  },
};
export default BasketContainer;
