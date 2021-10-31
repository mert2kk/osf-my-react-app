import React from 'react';
import "./App.css";
import Header from  "./Components/Header/Header.js"
import {BrowserRouter as Router,Switch,Route, Link,Redirect} from "react-router-dom"
import Login from './Login'
import Home from "./Pages/Home/Home"
import ErrorPage from './Pages/404Page/404Page'
import Checkout from "./Checkout"
import Footer from './Components/Footer/footer'
import ProductDetailed from './Pages/ProductDetailed';



function App() {
  return (
    <Router>
      
      <div className="App">
        
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/Login">
            <Header/>
            <Login/>
            <Footer/>
          </Route>
          <Route path="/ErrorPage">
            <Header/>
            <ErrorPage/>
            <Footer/>
          </Route>
          <Route path="/ProductDetailed">
            <Header/>
            <ProductDetailed/>
            <Footer/>
          </Route>
          <Route path="/" >
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>

    </div>
    </Router>
  )
}


export default App;