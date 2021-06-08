import React,{useState} from "react";
import addParticipantAPI from "../../api/managerFunctions"

const AddUser = (props) => {
const [showResults, setShowResults] = useState(false);
const [userList, setUserList] = useState([]);

const onchange = (data) => {
    setUserList(data);
    console.log("UL_ADD>", data);
}
const onClick = () => setShowResults(true)
return (
  <div>
    <input type="submit" value="הוספת משתמש" onClick={onClick} />
    { showResults ? <Results cname={props.cname} onchange={(e) => { onchange(e); console.log(userList) }} /> : null }
  </div>
)
}

const Results = (props) =>{ 
const [username, setUsername] = useState("");
const [useremail, setUseremail] = useState("");
const [userList, setUserList]= useState([]);
const user = (userName, userEmail) => { 
  const u={ userName: userName, userEmail: userEmail };
  console.log("user", u);
  setUserList([...userList,u]);
  console.log("userList", userList);
  return userList;
}
 
const handleChange = event => {
  props.onchange(event.target.userList.value);
}
 return(
<div id="results" className="search-results">
<label>שם משתמש</label>
<input type="text" value={username} onChange={event => setUsername(event.target.value)} ></input><br/>
<label>כתובת מייל</label>
 <input type="email" value={useremail} onChange={event => setUseremail(event.target.value)}></input><br/>
 {/* <button  onClick={()=>{addParticipantAPI(props.cname,username, useremail); 
                        alert("המשתמש נוסף בהצלחה");
                        setUsername(" "); setUseremail(" ")}} >הוספה</button> */}
                        <button  onClick={()=>{user(username, useremail); 
                        alert("המשתמש נוסף בהצלחה");
                        setUsername(" "); setUseremail(" ");}}
                        onChange={handleChange} >הוספה</button>


</div>
)}

// ReactDOM.render(<Search />, document.querySelector("#container"))
// import React,{useState} from 'react';
// import Team from "../comptitions/team"

// const Search=()=>{
    
//     const [isActive,setActive]=useState(false);


// //   const handleShow = ()=>{
// //       this.setActive({
// //           isActive: true
// //       })
// //   }

// //   const handleHide = () =>{
// //     this.setActive({
// //           isActive: false
// //       })
// //   }

 
//        return(
//            <div>
//            {useState.isActive ? <Team></Team> : null }
//              <button onClick={()=>setActive(true)}>Show</button>
//              <button onClick={()=>setActive(false)}>Hide</button>
//            </div>
//        )
 
// }



export default AddUser;


