import React, { useState, useEffect, Component, useReducer } from "react"
import {Link} from 'react-router-dom';
import "./navBar.css"
import logo from "./pictures/logo.png"
import {connect} from "react-redux";
import {fetchUser} from "../../action";

function NavBar(props){
  const [isLogged , setIsLogged] = useState('כניסה') 
  const [toLogin, setLogin]= useState('/userlogin')
  const [sign, dispatch]= useReducer()
  // useEffect(() => {
  //   setIsLogged("כניסה")
  //     setLogin("/userlogin")
  // },[]);
  useEffect(() => {
    if(localStorage.getItem('user')!='undefined'){
      var u= localStorage.getItem('user');
      u=JSON.parse(u)
      console.log("u",u);
      setIsLogged(u.userName)
    setLogin(`/participant/${u.userName}`)
    if((props.user).length===0){
      props.fetchUser(u.userName,u.password);
    }
    }
    
    else
    if((props.user).length!=0){
      setIsLogged(props.user.userName)
      setLogin(`/participant/${props.user.userName}`)
      console.log("toLogin", toLogin, "isLogged", isLogged)
  }
  else
    if((props.user).length===0||localStorage.getItem('user')==='undefined'){
      setIsLogged("כניסה")
      setLogin("/userlogin")
    }
    
  });

 return(
<div className="navBar">
  <button ><a href={toLogin} >{isLogged}</a></button>
 
  <input className="search"></input>
  <button className="search-icon"></button>  
  <a href="/create" className="links">צור תחרות</a>
  <a href="/create" className="links">המנצחים</a>
  <a href="/create" className="links">התחרויות</a>
  <a  href="/" className="logo"><img src={logo}></img></a>
 
</div>
 );   
}
const mapStateToProps=(state)=>{

  return{
      user: state.user.user
  }
}
export default connect(mapStateToProps,{fetchUser})(NavBar); 
