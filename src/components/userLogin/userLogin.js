import React , {useState, useEffect}from "react"
import { Link } from "react-router-dom"
import NavBar from "../navBar/navBar";
import loginAPI from "../../api/loginFunctions"
import "./userLogin.css"
import logo from "../navBar/pictures/logo.png"
import RouteIf from "../../routes/routeIf"
import Participant from "../participant/participant";

const UserLogin=(props)=>{

    const [password, setPassword]= useState("jjnj");
    const [username, setUsername]= useState("");
    const [user, setUser] = useState({});
    const [sucsess, setSucsess]=useState(false);

useEffect(() => {
  fetch(`/api/users/${props.match.params.userId}`)
    .then(response => response.json())
    .then(userData => setUser(userData))
}, []);

const ConditionalLink = ({ children, to, condition }) => (condition)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;
 
    const  checkLogin=async() =>{
       await  fetch(`http://localhost:3000/users/login?userName=${username}&password=${password}`)
       .then((res) => res.json())
       .then((data) => {
         console.log("data",data); 
         if(data.length===1 && data[0].password===password){
             console.log("sucsess!!");
             setSucsess(true);
            //setUser(data);
            <ConditionalLink to="/patricipant" condition={sucsess}/>
            }
            else{
                alert("שם משתמש או סיסמא שגויים")
            }
       })
       .catch((err) => {
           console.log("error", err);
       })
 
     
    }

    return(
        <div className="ul">
<div className="logo-pic"><Link to="/"><img src={logo}></img></Link> </div> 
            <from className="form-login">
              
            <h1 className="titles-login">התחברות</h1>
            <a href="/signup"className="go-to-new">משתמש חדש? צור חשבון</a>
    
                <input type="text" placeholder="שם משתמש\אימייל" className="insert-props" onChange={(e)=>setUsername(e.target.value)} ></input>
                <input type="password" placeholder="סיסמא" className="insert-props" onChange={(e)=>setPassword(e.target.value)}></input>
             
                    <button type="submit" className="button-login" onClick={()=>{checkLogin()}}>כניסה</button>
                   
            </from>
        </div>
    ) 
}
export default UserLogin;