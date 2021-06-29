import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from "@material-ui/core";
import NavBar from "../navBar/navBar";
import { Link } from "react-router-dom";
import signUpAPI from '../../api/signUpFunction';
import './signUp.css';


const SignUp=()=>{

    const [fnameError,setFNameError]=useState("");
    const [lnameError,setLNameError]=useState("");
    const [unameError,setUNameError]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [phoneError,setPhoneError]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userName,setUserName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [getEmail,setgetEmail]=useState(false);

    function fnameErrorFucntion(text){
        if(text!=""){  
            setFNameError("");
            setFirstName(text);

            //return false;
        }
        else {
            setFNameError("שדה חובה");    
            //return true;
        }
    }
    function lnameErrorFucntion(text){
        if(text!=""){       
            setLNameError("");
            setLastName(text);

            //return false;
        }
        else {
            setLNameError("שדה חובה");
            //return true;
        }
    }
    function unameErrorFucntion(text){
        if(text!=""){            
            setUNameError("");
            setUserName(text);

            //return false;
        }
        else {
            setUNameError("שדה חובה");
            //return true;
        }
    }

    function passwordErrorFunction(text) {
        if (text.length < 6) {
            setPasswordError("הסיסמא חייבת להכיל לפחות 6 תווים");
            //return false;
        }
        else {
            setPasswordError("")
            setPassword(text);
            console.log("pass",password)
            //return true;
        }
    }

    function phoneErrorFuncion(text) {
        const phoneformat = /^(([0]+(\.[5]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(text.length >= 10){
            //if(text.match(phoneformat)){
                setPhoneError("");
                setPhone(text);
                //return true;
            }
            else{
                setPhoneError("מספר פלאפון לא תקין");
                //return false;
            }
        }
//}

    function emailErrorFunction(text) {
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (text.match(mailformat)) {
            //checks if this email exist
            //const temp=AccountsList.accountsList.filter(account=>account.email===inputtxt)
            // if(temp.length>0){
            //     setEmailError("כתובת מייל זו נמצאת בשימוש")
            //     return false
            // }
            setgetEmail("");
            setEmail(text);
            //return true;
        }
        else {
            setEmailError("כתובת מייל אינה תקנית");
            //return false;
        }
    }

    return(
      <div>
          <NavBar></NavBar>
          <form>
              <label className=".signUp-title">יצירת חשבון</label> 
              <label className="signUp-firstName-text" required>שם משפחה</label>
              <input className="signUp-firstName" type="text" id="firstName" onChange={(e)=>fnameErrorFucntion(e.target.value)}></input><br/><br/>
              <span className='error'>{ fnameError }</span><br/>
              <label className="signUp-lastName">שם פרטי</label>
              <input className="signUp-lastName-text" type="text" onChange={(e)=>lnameErrorFucntion(e.target.value)}></input><br/><br/>
              <span className='error'>{ lnameError }</span><br/>
              <label className="signUp-userName">שם משתמש</label>
              <input className="signUp-userName-text" type="text" name="UserName" onChange={(e)=>unameErrorFucntion(e.target.value)}></input><br/><br/>
              <span className='error'>{ unameError }</span><br/>
              <label className="signUp-phone-text">טלפון</label>
              <input className="signUp-phone" type="text" onChange={(e)=>phoneErrorFuncion(e.target.value)}></input><br/><br/>
              <span className='error'>{ phoneError }</span><br/>
              <label className="signUp-email-text">כתובת מייל</label>
              <input className="signUp-email" type="email" onChange={(e)=>emailErrorFunction(e.target.value)}></input><br/><br/>
              <span className='error'>{ emailError }</span><br/>
              <label className="signUp-password-text">סיסמא</label>
              <input className="signUp-password" type="password" onChange={(e)=>passwordErrorFunction(e.target.value)}></input><br/><br/>
              <span className='error'>{ passwordError }</span><br/>
              <label className="signUp-checkbox-text">אישור קבלת הודעות במייל</label>
              <Checkbox className="signUp-checkbox" id="getEmail" onChange={(e)=>setgetEmail(e.target.value)}></Checkbox><br/>
              <button className="signUp-enterUser" type="submit" onClick={()=>{signUpAPI(firstName, lastName, userName, phone, email, password, getEmail)}}>רישום </button><br/><br/>
              <Link to="/userlogin" className=".enter-loginUser">משתמש קיים? היכנס</Link>
          </form>
      </div>  
    )

}

export default SignUp