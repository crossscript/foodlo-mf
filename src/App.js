import React from "react";
import NavBar from "./components/NavBar/nav"
import Accordion from "./components/Accordion/accordion"
import Brand from "./components/Brand/brand"
import Scrollx from './components/ScrollX/scrollx';
import { dish } from './components/data/dishdata'
import { dataHSx } from './components/data/dishHSx'
import Footer from './components/Footer/footer'
import "./App.scss";



function App() {
  // const[dishdata, setDishData] =useState({dish});

  // const dish = [{'name': 'Bread', 'indg': 'Green Chillies & Mustard Suace', 'price': '₹50'}]
  return (
    <>
      <NavBar />
      <Brand />
       <div  className="dish-section">

      <div className="greeting-txt">Hi! <br />What's in your mind?</div>
      
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
               return (<Scrollx  bun={item.bun} cont={item.cnt} catg={item.catg} price={item.price} />)
             })
           }
        
      
      </div>
      <div className="signoff-cont">
        <div className="quote-cont">
        <div className="quote-content">Food is symbolic of love<br /> when words are inadueqate</div>
        <div className="quote-writer">~Alan D. Wolfelt</div>
        </div>
        <div className="thank">Thanking You!</div>
        <div className="req-txt">We'll love to hear from you about us.</div>
      </div>
      </div>
      
        <Footer />
</>
    
  );
}

export default App;
