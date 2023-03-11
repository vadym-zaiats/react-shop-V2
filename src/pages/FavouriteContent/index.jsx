import FavouriteContainer from "../../components/CardContainer";
const FavouriteContent = ({ favourites }) => {
  if (favourites.length === 0) {
    return <h1>Немає вираного</h1>;
  }
  return (
    <>
      <h1>favourites</h1>
    </>
  );
};
export default FavouriteContent;
