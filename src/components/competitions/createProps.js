import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import "./competitions.css";
import NavBar from "../navBar/navBar";
 import ImageUploader from 'react-images-upload';
 import ImageUpload from "../imageUploud.js";
 import ImageDB from './image';
const CreateProps=(props)=>{


 const [img, setImg]= useState(false);
 const [upload, setUpload]=useState()

 const handleChange = event => {
    props.onchange(event.target.value);
}
  useEffect(()=>{
      if(img){
          setUpload( <ImageUpload></ImageUpload>);
          window.addEventListener("scroll", noscroll);
          window.removeEventListener("scroll", noscroll);
      }
      
      else
   setUpload(null);
  },[img])

 const noscroll=() =>{
    window.scrollTo(0,0);
   }
   
  const popup=()=> {
    window.addEventListener("scroll", noscroll);
    window.removeEventListener("scroll", noscroll);
   }
    return(
        <div>  
           <Link to={`/create/${props.user.userName}`}>  <button>חזור</button></Link><br/>
           <textarea className="comp-input-more-details" onChange= {handleChange} placeholder="...קצת פרטים"></textarea><br/>
           <button className="comp-input-more-details" onClick={popup} onClick={()=>{!img ?setImg(true):setImg(false)}} >העלאת סרטון\תמונה</button><br/>
          <div>{upload}</div>
          <ImageDB></ImageDB>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        user: state.user.user,
        comp: state.comp.comp
}}
export default connect(mapStateToProps)(CreateProps); 
