// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import LandingPage from './Components/User/LandingPage'
// import Header from './Components/User/header'

import { NextUIProvider } from '@nextui-org/react';

import UserLandingPage from './Pages/User/UserLandingPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserSignIn from './Pages/User/UserSignIn';
import UserRegister from './Pages/User/UserRegister';
import UserHomepage from './Pages/User/UserHomepage';
import UserProfile from './Pages/User/UserProfile';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import AdminUserList from './Pages/Admin/AdminUserList';
import EditProfile from './Components/User/EditProfile';
import UserEditProfile from './Pages/User/UserEditProfile';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage';
import AddWorkPage from './Components/User/AddWorkPage';
import AddWorks from './Pages/User/AddWorks';
import UserWorkCard from './Components/User/UserWorkCard';
import UserInbox from './Components/User/UserInbox';
import UsersInbox from './Components/User/UsersInbox';
import AdminPostVerify from './Components/Admin/AdminPostVerify';
import AdminDisplayWork from './Components/Admin/AdminDisplayWork';
import AdminVerifyPage from './Pages/Admin/AdminVerifyPage';


// function App() {
  // const [count, setCount] = useState(0)

  function App() {
    const token = localStorage.getItem('admintoken')
    console.log(token,"**************")

  return (
    <>
    <NextUIProvider>
    <BrowserRouter>
    <Routes>

    <Route  path="/" element={<UserLandingPage />} />
    <Route  path="/signin" element={<UserSignIn />} />
    <Route  path="/register" element={<UserRegister />} />
    <Route  path="/home" element={<UserHomepage />} />
    <Route  path="/profile" element={<UserProfile />} />
    <Route exact path="/dashboard" element={ token ?< AdminDashboardPage/>:<Navigate to={'/admin'}/>} />
    {/* <Route  path="/adminuser" element={<AdminUserList />} /> */}
    <Route  path="/admin" element={<AdminLoginPage />} />
    {/* <Route  path="/editprofile" element={<EditProfile />} /> */}
    <Route  path="/editprofile" element={<UserEditProfile />} />

    <Route  path="/addwork" element={<AddWorks />} />
    <Route  path="/display" element={<UserWorkCard />} />

    <Route  path="/inbox" element={<UserInbox />} />
    <Route  path="/inbox1" element={<UsersInbox />} />


    <Route path="/adminWork" element={<AdminVerifyPage />}/>


    </Routes>
    </BrowserRouter>
    </NextUIProvider>
    {/* <Header/>
    <LandingPage/> */}
    </>
  )
}

export default App
