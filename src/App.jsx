import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import CategoriesPage from './pages/CategoriesPage'
import CategoryDetail from './pages/CategoryDetail'

function App() {

  return <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/categories' element={<CategoriesPage/>}/>
      <Route path='/categories/:id' element={<CategoryDetail/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>

    <h1>Footer</h1>
  </>
}

export default App