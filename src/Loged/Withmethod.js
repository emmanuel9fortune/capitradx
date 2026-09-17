import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Withmethod() {

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
    <div  className='dashboard'>
      <Header
        vw1={view1}
      />
      <div ref={vwref} className='sendbox1' >
      <div className='min_links'>
                <Link to={'/'} className='minlink' >Dashboard </Link>
                <Link to={'/withdraw'} className='minlink' > \ Withdraw</Link>
                <p> \ Withdrawalmethod</p>
        </div>


       <div className='fund1'>
            <div className='fund2' > 
                <h3>SELECT WITHDRAWAL METHOD</h3>
                <Link to='/bank' className='whlink'>
                    <p>Bank</p>
                </Link>
                <Link to='/crypto' className='whlink'>
                    <p>Crypto</p>
                </Link>
                <Link to='/paypal' className='whlink'>
                    <p>Paypal</p>
                </Link>
                <Link to='/cashapp' className='whlink'>
                    <p>CashApp</p>
                </Link>
            </div>
       </div>
     </div>
    </div>
  )
}

export default Withmethod