import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../firebase'
import { v4 } from "uuid";
import { doc, updateDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { CameraAlt } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'


function Uploadproof() {
    const [img, setimg] = useState(null)
    const [err, seterr] = useState(false)

    const user = useSelector(selectUser)

    const handleClick =async(e) =>{
      seterr(true)
      e.preventDefault()

      if(img !== null){
        if(img !==null){
          const imgRef =  ref(storage,`files/${v4()}`)
          uploadBytes(imgRef,img).then(value=>{
              getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'depodit', user.uid),{
                   photo : url
                  })
              })
          })
       }
      }

      setimg(null)
      seterr(false)
      toast.success('payment proof uploaded')
     }

     const [view1, setview1] = useState(true)

     const vwref = useRef()
   
     useEffect(()=>{
       const observer = new IntersectionObserver((e)=>{
         const entry = e[0]
         setview1(entry.isIntersecting)
         
       })
       observer.observe(vwref.current);
     })
 
 
 
 
 
 
 
   
 
   return (
     <div className='dashboard'>
      <Header
         vw1={view1}
      />
      <ToastContainer/>
     <div ref={vwref} className='sendbox1' >
            <form className='formproof'>
                <input id='image' onChange={(e)=>setimg(e.target.files[0])} type='file' />
                <label htmlFor='image'>
                    {
                        img === null ?
                        <div className='imagerecpt'>
                            <img className='receiptimg' src='https://assets-global.website-files.com/61184e1ece4c7506c48aa762/615e400205b27c0f49b401f4_video%20thumbnail%20x2_v6.3.png' alt='' />
                            <div className='carmicon'>
                                <CameraAlt/>
                            </div>
                        </div>
                        :
                        <div className='imagerecpt'>
                            <img className='receiptimg' src={URL.createObjectURL(img)} alt='' />
                            <div className='carmicon'>
                                <CameraAlt/>
                            </div>
                        </div>

                    }
                </label>
                <>
                  {
                    err && img === null ? 
                      <small style={{color:'red', fontSize:'10px'}}>select an image</small>
                    : null
                  }
                </>
                <button className='uploadbtn' onClick={handleClick} >Submit</button>

                <Link to={'/deposits'} className='cflink'>My Deposits</Link>
                <Link to={'/'} className='cflink'>My Dashboard</Link>
            </form>
        </div>
    </div>
  )
}

export default Uploadproof