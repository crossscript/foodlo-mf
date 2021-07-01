import React from "react";
import NavBar from "./components/NavBar/nav"
import Accordion from "./components/Accordion/accordion"
import Brand from "./components/Brand/brand"
import Scrollx from './components/ScrollX/scrollx';
import { dish } from './components/data/dishdata'
import { dataHSx } from './components/data/dishHSx'
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
      <h1>Party Menu</h1> 
      <div className="scrolling">
           {
             dataHSx.map(item=>{
               return (<Scrollx cont={item.cnt} catg={item.catg} price={item.price} />)
             })
           }
        
      </div>

      
      
        

    </>
  );
}

export default App;
