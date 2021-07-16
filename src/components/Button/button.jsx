import React from 'react'
import './button.scss'

const Button = ( ) => {
    return(
        <>
        <div className="btn-cont">
            <div className="btn-solid">
                <div className="btn-wrapper">
                    <div className="icon-section"><img  src="./icon/google.svg" className="btn-icon" alt="btn"/></div>
                        <div className="link-section"><a id="link-txt" href="https://g.page/r/CeWM27LX9WU4EAg/review">Review</a></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Button;