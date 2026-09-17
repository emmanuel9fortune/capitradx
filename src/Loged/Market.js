import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import Chart from './widgets/Chart'
import './market.css'
import { Link } from 'react-router-dom'
import Screen from './widgets/Screener'
import { useSelector } from 'react-redux'
import { selectInfo } from '../features/infoSlice'

function Market() {

    const [view2, setview2] = useState(false)

    const vwref2 = useRef()
  
    useEffect(()=>{
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview2(entry.isIntersecting)
        
      })
      observer.observe(vwref2.current);
    })

    const info = useSelector(selectInfo)

    const numft = new Intl.NumberFormat('en-us')



  return (
    <div className='dashboard'>
        <Header
          vw2={view2}
        />

      <div ref={vwref2} className='marketbod'>
        <div className='marketfstbox'>
            <div className='chartbox1' >
                <Chart/>
            </div>

            <div className='chartpay'>
              <div className='trdbtn'>
                <button className='buybtn' >BUY</button>
                <button className='sellbtn' >SELL</button>
              </div>

              <div className='chartpaybal' >
                <p>Balance</p>
                {
                  info?.userinfo?.balance === 0 ?
                  <p>$0.00</p>
                  :
                  <p>${numft.format(info?.userinfo?.balance)}</p>
                }
              </div>

              <div className='inputui'>
              <input id="outlined-basic" placeholder="Amount"  />
              </div>

              <div className='inputui'>
              <input id="outlined-basic" placeholder="Time(minutes)"  />
              </div>

              <div className='inputui'>
              <input id="outlined-basic" placeholder="Leverage"  />
              </div>

              <Link to='/send' className='fndacc' >FUND ACCOUNT</Link>
            </div>
        </div>

        <div className='screener' >
          <Screen/>
        </div>

      </div>
    </div>
  )
}

export default Market