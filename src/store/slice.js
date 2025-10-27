import { createSlice } from "@reduxjs/toolkit";


const initialState={
    status:false,
    userdata:null,
}


export const slice= createSlice({
    name:"auth",
    initialState,

    reducers:{

login:(state,action)=>{
    state.status=true;
    state.userdata=action.payload.userdata;

},

logout:(state)=>{
    state.status=false;
    state.userdata=null;

}

    }
})

export const {login,logout}=slice.actions;

export default slice.reducer;