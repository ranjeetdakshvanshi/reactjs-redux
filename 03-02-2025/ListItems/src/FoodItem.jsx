import Item from "./Item";
const FoodItem = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} FoodItems={item} />
        ))}
      </ul>
    </>
  );
};
export default FoodItem;
