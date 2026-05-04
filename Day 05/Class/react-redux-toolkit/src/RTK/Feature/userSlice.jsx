import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name : "userSlice",
    initialState : {users:[]},
    reducers :{
        addUser : (state,action)=>{
            console.log(action);
            state = {...state,users:[...state.users,action.payload]};
            return state
        }
    },
})

export let {addUser} = userSlice.actions
export default userSlice.reducer