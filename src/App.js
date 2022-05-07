import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <NavBar/>
        <h1><a href='/'>Minecraft By Jockerel</a></h1>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
            
    </BrowserRouter>
     
    </div>
  );
}

export default App;
