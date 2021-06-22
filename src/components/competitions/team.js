import React, { useState } from "react"
import CreateProps from "./createProps"

const Team=(props)=>{

    const [value, setValue] = useState('');



    return (
        <div >
           <h1>{props.location.state.cname}</h1>
           <CreateProps></CreateProps>
        </div>
    );
}
export default Team