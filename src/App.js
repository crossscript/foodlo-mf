import React from "react";
import DishBar from "./components/DishBar/dishbar"
import NavBar from "./components/NavBar/nav"
import { dish } from './data/dishdata'
import "./App.css";

function App() {

  // const dish = [{'name': 'Bread', 'indg': 'Green Chillies & Mustard Suace', 'price': '₹50'}]
  return (
    <>
      <NavBar />
      <div className="dish-list">
        {
          dish.map(value => {
            return (<DishBar name={ value.name } indg={ value.indg } price={ value.price } />);
          })
        }
      </div>


    </>
  );
}

export default App;
