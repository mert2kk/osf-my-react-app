import React from "react"
import "./Home.css"
import Product from "./Product.js"

function Home(){
    return(
            <div className="home">
                <img className="slider"
                src="http://127.0.0.1:8887/slider1.png"
                alt="slider"/>
                                <h1>Popular Items</h1>

            <div className="home__row">
                <Product
                id="1"
                title="Kristina Dam Oak Table with white marble top"
                price={799.55}
                image="http://127.0.0.1:8887/homeproduct2.png"
                />
                <Product
                id="2"
                title="Hay-About A Lounge Chair AAL 93"
                price={659.55}
                image="http://127.0.0.1:8887/homeproduct3.png"
                />
                <Product
                id="3"
                title="Cocktail Table Walnut"
                price={299.99}
                image="http://127.0.0.1:8887/homeproduct4.png"
                />
                <Product
                id="1"
                title="Kristina Dam Oak Table with white marble top"
                price={799.55}
                image="http://127.0.0.1:8887/homeproduct5.png"
                />
            </div>
                <div className="home__row2">
                    <Product
                    id="4"
                    title="Kristina Dam Oak Table with white marble top"
                    price={799.55}
                    image="http://127.0.0.1:8887/homeproduct1.png"
                    />
                    <Product
                     id="5"
                    title="Kristina Dam Oak Table with white marble top"
                    price={799.55}
                    image="http://127.0.0.1:8887/homeproduct5.png"
                    />
                    <Product
                    id="6"
                    title="Kristina Dam Oak Table with white marble top"
                    price={410.99}
                    image="http://127.0.0.1:8887/homeproduct6.png"
                    />
                    <Product
                    id="1"
                    title="Kristina Dam Oak Table with white marble top"
                    price={149.99}
                    image="http://127.0.0.1:8887/homeproduct7.png"
                />
                </div>
                <img className="banner" src="http://127.0.0.1:8887/banner.png" alt="banner"/>
            </div>
        
        
    )
}
export default Home