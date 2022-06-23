import React, {useState} from 'react';

function RecipeFeed({recipes, setGrocery, grocery}) {

  const [currIdx1, setCurrIdx1] = useState(0);
  const [currIdx2, setCurrIdx2] = useState(0);
  const [currIdx3, setCurrIdx3] = useState(0);

  const recipeIndex = recipes.length / 3;

  const addGroceries = (recipeTitle, recipeIngredient) => {
    const title = recipeTitle;
    const ingredients = recipeIngredient;
    const groceryObj = {};
    groceryObj[title] = ingredients;

    setGrocery(prevState => {
      return [...prevState, groceryObj]
    })
  }

  return(
    <div className="row recipe-feed">

      <div className="col-sm">
        {recipes.length && recipes.slice(0, recipeIndex).map((recipe, index) => (
          <div className="card" style={{"width": "18rem"}} data-bs-toggle="modal" data-bs-target={`#recipe1${index}`}>
            <img src={recipe.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
            </div>

            <div className="modal fade" id={`recipe1${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{recipe.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <h2>Steps</h2>
                      {recipe.steps.split('.').map((steps) => (
                        <ul>
                          {steps.length > 0 ? <li>{steps}</li> : <></>}
                        </ul>
                      ))}
                    </div>
                    <div>
                      <h2>Ingredients</h2>
                      {recipe.ingredients.split(',').map((ingredient) => (
                        <ul>
                          <li>{ingredient}</li>
                        </ul>
                      ))}
                    </div>
                    <a href={recipe.url}>{recipe.url}</a>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => {addGroceries(recipe.title, recipe.ingredients.split(','))}}>Add To Grocery</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-sm">
        {recipes.length && recipes.slice(recipeIndex, recipeIndex + recipeIndex).map((recipe, index) => (
          <div className="card" style={{"width": "18rem"}} data-bs-toggle="modal" data-bs-target={`#recipe2${index}`}>
            <img src={recipe.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
            </div>

            <div className="modal fade" id={`recipe2${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{recipe.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <h2>Steps</h2>
                      {recipe.steps.split('.').map((steps) => (
                        <ul>
                          {steps.length > 0 ? <li>{steps}</li> : <></>}
                        </ul>
                      ))}
                    </div>
                    <div>
                      <h2>Ingredients</h2>
                      {recipe.ingredients.split(',').map((ingredient) => (
                        <ul>
                          <li>{ingredient}</li>
                        </ul>
                      ))}
                    </div>
                    <a href={recipe.url}>{recipe.url}</a>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => {addGroceries(recipe.title, recipe.ingredients.split(','))}}>Add To Grocery</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="col-sm">
        {recipes.length && recipes.slice(recipeIndex + recipeIndex).map((recipe, index) => (
          <div className="card" style={{"width": "18rem"}} data-bs-toggle="modal" data-bs-target={`#recipe3${index}`}>
            <img src={recipe.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
            </div>

            <div className="modal fade" id={`recipe3${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{recipe.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <h2>Steps</h2>
                      {recipe.steps.split('.').map((steps) => (
                        <ul>
                          {steps.length > 0 ? <li>{steps}</li> : <></>}
                        </ul>
                      ))}
                    </div>
                    <div>
                      <h2>Ingredients</h2>
                      {recipe.ingredients.split(',').map((ingredient) => (
                        <ul>
                          <li>{ingredient}</li>
                        </ul>
                      ))}
                    </div>
                    <a href={recipe.url}>{recipe.url}</a>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => {addGroceries(recipe.title, recipe.ingredients.split(','))}}>Add To Grocery</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default RecipeFeed;