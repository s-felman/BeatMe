import React, { useState } from "react";


const CreateProps=(props)=>{


 const [img, setImg]= useState("");

 const handleChange = event => {
    props.onchange(event.target.value);
}
    return(
        <div>
           <textarea  onChange= {handleChange} placeholder="קצת פרטים"></textarea><br/>
           <button onClick={()=>{setImg()}} >העלאת סרטון\תמונה</button><br/>

        </div>
    )
}
export default CreateProps;