import React, {useState} from 'react';

function DiscoverFeed({ recipes=[], setGrocery, grocery }) {

  const [currIdx, setCurrIdx] = useState(0);
  const [modal, setModal] = useState(false);

  const onClickHandlerRight = () => {
    if (currIdx === recipes.length - 1) {
      setCurrIdx(0)
    } else {
      setCurrIdx(currIdx + 1)
    }
  };

  const onClickHandlerLeft = () => {
    if (currIdx === 0) {
      setCurrIdx(recipes.length - 1)
    } else {
      setCurrIdx(currIdx - 1)
    }
  };

  const onClickHandler = () => {
    setModal(modal === true ? false : true)
  }

  const addGroceries = () => {
    const title = recipes[currIdx].title;
    const ingredients = recipes[currIdx].ingredients.split(',');
    const groceryObj = {};
    groceryObj[title] = ingredients;

    setGrocery(prevState => {
      return [...prevState, groceryObj]
    })
  }

  return (
    <div id="carouselExampleInterval" className="carousel slide mx-auto" data-bs-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active" onClick={onClickHandler} data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div className="recipe-container">
            <h2>{recipes.length && recipes[currIdx].title}</h2>
            <div className="img-wrapper">
              <img src={recipes.length && recipes[currIdx].imageUrl} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" onClick={onClickHandlerLeft}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" onClick={onClickHandlerRight}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{recipes.length && recipes[currIdx].title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <h2>Steps</h2>
                {recipes.length && recipes[currIdx].steps.split('.').map((steps) => (
                  <ul>
                    {steps.length > 0 ? <li>{steps}</li> : <></>}
                  </ul>
                ))}
              </div>
              <div>
                <h2>Ingredients</h2>
                {recipes.length && recipes[currIdx].ingredients.split(',').map((ingredient) => (
                  <ul>
                    <li>{ingredient}</li>
                  </ul>
                ))}
              </div>
              <a href={recipes.length && recipes[currIdx].url}>{recipes.length && recipes[currIdx].url}</a>
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

export default DiscoverFeed;
