import React from "react";
import PropTypes from "prop-types";
import basketIco from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import styles from "./Button.module.scss";
import { Routes, Route } from "react-router-dom";
import BasketContent from "../../pages/BasketContent";
import FavouriteContent from "../../pages/FavouriteContent";
import MainContent from "../../pages/MainContent";
const Header = ({
  basketLength,
  favouritesLength,
  products,
  favourites,
  addToFav,
  addToBasket,
}) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_favourite}>
          <div>{favouritesLength}</div>
          <a href="/favourite">
            <img src={favourite} alt="favourite" />
          </a>
        </div>
        <div className={styles.header_basket}>
          <div>{basketLength}</div>
          <a href="/basket">
            <img src={basketIco} alt="basket" />
          </a>
        </div>
      </div>
      <Routes>
        <Route
          index
          element={
            <MainContent
              products={products}
              favourites={favourites}
              addToFav={addToFav}
              addToBasket={addToBasket}
            />
          }
        ></Route>
        <Route path="/basket" element={<BasketContent />}></Route>
        <Route path="/favourite" element={<FavouriteContent />}></Route>
      </Routes>
    </>
  );
};

Header.propTypes = {
  favourites: PropTypes.number,
  basket: PropTypes.number,
};
Header.defaultProps = {
  favourites: null,
  basket: null,
};
export default Header;
