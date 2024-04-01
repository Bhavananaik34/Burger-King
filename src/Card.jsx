import React from "react";
import "./style.css"
let Card = (props) =>
{
    return (
        <>
        <div className="card">
            <img src={props.imagesrc} alt="image1" />
            <div className="card-body">
                <h2>{props.head}</h2>
                <p>{props.para}</p>
                <h3>{props.price}</h3>
                <button>{props.button}</button>
        </div>
            </div>
      </>
    )
}
export default Card