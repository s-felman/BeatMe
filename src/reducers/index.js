import {combineReducers} from "redux"

const changeLink=(action)=>{
    if(action.type==='ONE_TASK')
    return action.payloud
    if(action.type==='MULTI_TASKS')
    return action.payloud
    if(action.type==='TEAM')
    return action.payloud
    if(action.type==='TRIVIA')
    return action.payloud
    if(action.type==='VOTES')
    return action.payloud
   
}

export default combineReducers({
    competition: changeLink
})