import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/Card/ProductCard/ProductCard";
import ItemCounter from "./components/ItemCounter/ItemCounter";
import Mensaje from "./components/Mensaje/Mensaje";
import Categorias from "./components/Categorias/Categorias";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import JsonPlaceHolder from "./components/Fetch/JsonPlaceHolder";
import Menu from "./components/Menu/Menu";

// Importamos componentes de router :
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Man from "./components/Man/Man";
import Woman from "./components/Woman/Woman";
import Selection from "./components/Selection/Selection";

//importamos componentes de renderizado


function App() {
  return (
    <>
      
       
       <BrowserRouter>
        <Menu/>
        <Mensaje />
         <Routes> 
           <Route path='/' element={ <ItemListContainer/> }/>
           <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
           <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
           <Route path='/Man' element={ <Man/> }/>
           <Route path='/Woman' element={ <Woman/> }/>
           <Route path='/Selection' element={ <Selection/> }/>
        </Routes>

       </BrowserRouter>
       {/* <NavBar/>  */}
       {/* <ProductCard />  */}
       <Mensaje />
       {/* <Categorias /> */}
       {/* <JsonPlaceHolder /> */}
    
    </>
    
  );
}

export default App;
