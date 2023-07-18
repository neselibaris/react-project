import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav';
import Home from './component/home';
import Detail from './component/detail';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  // Tarifleri eklemek ve diğer işlemleri gerçekleştirmek için gerekli fonksiyonlar...

  return (
    <Router>
      <div className='container'>
        <Nav />
        <Routes>
        <Route exact path="/" element={<Home recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/detail/:id" element={<Detail recipes={recipes} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;