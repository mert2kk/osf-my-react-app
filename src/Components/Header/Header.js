import React from "react";
import SearchIcon from "@material-ui/icons/Search"
import "./Header.css"
import {Link } from "react-router-dom"
import { useStateValue } from "../../StateProvider";

 function Header(){

    const[{basket},dispatch]= useStateValue();

    console.log("my basket",basket)

    return(
        <nav className="header">
            <div className="header__logo">
                <a href="src\Pages\Home\Home.js"><img   src="http://127.0.0.1:8887/logo1.png" alt="logo" /></a>
            </div>
                <div className="right__up">
                
                        <Link to="./Login.js" className="header__Link">
                            <img  className="header__login" src="http://127.0.0.1:8887/Login.svg" alt="login"/>
                        </Link>
                        <img  className="header__wishlist" src="http://127.0.0.1:8887/Wishlist.svg" alt="wishlist"/>
                        
                        <Link to="/Checkout" className="header__link">
                            
                            <img  className="header__cart" src="http://127.0.0.1:8887/Mini-cart.svg" alt="mini-cart"/>
                            <span  className="header__basketcount" >{basket?.length}</span>
                            
                        </Link>
                        
                    
            </div>


            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div> 
            <dl className="navbar">
                <div className="dropdown">
                <button className="dropbtn">SERVICES
                    </button>
                    <div class="dropdown-content">
                        
                        <div><h1><a href="#">PRODUCT CATEGORIES</a></h1></div>
                        <div className="m">
                        <ul className="headercolumn1">
                        <li><a href="./ErrorPage">Accessories</a></li>
                        <li><a href="./ErrorPage">Gadgets</a></li>
                        <li><a href="./ErrorPage">Motorcycle</a></li>
                        <li><a href="./ErrorPage">Alcohol</a></li>
                        <li><a href="./ErrorPage">Garden</a></li>
                        <li><a href="./ErrorPage">Movies</a></li>
                        <li><a href="./ErrorPage">Art</a></li>
                        <li><a href="./ErrorPage">Grocery</a></li>
                        </ul>
                        
                        <ul className="headercolumn1">
                        <li><a href="./ErrorPage">Music</a></li>
                        <li><a href="./ErrorPage">Books</a></li>
                        <li><a href="./ErrorPage">Home</a></li>
                        <li><a href="./ErrorPage">Office</a></li>
                        <li><a href="./ErrorPage">Drink</a></li>
                        <li><a href="./ErrorPage">Jewelry</a></li>
                        <li><a href="./ErrorPage">Pets</a></li>
                        <li><a href="./ErrorPage">Elektronics</a></li>
                        </ul>
                        
                        <ul className="headercolumn1">
                        <li><a href="./ErrorPage">Kids and Baby</a></li>
                        <li><a href="./ErrorPage">Romantic</a></li>
                        <li> <a href="./ErrorPage">Flowers and Plants</a></li>
                        <li> <a href="./ErrorPage">Men's Fashion</a></li>
                        <li><a href="./ErrorPage">Sport</a></li>
                        <li><a href="./ErrorPage">Food</a></li>
                        <li><a href="./ErrorPage">Mobile</a></li>
                        <li><a href="./ErrorPage">Toys</a>   </li>
                        </ul>
                        
                        
                        <ul className="headercolumn1">
                        <h1><a href="#">SALE</a></h1>
                        <li><a href="./ErrorPage">Accessories</a></li>
                        <li><a href="./ErrorPage">Gadgets</a></li>
                        <li><a href="./ErrorPage">Motorcycle</a></li>
                        <li><a href="./ErrorPage">Alcohol</a></li>
                        <li><a href="./ErrorPage">Garden</a></li>
                        <li><a href="./ErrorPage">Movies</a></li>
                        <li><a href="./ErrorPage">Art</a></li>
                        <li><a href="./ErrorPage">Grocery</a></li>
                        </ul>
                        
                        
                        
                        <ul>
                            <img src="http://127.0.0.1:8887/dropdownimg.jpg" alt="pppp"/>
                        </ul>
                        </div>
                    </div>
                </div>
                    <div>
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">LIBRARY</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">EN</a></li>
                        <li><a href="#">US</a></li>
                    </div>
                    
                
                        
            </dl>
        </nav>
    )
}
export default Header;