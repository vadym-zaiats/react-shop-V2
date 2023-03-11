import BasketContainer from "../../components/BasketContainer";
const BasketContent = ({ basket, delFromBasket, addToFav, favourites }) => {
  if (basket.length === 0) {
    return <h1>Немає вираного</h1>;
  }
  return (
    <>
      <BasketContainer
        basket={basket}
        delFromBasket={delFromBasket}
        addToFav={addToFav}
        favourites={favourites}
      />
    </>
  );
};
export default BasketContent;
