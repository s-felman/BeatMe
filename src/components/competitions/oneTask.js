import React from "react"
import CreateProps from "./createProps"
const OneTask=(props)=>{


    return(<div>
       <h1>{props.location.state.cname}</h1>
       <CreateProps></CreateProps>
    </div>)
}

export default OneTask