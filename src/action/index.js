import login from "../api/loginFunctions"
export const fetchUser= (username, password)=>{
    return async function(dispatch){
    const result= await login(username, password)
    dispatch({
        type: "FETCH_USER",
        payload: result
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

