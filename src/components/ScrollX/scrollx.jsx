import React, { useState } from 'react'
import BroadBar from '../DishBroadBar/dishBB'
import './scrollx.scss'
import '../global/_global.scss'

const Scrollx = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="hscroll-cont" style={ {
                backgroundColor: `${isOpen ? '#EBEBEB' : '#f07e01'}`
            } }>
                <div className="hscroll-item">
                    
                    <div className="hscroll-Title" onClick={ () => setIsOpen(!isOpen) } style={ {
                        color: `${isOpen ? 'black' : '#EBEBEB'}`
                    } }>
                        <div className="hscroll-itemImg" style={ { display: `${isOpen ? 'none' : 'block'}` } }>
                            <img src="/images/ct1.png" className="ct-imges" alt="Broad Category Item" />
                        </div>
                        <div className="hscroll-detail">
                        <div>{props.bun}</div>
                        <div className="hscroll-price" style={ {
                            color: `${isOpen ? 'black' : 'white'}`
                        } }>{ props.price }</div>
                        <div>{ isOpen ? '-' : '+' }</div>
                        </div>
                    </div>
                    {
                        isOpen && <div className="hscroll-content">
                            <BroadBar data={ props.cont } catg={ props.catg } price={ props.price } />
                        </div>
                    }
                </div>
            </div>
        </>
    );
};


export default Scrollx
