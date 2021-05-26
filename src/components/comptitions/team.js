import React from "react"

const Team=()=>{


    return(
        <div>
            <label required>שם לפרויקט</label>
              <input type="text" ></input><br/>
              <label>פרטי תחרות</label>
              <input type="text" ></input><br/>
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