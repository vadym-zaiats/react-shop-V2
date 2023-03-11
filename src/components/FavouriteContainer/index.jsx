// import PropTypes from "prop-types";
import FavouriteItem from "../FavouriteItem";
import styles from "./FavouriteContainer.module.scss";
const FavouriteContainer = ({ favourites, addToBasket, addToFav }) => {
  return (
    <>
      <ul className={styles.list}>
        {favourites.map(({ title, price, logo, code, color }) => (
          <li key={code} className={styles.item}>
            <FavouriteItem
              logo={logo}
              title={title}
              color={color}
              price={price}
              code={code}
              addToBasket={addToBasket}
              addToFav={addToFav}
              favourites={favourites}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

// FavouriteContainer.propTypes = {
//   products: PropTypes.array,
//   favourites: PropTypes.array,
//   toggleModal: PropTypes.func,
//   addToFav: PropTypes.func,
//   addToBasket: PropTypes.func,
// };
// FavouriteContainer.defaultTypes = {
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
export default FavouriteContainer;
