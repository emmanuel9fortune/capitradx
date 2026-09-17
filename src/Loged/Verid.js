import { CameraAlt } from '@mui/icons-material'
import React, { useState } from 'react'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { v4 } from "uuid";
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'


function Verid() {

    const [img, setimg] = useState(null)
    const [img2, setimg2] = useState(null)
    const [err, seterr] = useState(false)

    const user = useSelector(selectUser)

    const handleClick =async(e) =>{
      seterr(true)
      e.preventDefault()

      if(img !== null && img2 !== null){
          const imgRef =  ref(storage,`files/${v4()}`)
          uploadBytes(imgRef,img).then(value=>{
              getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'verifyid', user.uid),{
                    photo1 : url
                  })
              })
          })


          const imgRef2 =  ref(storage,`files/${v4()}`)


          uploadBytes(imgRef2,img2).then(value=>{
              getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'verifyid', user.uid),{
                   photo2 : url,
                   status : 'pending'
                  })
              })
          })

          toast.success('id uploaded')

      }else{
        toast.error('upload images')
      }

      setimg(null)
      seterr(false)
     }

  return (
    <div className='dashboard'>
    <Header/>
    <ToastContainer/>
   <div className='sendbox1' >
          <form className='formproof'>
              <div className='imageids'>
              <input id='image' onChange={(e)=>setimg(e.target.files[0])} type='file' />
              <label htmlFor='image'>
                  {
                      img === null ?
                      <div className='imagerecpt'>
                          <img className='receiptimg' src='https://www.login.gov/assets/img/help/id-dos-and-donts/id-do-back.png' alt='' />
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

              <input id='image' onChange={(e)=>setimg2(e.target.files[0])} type='file' />
              <label htmlFor='image'>
                  {
                      img2 === null ?
                      <div className='imagerecpt'>
                          <img className='receiptimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu7JHJwiYrSaRqdOsNYarLBAlcw2m756z4w&usqp=CAU' alt='' />
                          <div className='carmicon'>
                              <CameraAlt/>
                          </div>
                      </div>
                      :
                      <div className='imagerecpt'>
                          <img className='receiptimg' src={URL.createObjectURL(img2)} alt='' />
                          <div className='carmicon'>
                              <CameraAlt/>
                          </div>
                      </div>

                  }
              </label>
              </div>
              <>
                {
                  err && img === null ? 
                    <small style={{color:'red', fontSize:'10px'}}>select an image</small>
                  : null
                }
              </>
              <button className='uploadbtn' onClick={handleClick} >Submit</button>

              <Link to={'/profile'} className='cflink'>Profile</Link>
          </form>
      </div>
  </div>
  )
}

export default Verid