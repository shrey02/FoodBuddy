import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DATA_URL, DELIVERY_TIME_URL,COST_HIGH_LOW_URL,COST_LOW_HIGH_URL,RATING_URL,RELEVENCE_URL } from "../Constants";

const dataSlice = createSlice({
    name: 'dataUlr',
    initialState:{
        url:DEFAULT_DATA_URL,
    },
    reducers:{
        deliveryTime:(state,action)=>{
              state.url=DELIVERY_TIME_URL
        },
        relevance:(state,action)=>{
            state.url=RELEVENCE_URL
        },
        rating:(state,action)=>{
            state.url=RATING_URL
        },
        costHighToLow:(state,action)=>{
            state.url=COST_HIGH_LOW_URL
        },
        costLowToHigh:(state,action)=>{
            state.url=COST_LOW_HIGH_URL
        },
    }

})

export const {deliveryTime,rating,relevance,costHighToLow,costLowToHigh} = dataSlice.actions;

export default dataSlice.reducer;