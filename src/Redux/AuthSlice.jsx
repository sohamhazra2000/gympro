import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "./Helper"




export const reg = createAsyncThunk(
    "/register",
    async(data)=>{
        let res = await apiInstance.post("/register",data);
        let resData = res?.data;
        return resData;
    }
)

export const log = createAsyncThunk(
    "/login",
    async(data)=>{
        let res = await apiInstance.post("/login",data);
        let resData = res?.data;
        return resData;

    }
)

export const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState:[{}],
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(reg.pending, (state,action)=>{
            return (state = {
                ...state,
                status: "pending",
            
              });
        })
        .addCase(reg.fulfilled,(state,{payload})=>{
            return (state = {
                ...state,
                status: "idle",
            
              });
        
        })
        .addCase(reg.rejected,(state,action)=>{
            return (state = {
                ...state,
                status: "regecj",
            
              });
        })
        .addCase(log.pending, (state,action)=>{
            return (state = {
                ...state,
                status: "pending",
            
              });
           })
           .addCase(log.fulfilled,(state,{payload})=>{
            if(payload.token&&payload.data._id){
                localStorage.setItem("token",payload.token);
                localStorage.setItem("id",payload.data._id);
            }
            return (state = {
                ...state,
                status: "idle",
            
              });
               
           })
           .addCase(log.rejected,(state,action)=>{
            return (state = {
                ...state,
                status: "regecj",
            
              });
           })

    }
})

export default AuthSlice;