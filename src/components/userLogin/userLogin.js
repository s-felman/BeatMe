import React, { useState, useEffect, useCallback } from "react"
import { connect } from "react-redux";
import { fetchUser } from "../../action";
import { Link } from "react-router-dom"
import NavBar from "../navBar/navBar";
import loginAPI from "../../api/loginFunctions"
import "./userLogin.css"
import logo from "../navBar/pictures/logo.png"
import RouteIf from "../../routes/routeIf"
import Participant from "../participant/participant";

const UserLogin = (props) => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({});
    const [path, setPath] = useState("/userlogin");
    const [userId, setUserId] = useState("");

    // useEffect(() => {

    //   fetch(`/api/users/${props.match.params.userId}`)
    //     .then(response => response.json())
    //     .then(userData => setUser(userData))
    // }, []);

    useEffect(() => {
        if (props.error) {
            alert("שם משתמש או סיסמא שגויים")
        } else {
            console.log("succsess!!");
            setUser(props.users);
            setUserId(user.usernName)
            setPath("/participant");
        }
    }, [props.users, props.error])

    const req = () => {
        props.fetchUser(username, password);
        console.log("users->", props.users);
        // const  fetchFunc=async(username, password) =>{
        //     await  loginAPI(username,password)

        //  }
    }

        const u = props.users;

        return (
            <div className="ul">
                <div className="logo-pic"><Link to="/"><img src={logo}></img></Link> </div>
                <from className="form-login">

                    <h1 className="titles-login">התחברות</h1>
                    <a href="/signup" className="go-to-new">משתמש חדש? צור חשבון</a>

                    <input type="text" placeholder="שם משתמש\אימייל" className="insert-props" onChange={(e) => setUsername(e.target.value)} ></input>
                    <input type="password" placeholder="סיסמא" className="insert-props" onChange={(e) => setPassword(e.target.value)}></input>

                    <Link to={{ pathname: `${path}/${username}` }}>
                        <button type="submit" className="button-login" onClick={req}>כניסה</button>
                    </Link>

                </from>
            </div>
        )
    }
    const mapStateToProps = (state) => {
        return {
            users: state.users,
            error: state.users.error
        }
    }

    export default connect(mapStateToProps, { fetchUser })(UserLogin);

//export default UserLogin;