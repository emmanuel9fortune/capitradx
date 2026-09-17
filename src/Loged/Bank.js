import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { selectInfo } from '../features/infoSlice'
import { db } from '../firebase'
import { ToastContainer, toast } from 'react-toastify'

function Bank() {
    const [view1, setview1] = useState(true)

    const vwref = useRef()
  
    useEffect(()=>{
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview1(entry.isIntersecting)
        
      })
      observer.observe(vwref.current);
    })


    const [fst, setfst] = useState('')
    const [sec, setsec] = useState('')
    const [trd, settrd] = useState('')
    const [frt, setfrt] = useState('')
    const [fif, setfif] = useState('')


    const user = useSelector(selectUser)
    const info = useSelector(selectInfo)

    const submit=async()=>{
        if(info?.userinfo?.balance > 0 || info?.userinfo?.profit > 0  ){
            if(fst === 'deposit' ){
                    if(info?.userinfo?.balance >= parseInt(frt) ){
                        if(fst && sec && trd && frt && fif){
                            const newbalance = info?.userinfo?.balance - parseInt(frt)
                            await updateDoc(doc(db, 'users', user?.uid),{
                                balance : newbalance
                            })
                            await addDoc(collection(db, 'withdrawal'),{
                                accnumber : sec,
                                accname : trd,
                                amount : frt,
                                Bankname : fif,
                                from : fst,
                                to : 'Bank',
                                timestamp : Timestamp.now(),
                                email : user?.email,
                                uid : user?.uid,
                                status: 'pending'
                            })
                            toast.success('Request sent')
                            setfst('')
                            setsec('')
                            settrd('')
                            setfrt('')
                            setfif('')
                        }else{
                            toast.error('Please enter all fields')
                        }
                    }else{
                        toast.error('insufficient Balance')
                        setfst('')
                        setsec('')
                        settrd('')
                        setfrt('')
                        setfif('')
                    }
                }
        
        
        
        if(fst === 'profit' ){
                    if(info?.userinfo?.profit >= parseInt(frt) ){
                        if(fst && sec && trd && frt && fif){
                            const newbalance = info?.userinfo?.profit - parseInt(frt)
                            await updateDoc(doc(db, 'users', user?.uid),{
                                profit : newbalance
                            })

                            await addDoc(collection(db, 'withdrawal'),{
                                accnumber : sec,
                                accname : trd,
                                amount : frt,
                                Bankname : fif,
                                from : fst,
                                to : 'Bank',
                                timestamp : Timestamp.now(),
                                email : user?.email,
                                uid : user?.uid,
                                status: 'pending'
                            })
                            toast.success('Request sent')
                            setfst('')
                            setsec('')
                            settrd('')
                            setfrt('')
                            setfif('')
                        }else{
                            toast.error('Please enter all fields')
                        }
                    }else{
                        toast.error('insufficient Balance')
                        setfst('')
                        setsec('')
                        settrd('')
                        setfrt('')
                        setfif('')
                    }
        }


        }else{
            toast.error('insufficient Balance')
            setfst('')
            setsec('')
            settrd('')
            setfrt('')
            setfif('')
        }

        
    }

    const numft = new Intl.NumberFormat('en-us')

  
  





  return (
    <div  className='dashboard'>
      <Header
        vw1={view1}
      />

      <ToastContainer/>

      <div ref={vwref} className='sendbox1' >
            <div className='min_links'>
                    <Link to={'/'} className='minlink' >Dashboard </Link>
                    <Link to={'/withdraw'} className='minlink' > \ Withdraw</Link>
                    <Link to={'/Withdrawalmethod'} className='minlink' > \ Withdrawalmethod</Link>
                    <p> \ bank</p>
            </div>

            <div className='fund1'>
                <div className='fund2' > 
                    
        <small>Withdraw to Bank</small>
        <h3>We may contact you for additional information</h3>

        <div className='binpbod'>
            <div className='binp'>
                <div className='bin'>
                    <select value={fst} style={{backgroundColor:'transparent'}} onChange={(e)=>setfst(e.target.value)} className='depwal' >
                    <option>select accounts</option>
                        <option value='deposit'>Deposit ({'$' + numft.format(info?.userinfo.balance)}) </option>
                        <option value='profit'>Profit ({'$' + numft.format(info?.userinfo.profit)}) </option>
                    </select>
                </div>

                <div className='bin'>
                    <input value={sec} placeholder='Account Number'  onChange={(e)=>setsec(e.target.value)}/>
                    
                </div>

                <div className='bin'>
                    <input value={trd} placeholder='Account Name'  onChange={(e)=>settrd(e.target.value)}/>
                    
                </div>
            </div>

            <div className='binp'>
                <div className='bin'>
                    <input value={frt} placeholder='Amount' type='number'  onChange={(e)=>setfrt(e.target.value)}/>
                    
                </div>

                <div className='bin'>
                    <input value={fif} placeholder='Bank Name'  onChange={(e)=>setfif(e.target.value)} />
                   
                </div>

            </div><br/>

            <button className='sndbtnfst'  onClick={submit}>Submit</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bank