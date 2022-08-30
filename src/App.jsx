import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer} from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/Provider'



function App() {
  let nombreUsuario= 'Coder'
  return (
    
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={nombreUsuario}/>}/>
        <Route path='/category/:id' element={<ItemListContainer greeting={nombreUsuario}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
