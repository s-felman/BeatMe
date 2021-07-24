import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUser} from "../../action";
import {saveUser} from "../../action/userAction"

const User=(props)=>{
    
    useEffect(()=>{
        console.log("props from user",props)
        props.fetchUser(props.userName);
        props.saveUser()

    },[]);

    const u=props.user
    return <div>{u}</div>
}
const mapStateToProps=(state)=>{
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {fetchUser})(User) 
