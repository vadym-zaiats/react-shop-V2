import React from "react";
import PropTypes from "prop-types";
import basketIco from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import home from "../../img/home.svg";
import styles from "./Button.module.scss";
import { Link, Outlet } from "react-router-dom";
const Header = ({ basketLength, favouritesLength }) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src={home} alt="favourite" />
        </Link>
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
      </header>
      <Outlet />
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
