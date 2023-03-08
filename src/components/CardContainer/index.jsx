import React, { Component } from "react";
import PropTypes from "prop-types";
import CardItem from "../CardItem";
import styles from "./CardContainer.module.scss";
const CardContainer = ({ products, favourites, addToFav, addToBasket }) => {
  return (
    <>
      <ul className={styles.list}>
        {products.map(({ name, price, picture, barcode, color }) => (
          <li key={barcode} className={styles.item}>
            <CardItem
              logo={picture}
              title={name}
              color={color}
              price={price}
              code={barcode}
              favourites={favourites}
              addToFavourite={addToFav}
              addToBasket={addToBasket}
              // toggleModal={toggleModal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

// CardContainer.propTypes = {
//   products: PropTypes.array,
//   favourites: PropTypes.array,
//   toggleModal: PropTypes.func,
//   addToFav: PropTypes.func,
//   addToBasket: PropTypes.func,
// };
// CardContainer.defaultTypes = {
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
export default CardContainer;
