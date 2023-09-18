import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DATA_URL, DELIVERY_TIME_URL,COST_HIGH_LOW_URL,COST_LOW_HIGH_URL,RATING_URL,RELEVENCE_URL } from "../Constants";

const dataSlice = createSlice({
    name: 'dataUlr',
    initialState:{
        url:'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING',
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