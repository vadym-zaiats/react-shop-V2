import BasketContainer from "../../components/BasketContainer";
const BasketContent = ({ basket, addToFav, favourites, delFromBasket }) => {
  if (basket.length === 0) {
    return <h1>Немає вираного</h1>;
  }
  return (
    <>
      <BasketContainer
        basket={basket}
        addToFav={addToFav}
        favourites={favourites}
        delFromBasket={delFromBasket}
      />
    </>
  );
};
export default BasketContent;
