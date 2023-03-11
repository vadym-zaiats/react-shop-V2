import FavouriteContainer from "../../components/FavouriteContainer";
const FavouriteContent = ({ favourites }) => {
  if (favourites.length === 0) {
    return <h1>Немає вираного</h1>;
  }
  return (
    <>
      <FavouriteContainer favourites={favourites} />
    </>
  );
};
export default FavouriteContent;
