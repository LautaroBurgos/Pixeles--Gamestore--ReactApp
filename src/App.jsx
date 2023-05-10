import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';

import {BrowserRouter ,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemCategoryContainer from './container/ItemCategoryContainer';
function App() {

  return (
    <>
      <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Pixeles-Gamestore"}/>}/>
        <Route exact path="category/:idCategoria" element={<ItemCategoryContainer/>}/>
        <Route exact path="items/:idItem/" element={<ItemDetailContainer/>}/>
      </Routes>
    </>
   
    

    
    

  );
}

export default App;
