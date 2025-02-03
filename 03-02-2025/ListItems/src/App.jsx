import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
   let itemlist=["Dal", "Salad","roti","milk" ,"ghee"];
  
  return (
    <>
      <h1>HEALTHY FOOD</h1>
       ({itemlist.length==0})
      <ul className="list-group">
         {itemlist.map((item)=>(<li key={item}  className="list-group-item">{item}</li>))}
      </ul>
    </>
  );
}

export default App;
