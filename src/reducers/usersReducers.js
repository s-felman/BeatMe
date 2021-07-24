const INITIAL_STATE={
    user:[]
}

export const usersReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "FETCH_USER":
        return {...state, user: action.payload}
        case "SAVE_USER":
            return {...state, user: action.payload}
        default:
        return state;
    }
    // if(action.type===)
    // return  action.payload;
    
}