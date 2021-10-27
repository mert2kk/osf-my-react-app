import React from "react";
import "./Login.css"

function Login(){

    return(
        <div className="Login">
            <div className="Login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" className="login__input"/>
                    <p><button>forgot password</button></p>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">LOGIN</button>
                    <div><button  type="submit" className="loginregisterButton">I dont have an account</button></div>
                </form>
                    






            </div>
        </div>
    )

}
export default Login