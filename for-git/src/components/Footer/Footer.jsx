import React from "react";
import './style.css';

const Footer = () => {
    return ( 
        <>
         <div className="footer">
        <div className="footer-up">
            <div className="up-left">
                <div className="ul-image">
                    <img src={require("../../pic/header/3.png")} alt="" />
                </div>
                <div className="ul-title">
                    Photographers & videographers capturing the world around us.
                </div>
            </div>
            <div className="up-right">
                <div className="ur-links1">
                    <div className="ln1-title">
                        Business areas
                    </div>
                    <a href="#" className="ln1">Product Photography</a>
                    <a href="#" className="ln1">Architecture Photography</a>
                    <a href="#" className="ln1">Drone Photography</a>
                    <a href="#" className="ln1">Wildlife Photography</a>
                </div>
                <div className="ur-links2">
                    <div className="ln2-title">
                        Pages
                    </div>
                    <a href="#" className="ln2">Gear cage</a>
                    <a href="#" className="ln2">Featured images</a>
                    <a href="#" className="ln2">Contact</a>
                    <a href="#" className="ln2">Style guide</a>
                    <a href="#" className="ln2">Instructions</a>
                    <a href="#" className="ln2">Changelog</a>
                </div>
            </div>
            
        </div>
        <div className="arrow1">
        <img src={require("../../pic/header/2.png")} alt=""  />
        </div>
        <div className="footer-down">
            <div className="fd-title">
                Subscribe to our newsletter
            </div>
            <div className="fd-sup">
                Read about all the things we do.
            </div>
        </div>
        <div className="arrow2">
        <img src={require("../../pic/header/2.png")} alt=""  />
        </div>
        <div className="final">
            <div className="final-title">
                © Aperture Photography, Inc. All rights reserved.
            </div>
            <div className="final-images">
               <a href="#"><img src={require("../../pic/final/1.png")} alt="" /></a>
               <a href="#"><img src={require("../../pic/final/2.png")} alt="" /></a>
               <a href="#"><img src={require("../../pic/final/3.png")} alt="" /></a>
               
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Footer;