import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; import './App.css'
import Home from './Home';
import About from './About';
import Collection from './Collection/Collection';
import Flashcard from './Collection/Flashcard';
import CreateFlashcard from './Collection/CreateFlashcard';
import Shop from './Shop/ShopList';
import Login from './auth/Login';
import Register from './auth/Register';
import ProtectedRoute from './ProtectedRotute';
import { AuthProvider } from './Providers/AuthProvider';
import ShoppingCart from './Shop/ShoppingCartList';
import { CartProvider } from './Providers/CartProvider';
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>

              <Route path="/about" element={<About />} />
              <Route path="/collection" element={<Collection />}></Route>
              <Route path="/create-flashcard" element={<CreateFlashcard />}></Route>
              <Route path="/collection/:id/:title" element={<Flashcard></Flashcard>}></Route>
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<ShoppingCart/>}/>
            </Route>
          </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
     
    </>
  )

}

export default App
