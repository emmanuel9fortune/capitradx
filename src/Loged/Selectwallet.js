import { Timestamp, addDoc, collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../firebase'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { selectInfo } from '../features/infoSlice'
import Header from './Header'

function Selectwallet() {

    const navigate = useNavigate()

    const [am, setam] = useState([])
    const user = useSelector(selectUser)
  
      useEffect(()=>{
        const unsub = onSnapshot(doc(db, "depodit", user.uid), (doc) => {
          setam(doc.data());
        });
        return ()=>{
            unsub()
        }
      },[user.uid])
  
  
  
  
  
  
  
      const [coin, setcoin] = useState([])
      const [crp, setcrp] = useState('')
  
  
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'
  
      useEffect(()=>{
          axios.get(url).then((reponse)=>{
              setcoin(reponse.data)
          })
      },[])
  
      
  
      useEffect(()=>{
         coin?.map((cn)=>(
          am?.symbol === cn?.symbol ?
                setcrp(cn?.current_price)
              : null
          ))
      },[am?.symbol, coin])
  
      const [wll, setwll] = useState('')
  
      const crypamm = Math.round(am?.amount/crp * 10000)/10000 
  
      const handlesub=async()=>{
        if(wll){
          await updateDoc(doc(db,'depodit', user?.uid),{
            crypamount : crypamm,
            wallet : wll,
            timestamp : Timestamp.now(),
          })
    
          await addDoc(collection(db, 'depositslip'),{
            amount : am?.amount,
            symbol : am?.symbol,
            crypamount : crypamm,
            timestamp : Timestamp.now(),
            email : user?.email,
            status: 'pending',
            uid : user?.uid
          })
    
          navigate('/wallet')
        }else{
          alert('select wallet')
        }
    }
  
    const info = useSelector(selectInfo)
  
  
    const numft = new Intl.NumberFormat('en-us')



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
          <Link to={'/send'} className='minlink' >send funds</Link>
          <Link to='/amount' className='minlink'> \ amount</Link>
          <p> \ select wallet</p>
    </div>
        <div className='fund1' >
          <div className='fund1'>
          <div className='cinp1'>
            
        
            <h2 style={{fontSize:'30px'}}>Amount ({info?.userinfo?.currency}{numft.format(am?.amount)})</h2>
            <small>Send Crypto</small>
            <strong>{Math.round(am?.amount/crp * 10000)/10000} {am?.symbol}</strong>

                <div className='binp1 pp'>
                <div className='bin'>
                        <select onChange={(e)=>setwll(e.target.value)} className='depwal'>
                            <option >Select wallet type</option>
                            <option value={'btc'}>BTC Bitcoin</option>
                            <option value={'eth'}>ETH Etherium</option>
                            <option value={'usdt'}>USD Tether ERC 20</option>
                            {/* <option value={'xrp'}>XRP Ripple</option> */}
                            <option value={'usdc'}>USDC ERC 20</option>
                        </select> 
                        <label>Payment method</label>
                    </div>
              </div>
              <button className='sndbtnfst' onClick={handlesub} >Submit</button>
              </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Selectwallet