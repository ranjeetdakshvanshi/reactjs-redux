import "./App.css";
import FoodItem from "./FoodItem";
import ErrorMassage from "./ErrorMassage";
function App() {
  let ItemList = ["Dal", "Ghee", "Salad","Milk","Green Vegetable"];
   return (
     <>
       <div class="main-container">
         <h3>Healthy Food List</h3>
         <ErrorMassage items={ItemList} />
         <FoodItem items={ItemList} />
       </div>
     </>
   );
}
export default App;
