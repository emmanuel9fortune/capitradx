import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { selectInfo } from '../features/infoSlice'
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

function Paypal() {

    const [view1, setview1] = useState(true)

    const vwref = useRef()
  
    useEffect(()=>{
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview1(entry.isIntersecting)
        
      })
      observer.observe(vwref.current);
    })



    const numft = new Intl.NumberFormat('en-us')
    const user = useSelector(selectUser)
    const info = useSelector(selectInfo)
    const [fst, setfst] = useState('')
    const [sec, setsec] = useState('')
    const [trd, settrd] = useState('')

    const submit=async()=>{
      if(info?.userinfo?.balance > 0 || info?.userinfo?.profit > 0  ){
        if(fst === 'deposit' ){
                if(info?.userinfo?.balance >= parseInt(sec) ){
                    if(fst && sec && trd){
                        const newbalance = info?.userinfo?.balance - parseInt(sec)
                        await updateDoc(doc(db, 'users', user?.uid),{
                            balance : newbalance
                        })
                       await addDoc(collection(db, 'withdrawal'),{
                          amount : sec,
                          paypalemail : trd,
                          from : fst,
                          to : 'Paypal',
                          timestamp : Timestamp.now(),
                          email : user?.email,
                          uid : user?.uid,
                          status: 'pending'
                      })
                        toast.success('Request sent')
                        setfst('')
                        setsec('')
                        settrd('')
                    }else{
                        toast.error('Please enter all fields')
                    }

                }else{
                    toast.error('insufficient Balance')
                    setfst('')
                    setsec('')
                    settrd('')
                }
            }
            
    
    
        if(fst === 'profit' ){
                    if(info?.userinfo?.profit >= parseInt(sec) ){
                        if(fst && sec && trd){
                            const newbalance = info?.userinfo?.profit - parseInt(sec)
                            await updateDoc(doc(db, 'users', user?.uid),{
                                profit : newbalance
                            })

                          await addDoc(collection(db, 'withdrawal'),{
                              amount : sec,
                              paypalemail : trd,
                              from : fst,
                              to : 'Paypal',
                              timestamp : Timestamp.now(),
                              email : user?.email,
                              uid : user?.uid,
                              status: 'pending'
                          })
                            toast.success('Request sent')
                            setfst('')
                            setsec('')
                            settrd('')
                        }else{
                            toast.error('Please enter all fields')
                        }
                    }else{
                        toast.error('insufficient Balance')
                        setfst('')
                        setsec('')
                        settrd('')
                    }
        }


    }else{
        toast.error('insufficient Balance')
        setfst('')
        setsec('')
        settrd('')
    }



        
    }

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
                    <p> \ Paypal</p>
            </div>

            <div className='fund1' >
                <div className='fund2' >
                <div className='binp pp'>
            <div className='bin'>
            <select value={fst} onChange={(e)=>setfst(e.target.value)} className='depwal' style={{backgroundColor:'transparent'}} >
                    <option>select accounts</option>
                    <option value='deposit'>Deposit ({'$' + numft.format(info?.userinfo.balance)}) </option>
                        <option value='profit'>Profit ({'$' + numft.format(info?.userinfo.profit)}) </option>
                    </select>
                </div>
            <div className='bin'>
                    <input type='number' value={sec} placeholder='Amount' onChange={(e)=>setsec(e.target.value)}/>
                </div>
            <div className='bin'>
                    <input value={trd} placeholder='Paypal Email' onChange={(e)=>settrd(e.target.value)} />
                </div>
          </div>
          <button className='sndbtnfst' onClick={submit}>Submit</button>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Paypal