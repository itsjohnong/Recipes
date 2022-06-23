import React from 'react';

function Grocery({ grocery }) {

  return (
    <div className="grocery-list">
      <div class="card" style={{"width": "18rem"}}>
        {grocery.length && grocery.map((item) => (
          <div class="card-body">
              <h5 class="card-title">{Object.keys(item)}</h5>
              {console.log(Object.values(item))}
                <ul>
                  {Object.values(item)[0].map((ingredient) => (
                      <li class="card-text">{ingredient}</li>
                      ))}
                </ul>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Grocery;