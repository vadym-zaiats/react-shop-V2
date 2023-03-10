import React from "react";
import PropTypes from "prop-types";
import basketIco from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import styles from "./Button.module.scss";

const Header = ({ basket, favourites }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_favourite}>
        <div>{favourites}</div>
        <a href="/favourite">
          <img src={favourite} alt="favourite" />
        </a>
      </div>
      <div className={styles.header_basket}>
        <div>{basket}</div>
        <a href="/basket">
          <img src={basketIco} alt="basket" />
        </a>
      </div>
    </div>
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
