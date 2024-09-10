import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import CategoriesPage from './pages/CategoriesPage'
import CategoryDetail from './pages/CategoryDetail'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import JsxEvents from './jsxSample/JsxEvents'
import StateSample from './state/StateSample'
import StateArraySample from './state/StateArraySample'
import StateIfElseSample from './state/StateIfElseSample'
import StateObjectArraySample from './state/StateObjectArraySample'
import StateInputSample from './state/StateInputSample'
import NameArraySample from './state/NameArraySample'
import ColorDivSample from './state/ColorDivSample'
import CelciusToFahrenayt from './state/CelciusToFahrenayt'

function App() {

  return <CelciusToFahrenayt/>

  return <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/products">Products</Link></li>

    </ul>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/categories' element={<CategoriesPage/>}/>
      <Route path='/categories/:id' element={<CategoryDetail/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/products/:id' element={<ProductDetail/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>

    <h1>Footer</h1>
  </>
}

export default App