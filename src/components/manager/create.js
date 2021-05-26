import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import NavBar from "../navBar/navBar";
import Type from "./type";
import Team from "../comptitions/team";
import AddUser from "./addUser";


class Create extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    onClick(){

    }
  
    render() {
      return (  
         <div>

         <NavBar></NavBar>
         <label>שם לתחרות</label>
            <input type="text" value={this.state.value} onChange={this.handleChange} ></input><br/>
         <Type cname={this.state.value}></Type>
        
         <button>העלאת קובץ אקסל</button>
         <AddUser selectedType={useState.type1}>הוספת משתמש</AddUser>
         <Link to="">
         <button type="submit" onClick={this.onClick}>המשך</button>
         </Link>
     </div> 
      );
    }
  }

  export default Create;
//https://reactjs.org/docs/forms.html