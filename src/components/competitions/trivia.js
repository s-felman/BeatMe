import React, {useState, useEffect } from "react"
import CreateProps from "./createProps"
import addCompetitonAPI from "../../api/managerFunctions";
import "./trivia.css"

const Trivia=(props)=>{

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
   const onChangeValue=(event)=> {
        console.log(event.target.value);
      }
    
        return(<div className="">
          <h1>{props.location.compProps.name}</h1>
            <CreateProps onchange={(e) => { onchange(e) }}></CreateProps>
            <label> ניקוד יעד</label><br/>
            <input placeholder="פירוט" onChange={event => setTarget(event.target.value)}></input>
            <input placeholder="תאריך" onChange={event => setDate(event.target.value)}></input><br/>
            <div>
                <label>הוספת שאלה</label>
                <input type="text" placeholder="שאלה"></input>
                <div onChange={onChangeValue} className="trivia-div-radioButton">
        <input type="radio"  name="gender"></input><input type="text" placeholder="תשובה אופציונאלית ראשונה" name="gender" />
        <input type="radio"name="gender"></input><input type="text" placeholder="תשובה אופציונאלית שניה" name="gender" /> 
       <input type="radio" name="gender"></input> <input type="text" placeholder="תשובה אופציונאלית שלישית" name="gender" /> 
      <button>הוספה</button>
      </div>
            </div>
            <button onClick={()=>{addCompetitonAPI(JSON.stringify(comp))}}>התחל תחרות</button>
        </div>)
   
}

export default Trivia
//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs