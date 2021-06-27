import React from "react";
import NavBar from "./components/NavBar/nav"
import Accordion from "./components/Accordion/accordion"
import Brand from "./components/Brand/brand"
import { dish } from './components/data/dishdata'
import "./App.css";


function App() {
  // const[dishdata, setDishData] =useState({dish});

  // const dish = [{'name': 'Bread', 'indg': 'Green Chillies & Mustard Suace', 'price': '₹50'}]
  return (
    <>
      <NavBar />
      <Brand />
      
      <div className="dish-list">
        {
          dish.map(value => {
            return (<Accordion title={value.title} content={value.content} />);
          })
        }
      
      </div>
      
        

    </>
  );
}

export default App;
