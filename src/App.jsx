import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './container/ItemListContainer';
import './App.css';
import React  from 'react';
import {Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemCategoryContainer from './container/ItemCategoryContainer';
import CartContextProvider from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
function App() {
  return (
    <>
    <CartContextProvider>
        <NavBar/>
        
          <Routes>
              <Route exact path='cart'element={<CartContainer/>}/>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route exact path="category/:idCategory" element={<ItemCategoryContainer/>}/>
              <Route exact path="items/:idItem" element={<ItemDetailContainer/>}/>
           
         </Routes>
      </CartContextProvider>
    </>
  )
}

export default App;
