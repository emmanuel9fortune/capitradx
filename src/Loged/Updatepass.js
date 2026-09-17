import React, { useState } from 'react'
import Header from './Header'
import { sendPasswordResetEmail } from 'firebase/auth'
import { dbauth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify'

function Updatepass() {

    const [fst , setfst] = useState('')

    const Register=()=>{
        const email =fst

        sendPasswordResetEmail(dbauth, email).then((data)=>{
          toast.success('password reset link sent')
        }).catch((err)=>{
        toast.error(err.message)
        })
    }

  return (
    <div className='dashboard'>
        <Header/>
        <ToastContainer/>
        <div className='sendbox1' >
        <div className='loginbod' >

        <div className='loginputs'>
          <div className='loginput'>
            <p>Enter Email</p>
            <input onChange={setfst} placeholder='Enter Email Address' />
          </div>

          <div className='loginbtns frgt'>
            <button onClick={Register} className='logbtn' >RESET</button>
          </div>
           
        </div>
    </div>
        </div>
    </div>
  )
}

export default Updatepass