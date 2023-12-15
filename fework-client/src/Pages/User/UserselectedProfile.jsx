import axios from 'axios'
import React, { useState,useEffect } from 'react'

import { useParams } from 'react-router-dom'
import SelectedUser from '../../Components/User/SelectedUser'
import HomePageHeader from '../../Components/User/HomePageHeader'
import SelectedUserWork from '../../Components/User/SelectedUserWork'
import { baseURL } from '../../Components/Api/Url'

const UserselectedProfile = () => {

    const [userProfile, setuserProfile] = useState([])
    const [userwork, setUserwork] = useState([]);
    const {id} = useParams()
    useEffect (()=>{
        const useProfile = async()=>{

            const response = await axios.get(`${baseURL}account/user_profile_display/${id}`)
            console.log(response,"check")
            setuserProfile(response.data)

        }
        const userwork = async () => {
            const response = await axios.get(
              `${baseURL}account/user-work/${id}`
            );
            console.log(response.data, ">>>>>>>>>>>>this.");
            setUserwork(response.data);
          };
          userwork()
        useProfile()

    },[id])
   
  return (
    <div>
      <HomePageHeader />
      <div className="flex w-screen">
        <div>
        <SelectedUser profile = {userProfile} />
        </div>
        <div className="flex-wrap  gap-10 mt-6 ml-20 ">
          {/* <AddWork /> */}

          <div className=" mt-10">
            
          <SelectedUserWork  works = {userwork} />
          </div>
        </div>
      </div>
    </div>
    // <div>
        
       
        /* <SelectedUser profile = {userProfile} />
        <SelectedUserWork works = {userwork} />
        
    </div> */
  )
}

export default UserselectedProfile