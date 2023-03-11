import React from "react";
import PropTypes from "prop-types";
import basketIco from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import styles from "./Button.module.scss";
import { Routes, Route, Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <div className={styles.header_favourite}>
          <div>{favouritesLength}</div>
          <Link to="/favourite">
            <img src={favourite} alt="favourite" />
          </Link>
        </div>
        <div className={styles.header_basket}>
          <div>{basketLength}</div>
          <Link to="/basket">
            <img src={basketIco} alt="basket" />
          </Link>
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
        <Route
          path="/favourite"
          element={<FavouriteContent favourites={favourites} />}
        ></Route>
      </Routes>
    </>
  );
};

Header.propTypes = {
  favourites: PropTypes.array,
};
Header.defaultProps = {
  favourites: null,
};
export default Header;
