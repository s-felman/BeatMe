import React, { useState , useEffect , Component } from "react"
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

const Create = (props) => {


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
  const [value, setValue] = useState('');
  const [cname, setCname] = useState('');
  const [userList, setUserList] = useState([]);
  const [buttonSelected, setButtonSelected]= useState(false);
  
  useEffect(() => {
    console.log("useEffect",value);
    // console.log("cname", cname);
  });



  const setCname1 = (event) => {
    setCname(event.target.value);

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
    const btnSelectedClass= buttonSelected? "select-competiton-type create-button-selected" : "select-competiton-type";
    
    const AddUser = (props) => {
      const [showResults, setShowResults] = useState(false);


      const onClick = () => {
        setShowResults(true);
      }
    
      const Results = (props) => {
        const [username, setUsername] = useState("");
        const [useremail, setUseremail] = useState("");
    
    
        const user = (userName, userEmail) => {
          const u = { userName: userName, userEmail: userEmail };
          console.log("user", u);
          setUserList([...userList, u]);
          console.log("shani", userList);
          //props.toAddUserCallback(userList);
        }
    
    
       return (
        <div id="results" className="search-results">
          <label>שם משתמש</label>
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} ></input><br />
          <label>כתובת מייל</label>
          <input type="email" value={useremail} onChange={event => setUseremail(event.target.value)}></input><br />
          <button onClick={() => {user(username, useremail); alert("המשתמש נוסף בהצלחה"); 
            setUsername(" "); setUseremail(" ");setShowResults(false) ; }} >הוספה</button> 
          </div>
        )
      }
    return (
      <div >
        <input className="add-perticipant-button" type="submit" value="הוספת משתמש" onClick={onClick} />
        { showResults ? <Results cname={props.cname}/> : null}
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
          onChange={setCname1} className="competiton-name-input" ></input>
       <div className="card-type-competition" >
          {images.map((image) => (<button className={btnSelectedClass} onClick={ ()=>{setValue(image.path); setButtonSelected(true) }}>
            <h2 className="title-type">{image.title}</h2>
          </button>))}
        </div>
        <div className="create-buttons-div"> 
          <button className="add-perticipant-button">העלאת קובץ אקסל</button>

        <AddUser></AddUser></div>
       

        <Link to={{
          pathname: `${value}/${cname}`,
          state: { cname: cname },
          compProps: {
            name: cname, type: value, userList: userList 
           }}} >
          <button className="continue-button" type="submit">
            {/* onClick={() => {  addCompetitonAPI(cname,value, userList) }}> */}
            המשך</button>
        </Link>
      </div>
      <div className="create-profile">
        <img src={profile} className="profile-pic"></img>
        <label className="profile-name">יאיר חן</label>
        <label className="profile-name-props">מנהל התחרות</label>
        <label className="edit-profile-text">ערוך פרופיל</label>
        <label className="profile-participants-label">משתתפי התחרות</label>
        <div className="profile-list">{list}</div>
      </div>
    </div>
  );
}


export default Create;
//https://reactjs.org/docs/forms.html
//https://dev.to/muhammadawaisshaikh/how-to-get-an-updated-state-of-child-component-in-the-parent-component-using-the-callback-method-1i5