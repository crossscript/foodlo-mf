import React, { useState } from 'react'
import DishBar from "../DishBar/dishbar"
import './accordion.scss'





const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="accordion" style={ { backgroundColor: `${isOpen ? '#EBEBEB' : 'white'}` } }>
                <div className="accordion-item">
                    <div className="accordion-Title" onClick={ () => setIsOpen(!isOpen) }>  
                        <div>{ props.title }</div>
                        <div>{ isOpen ? '-' : '+' }</div>
                    </div>
                    {
                        isOpen && <div className="accordion-content">
                            {
                                props.content.map(value => {
                                    return (<DishBar name={ value.name } indg={ value.indg } price={ value.price } cat = {value.cat} />);
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

