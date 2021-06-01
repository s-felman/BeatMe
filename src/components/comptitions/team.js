import React, { useState, Component } from "react"
import Create from "../manager/create";

const Team=(props)=>{

    const [value, setValue] = useState('');

    const onchange = (data) => {
        setValue(data)
        console.log("Form>", data);
    }
    function componentDidMount() {
        console.log("received "+this.props.location.state);
    }

    return (
        <div >
            
           <label>{props.location.state}</label>
        </div>
    );
}
export default Team