import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
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
  return (
    <>
      <Header basket={basket.length} favourites={favourites.length} />
      <MainContent
        products={products}
        favourites={favourites}
        addToFav={addToFav}
        addToBasket={addToBasket}
      />
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
