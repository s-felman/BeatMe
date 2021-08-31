import login from "../api/loginFunctions";
export const fetchUser= (username, password)=>{
    return function(dispatch){
        login(username, password).then((result)=>{
            console.log("result in fetch",result);
            localStorage.setItem("user", JSON.stringify(result));
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
export const addCompetition=(props)=>{
    return function (dispatch) {
        dispatch({
            type: "ADD_COMPETITION",
            payload: props
     })
     
       }}
export const compNmae =(name)=>{
    return{
        type:'COMPETUTIN_NAME' ,
        payloud:name

    }
}

    // return function(dispatch){
    //     login(username, password).then((result)=>{
    //         console.log("result in fetch",result);
    //         localStorage.setItem("user", JSON.stringify(result));
             
    //     }).then((data)=>{
    //             dispatch({
    //            type: "FETCH_USER",
    //            payload: data
    //     })
    //    }).catch(()=>{
    //         console.log("catch");
    //        dispatch({
    //            type: "LOGIN_ERROR"
    //        })  
    //     })
    //        }}
    
//  login(username, password).then((res)=>{
//      console.log("result in fetchhh",res);
//      //const resJSON=result.json();
//      //console.log("result in fetchhh",resJSON);
//      //localStorage.setItem("user", resJSON);
// return function(dispatch){
//     dispatch({
//         type: "FETCH_USER",
//         payload: res
//  })
// .catch(()=>{
//      console.log("catch");
//     dispatch({
//         type: "LOGIN_ERROR"
//     })  
//  })
// }})
// }
