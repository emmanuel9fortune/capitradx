import React, { useState } from 'react'
import Header from './Header'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { selectInfo } from '../features/infoSlice'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, db, storage } from '../firebase'
import { v4 } from "uuid";
import { doc, updateDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowDownward, Lock, Logout, Person, Receipt } from '@mui/icons-material'
import { signOut } from 'firebase/auth'
import './profile.css'
import { ToastContainer, toast } from 'react-toastify'


function Profile() {

  const user = useSelector(selectUser)
  const info = useSelector(selectInfo)

    const [img, setimg] = useState(null)

    const handleClick =async(e) =>{
      e.preventDefault()

      if(img !== null){
        if(img !==null){
          const imgRef =  ref(storage,`files/${v4()}`)
          uploadBytes(imgRef,img).then(value=>{
              getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'users', user.uid),{
                   photo : url
                  })
              })
          })
       }
      }

      setimg(null)
      toast('Profile picture uploaded')
     }

     const navigate = useNavigate()

  return (
    <div className='dashboard' >
      <Header/>
      <ToastContainer/>

      <div className='dashboardbod' >
        <div className='profilebod'>
          <div className='userinfo'>
            <Avatar src={img !== null ? URL.createObjectURL(img) : info?.userinfo.photo} id='avatr' />
            <h3>{user.displayName}</h3> 


              <input onChange={(e)=>setimg(e.target.files[0])} accept='image/*' id='fil' type='file' style={{display:'none'}} />
              {
                img !== null ?
                <label onClick={handleClick}>
                <p className='afpr' >Upload photo</p>
              </label>
              :
              <label htmlFor='fil'>
                <p className='bfpr' >Edit photo</p>
              </label>
              }

              <div className='infoprofile'>
                <p>Email : {info?.userinfo?.email}</p>
                <p>PhoneNumber : {info?.userinfo?.phonenum}</p>
                <p>Gender : {info?.userinfo?.gender}</p>
                <p>Country : {info?.userinfo?.country}</p>
              </div>
          </div>
        </div>




        <div className='profilebod'>
            
            <Link  to='/verifyidentification' className='plink'>
              <div >
                <Person/>
              </div>
                <p>Verify Id</p>
            </Link>

          <Link  to='/deposits' className='plink'>
              <div >
                <Receipt/>
              </div>
                <p>Deposits</p>
            </Link>

          <Link  to='/withdraw' className='plink'>
              <div >
                <ArrowDownward/>
              </div>
                <p>Withdraw</p>
            </Link>


           <Link  to='/updatepassword' className='plink'>
              <div >
                <Lock/>
              </div>
                <p>Update Password</p>
            </Link>

            
           <div onClick={()=>{
              signOut(auth)
              navigate('/')
              }} className='plink'>
              <div >
                <Logout/>
              </div>
                <p>Logout</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile