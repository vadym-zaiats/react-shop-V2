import { useEffect, useState } from "react";
const BasketContent = () => {
  return <h1>BasketContent</h1>;
  // const [products, fetchProducts] = useState(null);
  // const [basket, getBasket] = useState([]);

  // useEffect(() => {
  //   // fetch
  //   fetch("./collection.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       fetchProducts(res);
  //     });
  //   if (localStorage.getItem("favourites")) {
  //     getFavourites(JSON.parse(localStorage.getItem("favourites")));
  //   }
  //   if (localStorage.getItem("basket")) {
  //     getBasket(JSON.parse(localStorage.getItem("basket")));
  //   }
  // }, []);

  // return (
  //   <>
  //     <Header
  //       basketLength={basket.length}
  //       favouritesLength={favourites.length}
  //       products={products}
  //       favourites={favourites}
  //       addToFav={addToFav}
  //       addToBasket={addToBasket}
  //     />
  //   </>
  // );
};
export default BasketContent;
