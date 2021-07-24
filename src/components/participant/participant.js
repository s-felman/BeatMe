import React from "react";
import NavBar from "../navBar/navBar";
import profile from "../../static/images/participant-profil.png"
import "./participant.css";
import {connect} from "react-redux";
import User from "../user/user"
//init("user_qMw5HuferY6tdn7CfelD1");

const Participant=(props)=>{


    return(
        <div className="participant-style">
            <div className="participant-nav">
                <NavBar ></NavBar>
            </div>
            <div className="participant-props">
                <div className="participant-title">שלום {props.user.userName}</div>
                    <div className="participant-competitions">התחריות שלי</div>
                    <div className="participant-profile">
                    <img src={profile} className="participant-profile-pic"></img>
                    <label className="participant-profile-name">{props.user.userName}</label>
                    <label className="participant-profile-name-props">משתתף פעיל</label>
                    <label className="participant-edit-profile-text">ערוך פרופיל</label>
                </div>
            </div>
           
        </div>    
    )
}
const mapStateToProps=(state)=>{
    console.log("user", state.user);
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(Participant); 


