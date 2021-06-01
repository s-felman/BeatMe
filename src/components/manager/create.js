import React, { useState, Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import NavBar from "../navBar/navBar";
import Type from "./type";
import Team from "../comptitions/team";
import AddUser from "./addUser";
import Type2 from "./type2";


//class Create extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {value: ''};

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {
//   this.setState({value: event.target.value});
//   console.log({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }

const Create = (props) => {

  const [value, setValue] = useState('');
  const [cname, setCname] = useState('');

  const onchange = (data) => {
    setValue(data)
    console.log("from type2", data);
  }

  const setCname1=(event)=>{
    setCname(event.target.value);
    console.log("cname", cname)
  }

  // render() {
  return (
    <div>

      <NavBar></NavBar>
      <label>שם לתחרות</label>
      <input type="text" placeholder="name"
        id="name"
        onChange={setCname1}  ></input><br />
      <Type2 data={value} onchange={(e) => { onchange(e) }} ></Type2>
      <button>העלאת קובץ אקסל</button>
      <AddUser selectedType={useState.type1} cname={cname}>הוספת משתמש</AddUser>
      <Link to={{
        pathname: `${value}/${cname}`,
        state: {cname: cname }}}>
        <button type="submit" >המשך</button>
      </Link>
    </div>
  );
}


export default Create;
//https://reactjs.org/docs/forms.html
//https://dev.to/muhammadawaisshaikh/how-to-get-an-updated-state-of-child-component-in-the-parent-component-using-the-callback-method-1i5