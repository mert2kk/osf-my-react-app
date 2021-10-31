import React from "react"
import Product from "./Home/Product"
import {Link } from "react-router-dom"






function ProductDetailed(){
    return(
        
        <div className="productdetailed">
               <div className="productdetailedimg"><img src="http://127.0.0.1:8887/PRO.png" alt="product"/>
               </div> 
               <a Href="./home">Go Back to HomePage</a>
        </div>  
        )
    }
    export default ProductDetailed
