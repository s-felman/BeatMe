const INITIAL_STATE={
    comp:[],
}

export const compReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "ADD_COMPETITION":
        return { ...state, comp: action.payload}
        case "COMPETUTIN_NAME":
        return action.payload
        default:
        return state;
    }
    // if(action.type===)
    // return  action.payload;
    
}