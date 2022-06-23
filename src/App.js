import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import RecipeFinder from './components/RecipeFinder';
import DiscoverFeed from './components/DiscoverFeed';
import RecipeFeed from './components/RecipeFeed';
import Grocery from './components/Grocery';
import RecipeHeader from './components/RecipeHeader';

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
        <Routes>
          <Route exact path="/" element={<Navbar />} />
        </Routes>
        {/* <Navbar /> */}
        {/* <DiscoverFeed recipes={recipes} setGrocery={setGrocery} grocery={grocery} /> */}
        <div className="recipe-group">
          <div className="left-recipe">
            <Routes>
              <Route exact path="/" element={<RecipeHeader />} />
            </Routes>
            <Routes>
              <Route exact path="/" element={<RecipeFinder recipes={recipes} />} />
            </Routes>
              {/* <RecipeHeader />
              <RecipeFinder recipes={recipes} /> */}
          </div>
          <Routes>
            {/* <RecipeFeed recipes={recipes} setGrocery={setGrocery} grocery={grocery} /> */}
            <Route exact path="/" element={<RecipeFeed recipes={recipes} setGrocery={setGrocery} grocery={grocery} />} />
          </Routes>
        </div>
        <Routes>
          <Route exact path="/grocery" element={<Grocery grocery={grocery} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
