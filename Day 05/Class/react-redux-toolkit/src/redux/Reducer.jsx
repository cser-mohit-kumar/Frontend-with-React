let intialState = {user:[]}

import { fetchUser,addUser,pendingUser,removeUser } from "./Action"
import { apiInstance } from "./AxiosInnstance"

export let fetchAPI=  ()=>{
    return async(dispatch)=>{
        dispatch(pendingUser)
        let res = await apiInstance.get("/users")
        console.log(res);
        
        dispatch(fetchUser(res.data))
    }
}

export function reduceruser(state=intialState, action){
    switch(action.type)
    {
        case "AddUSER": return 
        case "PENDING": return {...state, loading:true}
        case "GetUSER": return{...state, loading:false,user:[...action.payload]} 
        case "REMOVEUSER":  return 
        default: return state 
    }
}