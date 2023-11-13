import { apiSlice } from "./apislice"
 
const USERS_URL = "http://127.0.0.1:8000/api/account"

export const userapislice = apiSlice.injectEndpoints({
   endpoints:(builder) =>({
       login : builder.mutation({
           query:(data)=>({
               url : `${USERS_URL}/login/`,
               method : 'POST',
               body : data
           })
       }),
       logout : builder.mutation({
           query:()=>({
               url : `${USERS_URL}/userlogout/`,
               method : 'POST',
              
           })
       }),
   })
})

export const {useLoginMutation,useLogoutMutation}=userapislice