import ReactDOM from "react-dom/client";
import React, { Component, useEffect, useState } from "react";
import styles from "./main.module.scss";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
// import Basket from "./components/Basket";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favourites: [],
//       basket: [],
//       products: null,
//     };
//   }
//   componentDidMount = () => {
//     // завантаження списку авто
//     fetch("./collection.json")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({ products: res });
//       });
//     // витягуємо favourite з localStorage
//     this.setState(() => {
//       let carsFromJson = JSON.parse(localStorage.getItem("favourites"));
//       if (carsFromJson) {
//         return { favourites: carsFromJson };
//       }
//     });
//     this.setState(() => {
//       let carsFromJson = JSON.parse(localStorage.getItem("basket"));
//       if (carsFromJson) {
//         return { basket: carsFromJson };
//       }
//     });
//   };
//   render() {
//     return (
//       <>
//         <Header
//           favourites={this.state.favourites.length}
//           basket={this.state.basket.length}
//         />
//       </>
//     );
//   }
// }
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
  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <CardContainer
      products={products}
      favourites={favourites}
      addToFav={addToFav}
      addToBasket={addToBasket}
    />
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
