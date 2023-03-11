import PropTypes from "prop-types";
import BasketItem from "../BasketItem";
import styles from "./BasketContainer.module.scss";
const BasketContainer = ({ basket, addToFav, delFromBasket, favourites }) => {
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
              delFromBasket={delFromBasket}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

// BasketContainer.propTypes = {
//   products: PropTypes.array,
//   favourites: PropTypes.array,
//   toggleModal: PropTypes.func,
//   addToFav: PropTypes.func,
//   addToBasket: PropTypes.func,
// };
// BasketContainer.defaultTypes = {
//   products: [],
//   favourites: [],
//   toggleModal: () => {
//     console.log("Hello world");
//   },
//   addToFav: () => {
//     console.log("Hello world");
//   },
//   addToBasket: () => {
//     console.log("Hello world");
//   },
// };
export default BasketContainer;
