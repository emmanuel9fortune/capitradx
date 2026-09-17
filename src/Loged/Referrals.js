import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { CopyAll } from '@mui/icons-material'

function Refferals() {

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
        <Header vw5={view1}/>

        <div ref={vwref}className='sendbox1' >
            <div className='fund1' >
            <div className='fund2' >
             <div className='blan reff'  >
                <h3>$0.00</h3>
                </div>

                <div className='wallinfo refff'>
                    
                <div className='blan_btn'>
                <Link to={'/withdraw'} className='pricelnk'>WITHDRAW</Link>
                </div>

                <div className='walllink' >
                    <p>https://Capitradx.com/refferal_signup?user=467</p>
                    <div className='copy'>
                    <CopyAll style={{cursor:'pointer'}} onClick={()=>{ 
                    navigator.clipboard.writeText('https://Capitradx.com/refferal_signup?user=467')
                    alert('copied')
                    }}/>
                    </div>
                </div>
                </div>
            </div>

            <div className='refe'>
            <div >
                <small>No Referral Yet</small>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Refferals