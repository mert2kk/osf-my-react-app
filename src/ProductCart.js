import React, { useState } from "react";
import "./ProductCart.css"
import {useStateValue} from "./StateProvider"

function ProductCart({id,title,image,price}){

    const[{basket},dispatch] =useStateValue();
    const removeItem = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            İd: id
        })
    }

    return(
        <div className="productcart">
            <img className="productcart__image" src={image} alt="product image"/>
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">${price}</p>

            </div>
        </div>
    )

}
export default ProductCart