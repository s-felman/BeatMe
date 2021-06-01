import React , {useState}from "react"
import { Link } from "react-router-dom"
import NavBar from "../navBar/navBar";
import loginAPI from "../../api/loginFunctions"

const UserLogin=()=>{

    const [password, setPassword]= useState("");
    const [username, setUsername]= useState("");


    return(
        <div>
            <NavBar></NavBar>
            <from><br/>
                <label>שם משתמש</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} ></input><br/><br/>
                <label>סיסמא</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br/><br/>
                <Link to="/participant">
                    <button type="submit" onSubmit={loginAPI(username, password)}>Enter</button>
                </Link>
            </from>
        </div>
    ) 
}
export default UserLogin;