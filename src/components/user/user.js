import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUser} from "../../action";

const User=(props)=>{
    
    useEffect(()=>{
        props.fetchUser(props.userName);
    },[]);

    const u=props.users
    return <div>{u}</div>
}
const mapStateToProps=(state)=>{
    return{
        users: state.users
    }
}
export default connect(mapStateToProps, {fetchUser})(User) 
