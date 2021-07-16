import React from 'react'
import './sicon.scss'

const Sicon = (props) => {
    return(
        <>
        <div className="social-icon">
            <a href={props.link}>
           <img className="sicon"src={props.url} alt={props.alt} />
                </a>
            </div>
        </>
    );
}

export default Sicon;