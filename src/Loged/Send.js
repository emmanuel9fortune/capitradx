import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectUser } from '../features/userSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { selectInfo } from '../features/infoSlice'
import Header from './Header'
import './send.css'


function Send() {
  const navigate = useNavigate()

  const user = useSelector(selectUser)

  const [fst, setfst] = useState('')
  const [sec, setsec] = useState('')
  const [trd, settrd] = useState(false)


  


  const handlesub=async()=>{
          settrd(true)
      if(fst >= 100 && fst !== '' && sec !== ''){
          await updateDoc(doc(db,'depodit', user?.uid),{
              amount : fst,
              symbol : sec
          })
           navigate('/amount')
      }
  }

  const info = useSelector(selectInfo)


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

      <div  ref={vwref} className='sendbox1' >
      
      <div className='min_links'>
          <Link to={'/'} className='minlink' >dashboard</Link>
          <p> \ send</p>
      </div>

      <div className='fund1'>
      <div className='cinp1'>
      
      <h2>Fund Account</h2>

      <Link to={'/plans'} className='pricelnk' >
          <p>VIEW PRICING</p>
      </Link>

          <div className='binp1 pp'>
          <div className='bin'>
                  <input onChange={(e)=>setfst(e.target.value)} placeholder='Amount not be less than $100' />
                  <label style={{color:'white'}} >Amount</label>
                  {
                      trd && fst < 100  && fst !== ''? 
                      <small style={{color:'red', fontSize:'10px'}}>Amount must be more than {info?.userinfo?.currency}100</small>
                      :
                      null
                  }
                  {
                      trd && fst === '' ? 
                      <small style={{color:'red', fontSize:'10px'}}>Must enter an amount</small>
                      :
                      null
                  }
              </div> 
          <div className='bin'>
                  <select onChange={(e)=>setsec(e.target.value)} className='depwal'>
                      <option >Select trade</option>
                      <option value='btc' >BTC Trading</option>
                      <option value={'eth'}>ETH Trading</option>
                      <option value={'usdt'} >USDT Trading</option>
                      <option value={'xrp'} >XRP Trading</option>
                  </select>
                  <label style={{color:'white'}} >Trade</label>
                  {
                      trd && sec === '' ? 
                      <small style={{color:'red', fontSize:'10px'}}>Must select a trade</small>
                      :
                      null
                  }
              </div>
        </div>
        <button className='sndbtnfst' onClick={handlesub}>
          {
            fst >= 100 && fst !== '' && sec !== '' ?
            <Link style={{textDecoration:'none', color:'white'}} to={'/amount'} >Submit</Link>
            :
            'Submit'
          }
        </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Send