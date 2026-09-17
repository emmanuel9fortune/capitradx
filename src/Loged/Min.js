import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import ReactPlayer from 'react-player'
import './mine.css'
import { TextField } from '@mui/material'
import Symbolinfo from './widgets/Symbolinfo'

function Min() {

    const vwref = useRef()
    const [view1, setview1] = useState(true)


  useEffect(()=>{
    const observer = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview1(entry.isIntersecting)
      
    })
    observer.observe(vwref.current);
  },[])


  return (
    <div  className='dashboard' >
        <Header
            vw3={view1}
        />
        <div ref={vwref} className='dashboardbod minebd'>
            <div className='videoplayer'>
                <div className='youtube1'>
                <ReactPlayer  className='youtube' url='https://youtu.be/GmOzih6I1zs?si=F6ZVfmejL7BbJCI2' controls />
                </div>
            </div>

            <div className='minebod'>
                <div className='minebox'>
                    <p>$0.00</p>
                    <TextField   label="contact address" variant="outlined" />
                    <button className='minbtn'>Mine</button>
                    {/* <button className='minbtn1'>Mine</button> */}
                </div>

                <div className='mineanalysis'>
                    <Symbolinfo/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Min