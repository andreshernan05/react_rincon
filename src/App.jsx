import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';

function App(){
  return(<>
  <header className="container-fluid header">
  <NavBar/>
  </header>
  <body>
  <ItemListContainer greeting={"Bienvenidos al Rincon Del Coleccionista! 🚗🚙"}/>
  </body>
  

  </>)
}
export default App;