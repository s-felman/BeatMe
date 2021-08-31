import {combineReducers} from "redux"
import {usersReducer} from "./usersReducers"
import {compReducer} from "./competitionReducers"

export default combineReducers({
user: usersReducer,
comp: compReducer,

})
// const changeLink=(action, state)=>{
//     if(action.type==='ONE_TASK')
//     return action.payloud
//     if(action.type==='MULTI_TASKS')
//     return action.payloud
//     if(action.type==='TEAM')
//     return action.payloud
//     if(action.type==='TRIVIA')
//     return action.payloud
//     if(action.type==='VOTES')
//     return action.payloud
    
   
// }
// const userDetails=(state, action)=>{
//     if(action.type=='USER')
//     state.user=action.payloud
//     break;
// }

