import React from 'react'
import './Card.css'

export default function Card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);




  return (
    <div>
      <div>
        <div className="card mt-3 cardstyle">
          <img src={props.imgSrc} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
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
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="Price">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
