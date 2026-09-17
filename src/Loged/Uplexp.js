import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { grab } from '../features/grabSlice'

function Uplexp({id,  info:{photo, uid, name, rate, share, email }}) {

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    const disp = () =>{

        dispatch(
            grab({
                grab : {
                    img :photo, 
                    name, 
                    wrate : rate, 
                    pshr : share
                }
            })
        )
    }

    const fstbtn=async()=>{
        await updateDoc(doc(db, 'copy' , id),{
            email : user?.email
        })
    }

    const secbtn=async()=>{
        await updateDoc(doc(db, 'copy' , id),{
            email : ''
        })
    }

  return (
    <>
        {
            user?.uid === uid ?
            <div className='expslip'>
                <div onClick={disp} to={'/expert'} className='exphd' >
                    <img src={photo} alt='' />
                    <div className='exprate'>
                        <h3>{name}</h3>
                        <p>{rate}%</p>
                        <p>{share}%</p>
                    </div>
                </div>
                
                <div className='cpbtn'>
                {
                    user?.email !== email ?
                    <p onClick={fstbtn} >COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={secbtn}>CANCEL</button>
                    </div>
                }
                </div>
            </div>
            : null
        }
    </>
  )
}

export default Uplexp