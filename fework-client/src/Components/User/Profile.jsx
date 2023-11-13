import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'



const Profile = () => {

  const [userprofile, setUserprofile] = useState([])

  const { userInfo } = useSelector((state)=>state.user)
  const userId = userInfo?.user_id
  console.log(userId)
  
  useEffect (()=>{
    const userprofile = async()=>{
      const response = await axios.get(`http://127.0.0.1:8000/api/account/user_profile_display/${userId}`)
      console.log(response,">>>>>>>>>>>>.")
      setUserprofile(response.data)
    }
    userprofile()
  },[])
  console.log(userprofile,"sdcsadkvhgiuyvg")
  console.log(userprofile.profile_pic,"hello ......................here")

  
  
 


  return (
    <>
    <div className="basis-[16%]">
    <div className="border border-stone-200 h-96 w-72 mt-16 ml-5 p-5 overflow-hidden drop-shadow rounded-lg">
      
      <div className=" h-24 w-full">
        <div className="avatar">
          <div className="w-24 rounded-full ml-20 ">
          
            
            <img src = {userprofile.profile_pic}
            
            onError={() => console.log("Image failed to load")}
            />
          </div>
        </div>
      </div>
      <div >
        <h1 className="font-bold text-center text-cyan-700  mt-5 " style={{ textTransform: 'uppercase' }} >{userprofile.username}</h1>
      </div>
      <div >
        <h1 className="font-bold text-center  text-cyan-700 mt-2" style={{ textTransform: 'uppercase' }}>{userprofile.country}</h1>
      </div>
      <p className="line-clamp-3 text-center text-zinc-500" style={{ textTransform: 'uppercase' }}>{userprofile.description}</p>
      <p className="line-clamp-3 text-center text-zinc-500" style={{ textTransform: 'uppercase' }}>Skill:{userprofile.skills}</p>
      <button className="btn btn-wide mt-3 bg-cyan-700 btn-circle text-cyan-500">Follow</button>
      <button className="btn btn-wide mt-3 bg-zinc-300 btn-circle ">Message</button>
      
    </div>
   
    <div className="border border-stone-200 h-36 w-72  ml-5 p-5 mt-7 overflow-hidden drop-shadow rounded-lg" >
        <div className="flex justify-between">
        <p className="text-zinc-500">Appreciation  </p>
        <p className="text-zinc-500">100k</p>
        </div>
        <div className="flex justify-between mt-3">
        <p className="text-zinc-500">Followers</p>
        <p className="text-zinc-500">5k</p>
        </div>
        <div className="flex justify-between mt-3">
        <p className="text-zinc-500">Following</p>
        <p className="text-zinc-500">500</p>
        </div>
        
        
        

    </div>
    <button className="btn btn-wide mt-3 ml-8 bg-cyan-700 btn-circle text-cyan-500">Unlock Premuim</button>
    </div >
    
    </>
  );
};

export default Profile;
