import React from 'react';

function RecipeFeed({recipes, setGrocery, grocery}) {

  const addGroceries = () => {
    const title = recipes[0].title;
    const ingredients = recipes[0].ingredients;
    const groceryObj = {};
    groceryObj[title] = ingredients;

    setGrocery(prevState => {
      return [...prevState, groceryObj]
    })
  }

  return(
    <div className="row recipe-feed">

      <div className="col-sm-6">
        {recipes.length && recipes.slice(0, recipes.length / 2).map((recipe) => (
          <div className="card" style={{"width": "18rem"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={recipe.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="col-sm-6">
        {recipes.length && recipes.slice(recipes.length / 2).map((recipe) => (
          <div className="card" style={{"width": "18rem"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={recipe.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{recipes.length && recipes[0].title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <h2>Steps</h2>
                {recipes.length && recipes[0].steps.split('.').map((steps) => (
                  <ul>
                    {steps.length > 0 ? <li>{steps}</li> : <></>}
                  </ul>
                ))}
              </div>
              <div>
                <h2>Ingredients</h2>
                {recipes.length && recipes[0].ingredients.split(',').map((ingredient) => (
                  <ul>
                    <li>{ingredient}</li>
                  </ul>
                ))}
              </div>
              <a href={recipes.length && recipes[0].url}>{recipes.length && recipes[0].url}</a>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={addGroceries}>Add To Grocery</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RecipeFeed;