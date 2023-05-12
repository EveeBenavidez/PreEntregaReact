
import Mensaje from "./components/Mensaje/Mensaje";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Menu from "./components/Menu/Menu";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Formulario from './components/Formulario/Formulario'

// Importamos componentes de router :
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Man from "./components/Man/Man";
import Woman from "./components/Woman/Woman";
import Selection from "./components/Selection/Selection";

//importamos componentes de renderizado


function App() {
  return (
  <body>
      <>
       <BrowserRouter>
        <CarritoProvider>
        <Menu/>
        <Mensaje />
         <Routes> 
           <Route path='/' element={ <ItemListContainer/> }/>
           <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
           <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
           <Route path='/Man' element={ <Man/> }/>
           <Route path='/Woman' element={ <Woman/> }/>
           <Route path='/Selection' element={ <Selection/> }/>
           <Route path="/cart" element= { <Cart/> }/>
           <Route path="*" element= { <h2> En construccion </h2> }/>
        </Routes>
        <Formulario />
        </CarritoProvider>
       </BrowserRouter>
       </>
  </body>
  );
}

export default App;
