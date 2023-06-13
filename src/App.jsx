import CartContextProvider from './context/CartContext';
import CartContainer from './components/CartComponents/CartContainer/CartContainer';
import Checkout from './components/CartComponents/Checkout/Checkout';
import { ItemCategoryContainer } from './container/ItemCategoryContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import {ItemListContainer} from './container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React  from 'react';
import {Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    { <CartContextProvider>
        <NavBar/>
          <Routes>
              <Route exact path='checkout'element={<Checkout/>}/>
              <Route exact path='cart'element={<CartContainer/>}/>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route exact path="category/:idCategory" element={<ItemCategoryContainer/>}/>
              <Route exact path="items/:idItem" element={<ItemDetailContainer/>}/> 
         </Routes>
      </CartContextProvider> }
    </>
  )
}

export default App;
