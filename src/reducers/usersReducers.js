export const usersReducer=(state="", action)=>{
    if(action.type==="FETCH_USER")
    return  action.payload;
    return state;
}