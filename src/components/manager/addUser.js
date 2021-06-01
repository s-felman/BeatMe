import React,{useState} from "react";
import addParticipantAPI from "../../api/managerFunctions"

const AddUser = (props) => {
const [showResults, setShowResults] = useState(false);

const onClick = () => setShowResults(true)
return (
  <div>
    <input type="submit" value="הוספת משתמש" onClick={onClick} />
    { showResults ? <Results cname={props.cname}/> : null }
  </div>
)
}

const Results = (props) =>{ 
const [username, setUsername] = useState("");
const [useremail, setUseremail] = useState("");
  return(
<div id="results" className="search-results">
  <form>
<label>שם משתמש</label>
<input type="text" onChange={event => setUsername(event.target.value)} ></input><br/>
<label>כתובת מייל</label>
 <input type="email" onChange={event => setUseremail(event.target.value)}></input><br/>
 <button type="submit" onClick={addParticipantAPI(props.cname,username, useremail)} >הוספה</button>
 </form>
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

