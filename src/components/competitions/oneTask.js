import React, {useEffect, useState} from "react"
import CreateProps from "./createProps";    
import addCompetitonAPI from "../../api/managerFunctions";
import Select from 'react-select';
import "./oneTask.css"

const options = [
  { value: 'חודש', label: 'חודש' },
  { value: 'שבוע', label: 'שבוע' },
  { value: 'יום', label: 'יום' }
]


const OneTask=(props)=>{
    const [details, setDetails]= useState("");
    const [date, setDate]=useState("");
    const [target, setTarget]= useState("");
    
      const comp={
        name: props.location.compProps.name,
        type:  props.location.compProps.type,
        userList:  props.location.compProps.userList,
        details: details,
        target: target,
        targetDate: date
      }
    
      const onchange = (data) => {
        setDetails(data)
    }
        return(<div className="">
          <h1>{props.location.compProps.name}</h1>
            <CreateProps onchange={(e) => { onchange(e) }}></CreateProps>
            <label> יעד סופי</label><br/>
            <input placeholder="פירוט" onChange={event => setTarget(event.target.value)}></input>
            <input placeholder="תאריך" onChange={event => setDate(event.target.value)}></input><br/>
            <label>רוצה לקבל תזכורת אחת ל</label>
            <Select options={options} className="oneTask-select"/>
            <button onClick={()=>{addCompetitonAPI(JSON.stringify(comp))}}>התחל תחרות</button>
    </div>)
}

export default OneTask
//https://react-select.com/home