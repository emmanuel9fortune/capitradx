import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import upg from './tradeplans.json'
import min from './minplans.json'
import Planbox from './Planbox'

function Plans() {

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
    <div className='dashboard' >
      <Header vw6={view1}/>

        <div ref={vwref} className='sendbox1' >

        <div className='copdddd'>
          {
            upg.map((upd)=>(
              <Planbox upd={upd}/>
            ))
          }

          {
            min.map((upd)=>(
              <Planbox upd={upd}/>
            ))
          }
        </div>

        </div>
    </div>
  )
}

export default Plans