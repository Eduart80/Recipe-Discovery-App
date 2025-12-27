import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Pages/Home/Home'
import Category from './Pages/Category/Category'
import Favorites from './Pages/Favorites/Favorites'
import Recipe from './Pages/Recipe/Recipe'
import NotFound from './Pages/NotFound/NotFound'
import NavBar from './Components/NavBar/NavBar'

function App() {
  

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/category/:strCategory' element={<Category />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/recipe/:idMeal' element={<Recipe />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
