import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name : "userReducer",
    initialState : {
        fullName : "",
        email : "",
        role : "",
    },
    reducers : {
        setFullName : (state,action) => {
            state.fulName = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload
        },
        setRole : (state,action) => {
            state.role = action.payload
        }
    }
})

export const {setFullName, setEmail,setRole} = userReducer.actions;
export default userReducer.reducer;