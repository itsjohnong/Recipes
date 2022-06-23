import React from 'react';
import { Link } from "react-router-dom";

function Grocery({ grocery }) {

  return (
    <div>
      {grocery.length ?
          <div className="grocery-list">
            <div class="card">
              <h2 className="grocery-title">Grocery List</h2>
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
              <Link type="button" class="btn btn-primary" to="/">Home</Link>
            </div>
          </div>
          :
          <div className="grocery-list">
            <div class="card">
              <div class="card-body">
                Grocery List Empty
              </div>
              <Link type="button" class="btn btn-primary" to="/">Home</Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Grocery;