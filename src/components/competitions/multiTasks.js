import React, {useState, useEffect } from "react";
import CreateProps from "./createProps";
import addCompetitonAPI from "../../api/managerFunctions";
import Calendar from "react-calendar";
import Moment from 'moment';
import NavBar from "../navBar/navBar";

const MultiTasks=(props)=>{
  const [details, setDetails]= useState("");
  const [date, setDate]=useState("");
  const [value, setValue] = useState(new Date());
  useEffect(()=>{
    setValue(value);
    console.log("ddd", value)
  })
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
    console.log("comp!", comp);
  })

  const onchange = (data) => {
    setDetails(data)
}
function onChange(nextValue) {
  console.log("naet", nextValue)
  setValue(nextValue);
}
Moment.locale('en');


    return(<div className="comp-father-div">
      <NavBar></NavBar>
      <div className="comp-div">
      <h1 className="comp-header-secondpage">{props.location.compProps.name}</h1>
        <CreateProps onchange={(e) => { onchange(e) }}></CreateProps>
        <div className="comp-label-target">יעד סופי</div><br/>
        <input placeholder="פירוט" onChange={event => setTarget(event.target.value)}></input>
        <Calendar  onChange={onChange} value={value} calendarType="Hebrew" ></Calendar>
        <div placeholder="תאריך" onChange={event => setDate(event.target.value)}> {Moment(value).format('DD-MM-yyyy')} </div><br/>
        <label>משימת אמצע</label><br/>
        <button>date</button><br/>
        <textarea placeholder="פירוט משימת אמצע"></textarea><br/>
        <button onClick={()=>{addCompetitonAPI(JSON.stringify(comp))}}>התחל תחרות</button>
    </div>
    </div>)
}

export default MultiTasks;
//https://www.npmjs.com/package/react-calendar