import React from 'react';
import "./App.css";
import Header from  "./Components/Header/Header.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './Login.js';
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/footer.js"
import ErrorPage from './Pages/404Page/404Page.js'
import Checkout from "./Checkout"

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
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>

    </div>
    </Router>
  );
}


export default App;