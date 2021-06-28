import React from "react"
import "./dishbar.scss"



const DishBar = (props) => {

  return (
    <div className="dish-cont">
    
      <div className="dish-imgsection">
        <img className="dish-img" src={props.url} alt="DishImage" />
      </div>
      <div className="dish-desc">
        <div className="dish-detail">
          <div className="dish-name">{ props.name }</div>
          <div className="dish-indg">{ props.indg }</div>
        </div>
        <div className="dish-price">{ props.price }</div>
      </div>
      <div className="dish-cat" style={ { backgroundColor: `${props.cat === 'v' ? '#2AC769' : '#FB4E4E'}`, borderColor: `${props.cat === 'v' ? '#DDF8F8' : '#FFEBEB'}` }}></div>
    </div>
  );
}

export default DishBar;