import React, { useEffect, useRef, useState } from 'react'
import './widthdraw.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import Withslip from './Withslip'

function Withdraw() {
  const [view1, setview1] = useState(true)

    const vwref = useRef()
  
    useEffect(()=>{
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview1(entry.isIntersecting)
        
      })
      observer.observe(vwref.current);
    })


    const [dep, setdep] = useState([])

    useEffect(()=>{
      db.collection('withdrawal').onSnapshot((snapshot)=>
      setdep(
       snapshot.docs.map((doc)=>({
         id: doc.id,
         data : doc.data()
       }))
      )
      )
  },[])
  



  return (
    <div  className='dashboard'>
      <Header
        vw1={view1}
      />
      <div ref={vwref} className='sendbox1' >
      <div className='min_links'>
                <Link to={'/'} className='minlink' >Dashboard</Link>
                <p> \ Withdraw</p>
        </div>
        <div className='fund1' >
            <div className='fund2' >
                  <h2 style={{fontSize:'40px'}}>Withdraw </h2>
                 
                <small> CLICK TO SELECT WITHDRAWAL METHOD</small>

                <Link  to={'/withdrawalmethod'} className='slecrp' >
                    <p style={{textDecoration:'underline'}}>Withdrawal</p>
                    <small>Receive Crypto in various ways </small>
                </Link> 
             </div>
        </div>

        <h3 className='histhd' >WITHDRAW HISTORY</h3>

        { dep?.length > 0 ?
          dep?.sort((a, b)=>( b?.data?.timestamp - a?.data?.timestamp ) ).map(({id, data})=>(
            <Withslip key={id} id={id} cr={data} />
          ))
          : null
        }
      </div>
    </div>
  )
}

export default Withdraw