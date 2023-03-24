import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div>
      <div>
        <div className="card mt-3 cardstyle">
          <img src="https://source.unsplash.com/random/500x400/?pastry" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is important text</p>
            <div className="container">
              <select className="m-2 h-100 bg-warning rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-warning rounded">
                <option key={1} value="half">
                  Half
                </option>
                <option key={2} value="full">
                  Full
                </option>
              </select>

              <div className="Price">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
