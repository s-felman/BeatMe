import login from "../api/loginFunctions";
export const fetchUser= (username, password)=>{
    return function(dispatch){
 login(username, password).then((result)=>{
     console.log("result in fetch",result);
     localStorage.setItem("user", JSON.parse(result));
       dispatch({
        type: "FETCH_USER",
        payload: result
 })
}).catch(()=>{
     console.log("catch");
    dispatch({
        type: "LOGIN_ERROR"
    })  
 })
    }}
export const oneTask =()=>{
    return{
        type:'ONE_TASK' ,
        payloud:"/onetask"

    }
}

export const multiTasks =()=>{
    return{
        type:'MULTI_TASKS' ,
        payloud:"/multitasks"

    }
}

export const team =()=>{
    return{
        type:'TEAM' ,
        payloud:"/team"

    }
}

export const trivia =()=>{
    return{
        type:'TRIVIA' ,
        payloud:"/trivia"

    }
}

export const votes =()=>{
    return{
        type:'VOTES' ,
        payloud:"/votes"

    }
}

