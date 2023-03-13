import React from "react";
import PropTypes from "prop-types";
import basketIco from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import home from "../../img/home.svg";
import styles from "./Button.module.scss";
import { NavLink, Outlet } from "react-router-dom";
const Header = ({ basketLength, favouritesLength }) => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/home">
          <img src={home} alt="favourite" />
        </NavLink>
        <div className={styles.header_favourite}>
          <div>{favouritesLength}</div>
          <NavLink to="/favourite">
            <img src={favourite} alt="favourite" />
          </NavLink>
        </div>
        <div className={styles.header_basket}>
          <div>{basketLength}</div>
          <NavLink to="/basket">
            <img src={basketIco} alt="basket" />
          </NavLink>
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
