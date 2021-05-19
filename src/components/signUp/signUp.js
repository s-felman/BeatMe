import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from "@material-ui/core";
import NavBar from "../navBar/navBar";

const SignUp=()=>{
    const [nameError,setNameError]=useState()
    const [emailError,setEmailError]=useState()
    const [passwordError,setPasswordError]=useState()



    function required(text){
        if(text=""){
        setNameError("שדה חובה");
        return false;
    }
    else {
        return true;
    }}

    return(
      <div>
          <NavBar/>
          <form>
              <label required>שם משפחה</label>
              <input type="text" ></input><br/>
              <label>שם פרטי</label>
              <input type="text" ></input><br/>
              <label>שם משתמש</label>
              <input type="text" ></input><br/>
              <label>טלפון</label>
              <input type="text" ></input><br/>
              <label>כתובת מייל</label>
              <input type="email" ></input><br/>
              <label>סיסמא</label>
              <input type="password" ></input><br/>
              <label>אנjjי מאשר קבלת מיילים</label>
              <Checkbox></Checkbox><br/>
              <button type="submit">רישום </button>

          </form>
      </div>  
    )

}
export default SignUp