
import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css"

function Product({id,title,image,price,}){
    const [{basket},dispatch]=useStateValue()

    console.log("basket content",basket)

    const addToBasket = () => {
        dispatch({
        type:"BUYNOW",
        item:{
            id:id,
            image:image,
            price:price,
        }
        })
    }
    
    return (
        
        <div className="product">
            <img src={image} alt=""/>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                    
                        
            <button   onClick={addToBasket}className="product__button" >BUY NOW</button>
            <button   className="product__button1" ><img src="http://127.0.0.1:8887/Heart.png"></img></button>
               
                
            </div>        
        </div>   
    )
}
export default Product;