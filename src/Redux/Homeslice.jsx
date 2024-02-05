import apiInstance from'./Helper'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState={pt:[{}],
t:[{}],Ser:[{}],Serdet:[{}],Tmonial:[{}]}
export const Ba=createAsyncThunk("/getbanner",
async()=>{
    let a=await apiInstance.get(`/getbanner`)
    return a?.data;});

    export const Bat=createAsyncThunk("/gettrainer",
async()=>{
    let a2=await apiInstance.get(`/gettrainer`)
    return a2?.data;});

    export const Bas=createAsyncThunk("/getservice",
async()=>{
    let a2=await apiInstance.get(`/getservice`)
    return a2?.data;});

    export const Bass=createAsyncThunk("/getservicedetails",
async(id)=>{
    let a2=await apiInstance.get(`/getservicedetails/${id}`)
    return a2?.data;});

    export const Testm=createAsyncThunk("/gettestimonial",
    async(id)=>{
        let a2=await apiInstance.get(`/gettestimonial`)
        return a2?.data;});
    

export const Homeslice=createSlice({
    name:'Homeslice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(Ba.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Ba.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
             state.pt=payload.data
            // console.log("hapning")
            // console.log(payload.data)
          })
          .addCase(Ba.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          }).addCase(Bat.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Bat.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
             state.t=payload.data
           // console.log("hapning")
           // console.log(state.t)
            // console.log(payload.data)
          })
          .addCase(Bat.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          }).addCase(Bas.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Bas.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
            state.Ser=payload.data
             //state.t=payload.data
            // console.log("hapning")
          })
          .addCase(Bas.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          }).addCase(Bass.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Bass.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
            state.Serdet=payload.data
             //state.t=payload.data
           // console.log("hapning")
          })
          .addCase(Bass.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          }).addCase(Testm.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Testm.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
            state.Tmonial=payload.data
             //state.t=payload.data
           // console.log("hapning")
          })
          .addCase(Testm.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          })
        
        
    }
})
export default Homeslice;
    