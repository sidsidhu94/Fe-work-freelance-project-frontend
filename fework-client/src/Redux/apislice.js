import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseQuery=fetchBaseQuery({baseUrl:'http://www.shop-electron.shop'})


export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder)=>({})
})