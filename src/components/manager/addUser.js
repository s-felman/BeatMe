import React from "react";
import ReactDOM from 'react-dom';

const AddUser = () => {
const [showResults, setShowResults] = React.useState(false)
const onClick = () => setShowResults(true)
return (
  <div>
    <input type="submit" value="הוספת משתמש" onClick={onClick} />
    { showResults ? <Results /> : null }
  </div>
)
}

const Results = () => (
<div id="results" className="search-results">
  <form>
<label>שם משתמש</label>
<input type="text" ></input><br/>
<label>כתובת מייל</label>
 <input type="email" ></input><br/>
 <button type="submit">הוספה</button>
 </form>
</div>
)

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

