import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import dataService from './dataService'
import { startTransition } from 'react';


const initialState={
    datas:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
};

export const createData =createAsyncThunk(
    'data/create',
    async(employeeData,thunkAPI)=>{

        try{
            const token=thunkAPI.getState().auth.user.token;
            console.log(token)
            return await dataService.createData(employeeData,token);
        }catch(error){
            const message= (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getData =createAsyncThunk(
    'data/get', async(_,thunkAPI)=>{
      try{
            const token=thunkAPI.getState().auth.user.token;
            return await dataService.getData(token);
        }catch(error){
            const message= (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const updateData =createAsyncThunk(
    'data/update', async(id,thunkAPI)=>{
      try{
            const token=thunkAPI.getState().auth.user.token;
            return await dataService.updateData(id,token);
        }catch(error){
            const message= (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteData =createAsyncThunk(
    'data/delete', async(id,thunkAPI)=>{
      try{
            const token=thunkAPI.getState().auth.user.token;
            return await dataService.deleteData(id,token);
        }catch(error){
            const message= (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const dataSlice=createSlice({
    name:'datas',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        
    },

    extraReducers:(builder)=>{
        builder
        .addCase(createData.pending,(state)=>{
            startTransition.isLoading=true
            
        }).addCase(createData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.datas.push(action.payload)

        }).addCase(createData.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload

        })
        .addCase(getData.pending,(state)=>{
            startTransition.isLoading=true
            
        }).addCase(getData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.datas=(action.payload)

        }).addCase(getData.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload

        })
        .addCase(updateData.pending,(state)=>{
            startTransition.isLoading=true
            
        }).addCase(updateData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.datas=state.datas.map((datas)=>datas.id === action.payload.id ? action.payload : datas)
            // state.taskList=state.taskList.map((tasks)=>tasks.id === action.payload.id ? action.payload :tasks)

        }).addCase(updateData.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })
        .addCase(deleteData.pending,(state)=>{
            startTransition.isLoading=true
            
        }).addCase(deleteData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.datas=state.datas.filter(
                (data)=>data._id !== action.payload.id
            )

        }).addCase(deleteData.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload

        })
       
       


    }

});

export const {reset}=dataSlice.actions;
export default dataSlice.reducer;

