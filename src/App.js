import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListConteiner/ItemListContainer";
import ProductCard from "./components/Card/ProductCard/ProductCard";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Welcome"/>
    <ProductCard />
    </>
    
  );
}

export default App;
