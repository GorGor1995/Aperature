import React from "react";
import './style.css';

const Menu5 = () => {
    return ( 
        <>
        <div className="menu5">
        <div className="m5-title">Past clients</div>
        <div className="m5-sup">Trusted by your favourite companies</div>
        <div className="m5-images">
            <img src={require("../../pic/m5/1.png")} alt="" className="m5-img" />
            <img src={require("../../pic/m5/2.png")} alt="" className="m5-img" />
            <img src={require("../../pic/m5/3.png")} alt="" className="m5-img" />
            <img src={require("../../pic/m5/4.png")} alt="" className="m5-img" />
            <img src={require("../../pic/m5/5.png")} alt="" className="m5-img" />
        </div>
    </div>
    </>
     );
}
 
export default Menu5;