import { Link } from 'react-router-dom';
import React, { useState } from "react";
import {connect} from "react-redux";
import "./competitions.css"

const CreateProps=(props)=>{


 const [img, setImg]= useState("");

 const handleChange = event => {
    props.onchange(event.target.value);
}
    return(
        <div>  
           <Link to={`/create/${props.user.userName}`}>  <button>חזור</button></Link><br/>
           <textarea className="comp-input-more-details" onChange= {handleChange} placeholder="קצת פרטים"></textarea><br/>
           <button onClick={()=>{setImg()}} >העלאת סרטון\תמונה</button><br/>
           
          
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        user: state.user.user,
        comp: state.comp.comp
}}
export default connect(mapStateToProps)(CreateProps); 
