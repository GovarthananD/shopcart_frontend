import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import Register from './components/register';
import Fashion from "./components/fashion";
import Mobiles from "./components/mobile";
import Laptops from "./components/laptop";
import Electronics from "./components/electronics";
import Cameras from "./components/camera";
import Books from "./components/book";
import Snacks from "./components/snacks";
import Toys from "./components/toys";
import Grooming from "./components/grooming";
import Beauty from "./components/beauty";
import Mens from "./components/men";
import Womens from "./components/women";
import ProductDetails from "./components/productdetails";
import React from 'react';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />        
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/mobiles' element={<Mobiles/>}/>
        <Route path='/laptops' element={<Laptops/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/cameras' element={<Cameras/>}/>
        <Route path='/grooming' element={<Grooming/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        <Route path='/toys' element={<Toys/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/men' element={<Mens/>}/>
        <Route path='/women' element={<Womens/>}/>
        <Route path='/women/:id' element={<ProductDetails/>} />
        <Route path='/men/:id' element={<ProductDetails/>} />
        <Route path='/mobiles/:id' element={<ProductDetails/>} />
        <Route path='/laptops/:id' element={<ProductDetails/>} />
        <Route path='/electronics/:id' element={<ProductDetails/>} />
        <Route path='/cameras/:id' element={<ProductDetails/>} />
        <Route path='/grooming/:id' element={<ProductDetails/>} />
        <Route path='/books/:id' element={<ProductDetails/>} />
        <Route path='/toys/:id' element={<ProductDetails/>} />
        <Route path='/snacks/:id' element={<ProductDetails/>} />
        <Route path='/beauty/:id' element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
