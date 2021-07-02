import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <>
        <div className="footer-cont">
            <div className="footer-detail">
            <div className="left-ft">
                    <div className="brand-con">
                        <div className="prod-logo">
                            <img src="." alt="" />
                        </div>
                        <div className="prod-name">Foodlo</div>
                    </div>
                    <div className="row-s">Powered By MassBite</div>
                    <div className="row-s">www.massbite.com</div>
                    <div className="row-s"><a href="tel:+917566369055">+91756636905</a></div>
                    <div className="row-s"><a href="tel:+918869969818">+918869969818</a></div>
                    
                    
            </div>
            <div className="right-ft">
                    <div className="firm-name">The Town Hall</div>
                    <div className="row-s">246/199 Colonelganj, <br/>Infront  of Anand Bhavan, Prayagraj</div>
                    <div className="row-s"><a href="tel:+918423781793">+918423781793</a></div>
                    <div></div>
            </div>
                </div>
            <div className="row-s copyright">©All Rights Reserved Foodlo 2021</div>
                
        </div>
            
        </>
    )
}


export default Footer;
