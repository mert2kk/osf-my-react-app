import Reac from "react";
import "./Checkout.css" 
import Subtotal from "./Subtotal";
function Checkout (){
    return(
        <div className="checkout">
            <div className="chaeckout__left">
                    <div>
                        <h2 className="checkout__title">Your basket is empty</h2>
                        <p>You have no items in your basket.Buy one</p>
                    </div>

            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )

    
}
export default Checkout