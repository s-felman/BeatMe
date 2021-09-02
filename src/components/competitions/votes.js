import React, {useState, useEffect } from "react";
import CreateProps from "./createProps"
import addCompetitonAPI from "../../api/managerFunctions";

const Votes=(props)=>{
    

    const [details, setDetails]= useState("");
    const [date, setDate]=useState("");
    const [target, setTarget]= useState("");
    
      const comp={
        name: props.location.compProps.name,
        manager: props.location.compProps.managerName,
        type:  props.location.compProps.type,
        userList:  props.location.compProps.userList,
        details: details,
        target: target,
        targetDate: date
      }
      useEffect(()=> {
        console.log("product props is", props.location.compProps);
        console.log("comp!", comp)
      })
    
      const onchange = (data) => {
        setDetails(data)
    }
        return(<div className="">
          <h1>{props.location.compProps.name}</h1>
            <CreateProps onchange={(e) => { onchange(e) }}></CreateProps>
            <label> יעד סופי</label><br/>
            <input placeholder="פירוט" onChange={event => setTarget(event.target.value)}></input>
            <input placeholder="תאריך" onChange={event => setDate(event.target.value)}></input><br/>
         <div className="trivia-div-radioButton">
             <label>הוספת פריט להצבעה</label>
             <input placeholder="שם מוצר"></input>
             <input placeholder="פירוט"></input>
             <button>העלאת תמונה</button>
             <button>הוספה</button>
         </div>
            <button onClick={()=>{addCompetitonAPI(JSON.stringify(comp))}}>התחל תחרות</button>
        </div>)
    }
 

export default Votes