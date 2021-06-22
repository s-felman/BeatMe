import React , {useState}from "react"
import { Link } from "react-router-dom"
import NavBar from "../navBar/navBar";
import loginAPI from "../../api/loginFunctions"
import "./userLogin.css"
import logo from "../navBar/pictures/logo.png"

const UserLogin=()=>{

    const [password, setPassword]= useState("jjnj");
    const [username, setUsername]= useState("");


    return(
        <div className="ul">
<div className="logo-pic"><Link to="/"><img src={logo}></img></Link> </div> 
            <from className="form-login">
              
            <h1 className="titles-login">התחברות</h1>
            <a href="/signup"className="go-to-new">משתמש חדש? צור חשבון</a>
    
                <input type="text" placeholder="שם משתמש\אימייל" className="insert-props" onChange={(e)=>setUsername(e.target.value)} ></input>
                <input type="password" placeholder="סיסמא" className="insert-props" onChange={(e)=>setPassword(e.target.value)}></input>
                <Link to="/participant">
                    <button type="submit" className="button-login" onSubmit={loginAPI(username, password)}>כניסה</button>
                </Link>
            </from>
        </div>
    ) 
}
export default UserLogin;