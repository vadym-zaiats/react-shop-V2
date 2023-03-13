import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BasketContent from "./pages/BasketContent";
import FavouriteContent from "./pages/FavouriteContent";
import MainContent from "./pages/MainContent";
import Header from "./components/Header";
const App = () => {
  const [products, fetchProducts] = useState(null);
  const [favourites, getFavourites] = useState([]);
  const [basket, getBasket] = useState([]);

  useEffect(() => {
    // fetch
    fetch("./collection.json")
      .then((res) => res.json())
      .then((res) => {
        fetchProducts(res);
      });
    if (localStorage.getItem("favourites")) {
      getFavourites(JSON.parse(localStorage.getItem("favourites")));
    }
    if (localStorage.getItem("basket")) {
      getBasket(JSON.parse(localStorage.getItem("basket")));
    }
  }, []);

  const addToFav = (card) => {
    let allFavCars = [...favourites];
    for (let car of allFavCars) {
      if (car.code === card.code) {
        localStorage.setItem(
          "favourites",
          JSON.stringify(allFavCars.filter((el) => el.code !== card.code))
        );
        return getFavourites(allFavCars.filter((el) => el.code !== card.code));
      }
    }
    allFavCars.push(card);
    localStorage.setItem("favourites", JSON.stringify(allFavCars));
    return getFavourites(allFavCars);
  };
  const addToBasket = (card) => {
    let allCarsInBasket = [...basket];
    for (let car of allCarsInBasket) {
      if (car.code === card.code) {
        return alert("Авто вже у корзині");
      }
    }
    allCarsInBasket.push(card);
    localStorage.setItem("basket", JSON.stringify(allCarsInBasket));
    return getBasket(allCarsInBasket);
  };
  const delFromBasket = (card) => {
    let allCarsInBasket = [...basket];
    for (let car of allCarsInBasket) {
      if (car.code === card.code) {
        localStorage.setItem(
          "basket",
          JSON.stringify(allCarsInBasket.filter((el) => el.code !== card.code))
        );
        return getBasket(allCarsInBasket.filter((el) => el.code !== card.code));
      }
    }
    allCarsInBasket.push(card);
    localStorage.setItem("basket", JSON.stringify(allCarsInBasket));
    return getBasket(allCarsInBasket);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              basketLength={basket.length}
              favouritesLength={favourites.length}
              products={products}
              favourites={favourites}
              basket={basket}
              addToFav={addToFav}
              addToBasket={addToBasket}
              delFromBasket={delFromBasket}
            />
          }
        >
          <Route path="home" element={<Navigate to="/" />}></Route>
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
          <Route
            path="basket"
            element={
              <BasketContent
                basket={basket}
                addToFav={addToFav}
                favourites={favourites}
                delFromBasket={delFromBasket}
              />
            }
          ></Route>
          <Route
            path="favourite"
            element={
              <FavouriteContent
                favourites={favourites}
                addToBasket={addToBasket}
                addToFav={addToFav}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
