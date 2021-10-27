import React from "react";
import SearchIcon from "@material-ui/icons/Search"
import "./Header.css"
import {Link } from "react-router-dom"
import { useStateValue } from "../../StateProvider";


 function Header(){

    const [{basket},dispatch] = useStateValue()

    console.log("my basket", basket);

    return(
        <nav className="header">
            <div className="header__logo">
                <a href="src\Pages\Home\Home.js"><img   src="http://127.0.0.1:8887/logo1.png" alt="logo" /></a>
            </div>
                <div className="right__up">
                
                        <Link to=".\Login" className="header__Link">
                            <img  className="header__login" src="http://127.0.0.1:8887/Login.svg" alt="login"/>
                        </Link>
                        <img  className="header__wishlist" src="http://127.0.0.1:8887/Wishlist.svg" alt="wishlist"/>
                        
                        <Link to="/Checkout" className="header__link">
                            
                            <img  className="header__cart" src="http://127.0.0.1:8887/Mini-cart.svg" alt="mini-cart"/>
                            <span  className="header__basketcount">{basket?.length}</span>
                            
                        </Link>
                        
                    
            </div>


            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div> 
            <ul className="navbar">
                <div className="dropdown">
                <button className="dropbtn">SERVICES
                    </button>
                    <div class="dropdown-content">
                        <h1><a href="#">PRODUCT CATEGORIES</a></h1>
                        <ul className="headercolumn1">
                        <li><a href="src\Pages\404Page\404Page.js">Accessories</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Gadgets</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Motorcycle</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Alcohol</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Garden</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Movies</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Art</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Grocery</a></li>
                        </ul>
                        <ul className="headercolumn2">
                        <li><a href="src\Pages\404Page\404Page.js">Music</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Books</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Home</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Office</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Drink</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Jewelry</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Pets</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Elektronics</a></li>
                        </ul>
                        <ul className="headercolumn3">
                        <li><a href="src\Pages\404Page\404Page.js">Kids and Baby</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Romantic</a></li>
                        <li> <a href="src\Pages\404Page\404Page.js">Flowers and Plants</a></li>
                        <li> <a href="src\Pages\404Page\404Page.js">Men's Fashion</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Sport</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Food</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Mobile</a></li>
                        <li><a href="src\Pages\404Page\404Page.js">Toys</a>   </li>
                        </ul>
                    </div>
                </div>
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">LIBRARY</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">EN</a></li>
                        <li><a href="#">US</a></li>
            </ul>
        </nav>
    )
}
export default Header;