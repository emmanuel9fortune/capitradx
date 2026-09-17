import React, { useEffect, useRef, useState } from 'react'
import { db } from '../firebase'
import Header from './Header'
import { Search } from '@mui/icons-material'
import Uplexp from './Uplexp'
import Expslip from './Expslip'
import cp from './expert.json'

function Copytrade() {

    const [inf, setinf] = useState([])

    useEffect(()=>{
        db.collection('copy').onSnapshot((snapshot)=>
        setinf(
        snapshot.docs.map((doc)=>({
        id: doc.id,
        data : doc.data()
        }))
        )
        )
        
    },[])




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
        <Header vw1={view1}/>

        <div ref={vwref} className='sendbox1'>
        <div className='srchbb'>
          <h3>Copy Traders</h3>
          <input placeholder='Search'  />
          <Search id='srchid'/>
        </div>

          <div className='copdddd'>
          { 
                inf?.map(({id, data})=>(
                    <Uplexp key={id} id={id} info={data}  />
                ))
            } 

        {
          cp.map((ex)=>(
            <Expslip ex={ex} />
          ))
        }
        </div>
    </div>
    </div>
  )
}

export default Copytrade