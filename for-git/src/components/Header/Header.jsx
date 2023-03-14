import React from "react";
import './style.css'
import  './../../pic/menu-bg/1.png'
import './../../pic/header/1.png'



const Header = () => {
    return ( 
        <>
        <div className="header">
        <div className="header-line">
            <div className="h-img">
                <img src={require("./../../pic/header/1.png")} alt=""/>
            </div>
            <div className="h-links">
                <a href="#" className="h-ln">Business areas</a>
                <a href="#" className="h-ln">Featured images</a>
                <a href="#" className="h-ln">Gear cage</a>
                <a href="#" className="h-ln">Contact</a>
            </div>
            <div className="h-bottom">
                <a href="#" className="h-btn">Get template</a>
            </div>
         </div>
         <div className="header-menu">
            <div className="menu-bg">
             <div className="m-title">Photographer & Filmmaker</div>  
                <div className="m-sub">Aperture Studios</div>
                <div className="m-sup">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in 
                <br/> eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum 
               <br/> nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id 
              <br/> rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                 
            </div>

        </div>
    </div>
    </>
     );
}
 
export default Header;