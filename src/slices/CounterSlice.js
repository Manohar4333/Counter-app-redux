import {createSlice } from '@reduxjs/toolkit'


export const counterSlicer = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state) =>{
            state.value -=1;

        },
        incrementByValue:(state,action) =>{
            state.value += action.payload;
        }
    }
})


export const {increment, decrement, incrementByValue} = counterSlicer.actions;

export default counterSlicer.reducer;