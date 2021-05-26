import React from "react"

const Team=(props)=>{

var a= props.cname;
    return(
        <div>
            <h2>{a}</h2>
              <label>פרטי תחרות</label><br/>
              <textarea type="text" ></textarea>
              <br/>
              <label>שם משתמש להוספה</label>
              <input type="text" ></input><br/>
             
              <label>כתובת מייל</label>
              <input type="email" ></input><br/>
              <label>סיסמא</label>
              <input type="password" ></input><br/>
           
              <button type="submit">אישור </button>
        </div>
    )
}
export default Team