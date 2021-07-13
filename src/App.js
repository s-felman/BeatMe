import React from "react"
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/homePage/homePage';
import SignUp from "./components/signUp/signUp";
import Create from "./components/manager/create";
import Edit from "./components/manager/edit";
import Manager from "./components/manager/manager";
import userLogin from "./components/userLogin/userLogin"
import Participant from "./components/participant/participant";
import CreateProps from "./components/competitions/createProps";
import 'bootstrap/dist/css/bootstrap.min.css';
import OneTask from "./components/competitions/oneTask";
import Votes from "./components/competitions/votes";
import Trivia from "./components/competitions/trivia";
import MultiTasks from "./components/competitions/multiTasks";
import Team from "./components/competitions/team";

import { useEffect } from "react";
import UpdateUser from "./components/user/updateUser";


function App() {

  useEffect(() => {
    fetch("http://localhost:3000/login?user=user1")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
  <div className="App">
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/edit" component={Edit} />
    <Route path="/create" component={Create} />
    <Route path="/manager" component={Manager} />
    <Route path="/team/:cname" component={Team}/>
    <Route path="/userlogin" component={userLogin} />
    <Route path="/participant/:id" component={Participant}/>
    <Route path="/createprops" component={CreateProps} />
    <Route path="/multitasks/:cname" component={MultiTasks} /> 
    <Route path="/onetask/:cname" component={OneTask} />
    <Route path="/trivia/:cname" component={Trivia} />
    <Route path="/votes/:cname" component={Votes} />
    <Route path="/users/:id" component={Participant} />
    <Route path="/updateUser" component={UpdateUser} />
  </Switch>


    </div>
  );
}
export default App