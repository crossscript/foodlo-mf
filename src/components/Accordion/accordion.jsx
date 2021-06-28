import React, { useState } from 'react'
import DishBar from "../DishBar/dishbar"
import './accordion.scss'
import '../global/_global.scss'





const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="accordion" style={ {
                backgroundColor: `${isOpen ? '#EBEBEB' : '#2AC769'}`}}>
                <div className="accordion-itemImg" style={ { display: `${ isOpen ? 'none' : 'flex'}` }}>
                        <img src="/images/ct1.png" className="ct-img" alt="Broad Category Item" />
                </div>
                <div className="accordion-item">
                    <div className="accordion-Title" onClick={ () => setIsOpen(!isOpen)}  style={ {
                        color: `${isOpen ? 'black' : '#EBEBEB'}`
                    } }>
                        <div>{ props.title }</div>
                        <div>{ isOpen ? '-' : '+' }</div>
                    </div>
                    {
                        isOpen && <div className="accordion-content">
                            {
                                props.content.map(value => {
                                    return (<DishBar name={ value.name } indg={ value.indg } price={ value.price } cat = {value.cat} url={value.url} />);
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Accordion;

