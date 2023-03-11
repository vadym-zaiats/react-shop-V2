// import PropTypes from "prop-types";
import styles from "./FavouriteItem.module.scss";

const FavouriteItem = ({ logo, title, color, price, code }) => {
  return (
    <>
      <img className={styles.size} src={logo} alt="logo" />
      <p>Brand: {title}</p>
      <p>Color: {color}</p>
      <p>Price: {price}$</p>
      <p>Barcode: {code}</p>
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
