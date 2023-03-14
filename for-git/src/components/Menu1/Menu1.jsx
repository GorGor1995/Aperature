import React from "react";
import './style.css';
import './../../pic/carts/2.png';
import  './../../pic/carts/2.png'
import './../../pic/carts/3.png';
import './../../pic/carts/4.png';


const Menu1 = () => {
    return ( 
        <>
        <div className="menu1">
        <div className="m1-title">
            What we do.
        </div>
        <div className="m1-suptitle">
            The areas that we're specialized in.
        </div>
        <div className="carts">
            <div className="carts-up">
                <div className="cart-1">
                    <div className="c1-title">Product Photography</div>
                    <div className="c1-sup">
                        Cras commodo consequat orci, in convallis risus egestas non. Nulla 
                       <br/> efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus 
                      <br/> quam.
                    </div>
                    <div className="c1-bottom">
                        <a href="#" className="c1-btn">Read more</a>
                    </div>
                </div>
                <div className="cart-2">
                    <div className="c2-title">Architecture Photography</div>
                    <div className="c2-sup">
                        Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci 
                       <br/> nec egestas pharetra, ligula est semper enim, nec  auctor sapien leo  nec 
                      <br/> purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.
                    </div>
                    <div className="c2-bottom">
                        <a href="#" className="c2-btn">Read more</a>
                    </div>
                </div>
            </div>
            <div className="carts-down">
                <div className="cart-3">
                    <div className="c3-title">Drone Photography</div>
                    <div className="c3-sup">
                        Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique 
                       <br/> sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus 
                      <br/> egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus 
                     <br/> libero ac, cursus quam.
                    </div>
                    <div className="c3-bottom">
                        <a href="#" className="c3-btn">Read more</a>
                    </div>
                </div>
                <div className="cart-4">
                    <div className="c4-title">Wildlife Photography</div>
                    <div className="c4-sup">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
                       <br/> scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros 
                      <br/> quis consectetur. Morbi neque ex, condimentum dapibus congue et, 
                     <br/> vulputate ut ligula. Vestibulum sit amet urna turpis.
                    </div>
                    <div className="c4-bottom">
                        <a href="#" className="c4-btn">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
     );
}
 
export default Menu1;