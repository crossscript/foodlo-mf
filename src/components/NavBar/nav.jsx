import React from "react"
import "./nav.scss"

const NavBar = (props) => {

    return (
        <div className="nav-cont">
            <div className="dish-brand">
                <div className="brand-name"><img src='./brand/foodW.png' className="foodlo-logo" alt="Foodlo Logo"/><sup className="td-mrk">TM</sup></div>
            </div>
        </div>
    );
}

export default NavBar;