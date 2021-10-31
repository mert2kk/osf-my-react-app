import React from "react";
import "./404Page.css"

const ErrorPage = () => {
    return (
        <div id="wrapper">
            <img src="http://127.0.0.1:8887/404.jpg" />
            <a Href="./home">Go Back to HomePage</a>
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
        </div >
    )
}





export default ErrorPage