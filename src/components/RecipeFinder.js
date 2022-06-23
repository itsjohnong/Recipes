import React from 'react';

function RecipeFinder() {
  return (
    <form className="recipe-finder">
      <h3>Filter</h3>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Recipe</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Ingredients</label>
        <input type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default RecipeFinder;