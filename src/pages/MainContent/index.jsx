import CardContainer from "../../components/CardContainer";

const MainContent = ({ products, favourites, addToFav, addToBasket }) => {
  return (
    <CardContainer
      products={products}
      favourites={favourites}
      addToFav={addToFav}
      addToBasket={addToBasket}
    />
  );
};

export default MainContent;
