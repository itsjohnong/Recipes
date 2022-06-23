import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import RecipeFinder from './components/RecipeFinder';
import DiscoverFeed from './components/DiscoverFeed';
import RecipeFeed from './components/RecipeFeed';
import Grocery from './components/Grocery';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then((res) => {
        console.log(res)
        setRecipes(res.data);
      })
      .catch((err) => { console.log(err); })
  }, [])

  return (
    <BrowserRouter>
        {console.log(recipes)}
        {console.log('state', grocery)}
        {/* <Route path="/" element={<Navbar />} /> */}
        <Navbar />
        {/* <DiscoverFeed recipes={recipes} setGrocery={setGrocery} grocery={grocery} /> */}
        <div className="recipe-group">
          <RecipeFinder recipes={recipes} />
          <RecipeFeed recipes={recipes} setGrocery={setGrocery} grocery={grocery} />
          {/* <Route path="/" element={<RecipeFinder recipes={recipes} />} />
          <Route path="/" element={<RecipeFeed recipes={recipes} setGrocery={setGrocery} grocery={grocery} />} /> */}
        </div>
      <Routes>
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
