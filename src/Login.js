import React,{useState} from "react";
import "./Login.css"
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase'
function Login(){
    const history= useHistory();
    const[useremail,setUserEmail]= useState("")
    const[userpassword,setUserPassword] = useState("")

    const loginuser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push("/")
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth=>{
            history.push("/");


        })
        .catch(e => alert(e.message))
    }

    return(
        <div className="Login">
            
            <div className="Login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" className="login__input"/>
                    <p><button>forgot password</button></p>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginuser} type="submit" className="login__signInButton">LOGIN</button>
                    <div><button onClick={signupuser} type="submit" className="loginregisterButton">I dont have an account/Sign Up</button></div>
                </form>
                    






            </div>
        </div>
    )

}
export default Login