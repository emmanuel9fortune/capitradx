import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import Story from './widgets/Story'

function Stories() {

    const [view2, setview2] = useState(false)

    const vwref2 = useRef()
  
    useEffect(()=>{
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview2(entry.isIntersecting)
        
      })
      observer.observe(vwref2.current);
    })

  return (
    <div className='dashboard' >
        <Header
            vw4={view2}
        />

        <div ref={vwref2} className='dashboardbod stories'>
            <div className='story'>
            <Story/>
            </div>
        </div>
    </div>
  )
}

export default Stories