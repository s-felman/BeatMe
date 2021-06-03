import React from "react"
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/homePage/homePage';
import SignUp from "./components/signUp/signUp";
import Create from "./components/manager/create";
import Edit from "./components/manager/edit";
import Manager from "./components/manager/manager";
import userLogin from "./components/userLogin/userLogin"
import participant from "./components/participant/participant";
import CreateProps from "./components/comptitions/createProps";
import 'bootstrap/dist/css/bootstrap.min.css';

import OneTask from "./components/comptitions/oneTask";
import Votes from "./components/comptitions/votes";
import Trivia from "./components/comptitions/trivia";
import MultiTasks from "./components/comptitions/multiTasks";
import Team from "./components/comptitions/team";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
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
    <Route path="/participant" component={participant} />
    <Route path="/createprops" component={CreateProps} />
    <Route path="/multitasks/:cname" component={MultiTasks} /> 
    <Route path="/onetask/:cname" component={OneTask} />
    <Route path="/trivia/:cname" component={Trivia} />
    <Route path="/votes/:cname" component={Votes} />

  </Switch>

    </div>
  );
}

export default App;
