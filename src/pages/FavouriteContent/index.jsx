import FavouriteContainer from "../../components/FavouriteContainer";
const FavouriteContent = ({ favourites, addToBasket, addToFav }) => {
  if (favourites.length === 0) {
    return <h1>Немає вираного</h1>;
  }
  return (
    <>
      <FavouriteContainer
        favourites={favourites}
        addToBasket={addToBasket}
        addToFav={addToFav}
      />
    </>
  );
};
export default FavouriteContent;
