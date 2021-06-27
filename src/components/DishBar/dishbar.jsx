import React from "react"
import "./dishbar.scss"

const DishBar = (props) => {

  return (
    <div className="dish-cont">
      <div className="dish-imgsection">
        <img className="dish-img" src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="DishImage" />
      </div>
      <div className="dish-desc">
        <div className="dish-detail">
          <div className="dish-name">{ props.name }</div>
          <div className="dish-indg">{ props.indg }</div>
        </div>
        <div className="dish-price">{ props.price }</div>
      </div>

    </div>
  );
}

export default DishBar;