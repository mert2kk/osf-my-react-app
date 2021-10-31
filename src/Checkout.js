import React, { useState } from "react";
import "./Checkout.css" 
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import ProductCart from "./ProductCart";
function Checkout (){
    const [{basket}] = useStateValue();
    return(
        <div className="checkout">
            <div className="chaeckout__left">

                {
                    basket.length === 0 ? (  
                    <div>
                        <h2 className="checkout__title">Your basket is empty</h2>
                        <p>You have no items in your basket.Buy one</p>
                    </div>
                    ) : (
                        <div>
                            <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}    
                                
                                        />
                                ))
                            }
                            </div>
                    )
                }
            </div>


            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )

    
}
export default Checkout