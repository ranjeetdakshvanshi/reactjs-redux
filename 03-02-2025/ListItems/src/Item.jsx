import styles from './item.modul.css'
const Item = ({ FoodItems }) => {
  return (
    <>
          <li  className=" list-group-item">{ FoodItems }</li>
    </>
  );
};
export default Item;
v