import React from 'react'
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Products from './pages/Products';
import FilterProduct from './pages/FilterProduct';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/category'element={<Category/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/products'element={<Products/>}/>
      <Route path='/Home' element={<Products/>}/>
      <Route path='/Beauty-products/:beautyname'element={<FilterProduct/>}/>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
