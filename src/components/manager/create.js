import React, { useState, useEffect, Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import NavBar from "../navBar/navBar";
import "./create.css";
import profile from "../../static/images/profile-pic.png"
import profile1 from "../../static/images/profilim 1.png";
import profile2 from "../../static/images/profilim 3.png";
import profile3 from "../../static/images/profilim 4.png";
import profile4 from "../../static/images/profilim 5.png";
import profile5 from "../../static/images/profilim 6.png";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import user from "../user/user";
import {connect} from "react-redux";
init("user_qMw5HuferY6tdn7CfelD1");
const Create = (props) => {
const managerName=props.user.userName;

  const participants = [
    {
      pic: [profile1],
      name: "אייל ירום"
    },
    {
      pic: [profile2],
      name: "משה כהן"
    },
    {
      pic: [profile3],
      name: "דוד כגן"
    },
    {
      pic: [profile4],
      name: "עוזי מנדלוביץ"
    },
    {
      pic: [profile5],
      name: "אורן לב"
    },
  ];
  const images = [
    {
      title: 'חידון',
      path: "/trivia"

    },
    {
      title: 'פרויקט משותף',
      path: "/team"
    },
    {

      title: 'תחרות הצבעות',
      path: "/votes"
    },
    {
      title: 'משימות מחולקות',
      path: "/multitasks"

    },
    {
      title: 'משימה בודדת',
      path: "/onetask"

    },
  ];
  const [value, setValue] = useState('/create');
  const [cname, setCname] = useState('');
  const [userList, setUserList] = useState([]);
  const [buttonSelected, setButtonSelected] = useState("");
  const [cnameError, setCNameError] = useState('');
  const [manager, setManager] = useState('');
  useEffect(() => {
    console.log("useEffect", value);
    cnameErrorFucntion(cname);
    setManager(props.user.userName)
     
  });

  function checkValidations(cname, value) {
    if (cname == "" || value == "") {
      cnameErrorFucntion(cname);
    }
    else {


    }
  }

  const setCname1 = (event) => {
    setCname(event.target.value);

  }
  function cnameErrorFucntion(text) {
    if (text != "") {
      setCNameError("");
      return false;
    }
    else {
      setCNameError("שדה חובה");
      return true;
    }
  }

  const list = participants
    .map(p => {
      return (
        <div className="profile-participant-card">
          <label className="profile-participant-name">{p.name}</label>
          <img className="profile-participant-pic" src={p.pic}></img>
        </div>
      )
    })


  const AddUser = (props) => {
    const [showResults, setShowResults] = useState(false);


    const onClick = () => {
      setShowResults(true);
    }
 
    const Results =(props) => {
      const [username, setUsername] = useState("");
      const [useremail, setUseremail] = useState("");


      const user = (userName, userEmail) => {
        const u = { userName: userName, userEmail: userEmail };
        setUserList([...userList, u]);

        //props.toAddUserCallback(userList);
      }

      const sendEmail = () => {
        emailjs.send('service_hhnf93h', 'template_z0dxy0e',
          {
            from_name: manager,
            customer_address: useremail,
            to_name: username,
          }, 'user_qMw5HuferY6tdn7CfelD1')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        ;

      }
      return (
        <div id="results" className="search-results">
          <label>שם משתמש</label>
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} ></input><br />
          <label>כתובת מייל</label>
          <input type="email" value={useremail} onChange={event => setUseremail(event.target.value)}></input><br />
          <button onClick={() => {
            user(username, useremail); alert("המשתמש נוסף בהצלחה");
            setUsername(" "); setUseremail(" "); setShowResults(false); sendEmail()
          }} >הוספה</button>
        </div>
      )
    }
    return (
      <div >
        <input className="add-perticipant-button" type="submit" value="הוספת משתמש" onClick={onClick} />
        {showResults ? <Results cname={props.cname} /> : null}
      </div>
    )
  }


  return (
    <div className="create-style">
      <div className="create-nav">
        <NavBar ></NavBar></div>
      <div className="create-props">
        <input type="text" placeholder="שם לתחרות"
          id="name"
          onChange={setCname1} className="competiton-name-input" ></input><br />
        <span className='error'>{cnameError}</span><br />
        <div className="card-type-competition" >

        {images.map((image) => {

            console.log("buttonSelected", buttonSelected, image.path, image.path === buttonSelected);
            return <button className={image.path === buttonSelected ? "create-button-selected" : "select-competiton-type"} onClick={() => { setValue(image.path); setButtonSelected(image.path) }}>
              <h2 className="title-type">{image.title}</h2>
            </button>
          })}
          {/* {images.map((image) => {
                      return ()
          }
}
          ) */}
        </div>
        <div className="create-buttons-div">
          <button className="add-perticipant-button">העלאת קובץ אקסל</button>

          <AddUser></AddUser></div>
        <Link
          to={{
            pathname: `${value}/${cname}`,
            state: { cname: cname },
            compProps: {
              managerName: manager,
              name: cname, type: value, userList: userList
            }
          }} >
          <button className="continue-button" type="submit" onClick={() => { checkValidations(cname, value) }}>
            המשך</button></Link>
      </div>
      <div className="create-profile">
        <img src={profile} className="profile-pic"></img>
        <label className="profile-name">{props.user.userName}</label>
        <label className="profile-name-props">מנהל התחרות</label>
        <Link to="/updateUser">
          <button className="edit-profile-text">ערוך פרופיל</button>
        </Link>
        <label className="profile-participants-label">משתתפי התחרות</label>
        <div className="profile-list">{list}</div>
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
      user: state.user.user
  }
}
export default connect(mapStateToProps)(Create); 

//https://dashboard.emailjs.com/admin/templates/hbl27zc
//https://reactjs.org/docs/forms.html
//https://dev.to/muhammadawaisshaikh/how-to-get-an-updated-state-of-child-component-in-the-parent-component-using-the-callback-method-1i5