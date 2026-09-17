import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Lottie } from "lottie-react";
import { Link } from 'react-router-dom';
import { selectInfo } from '../features/infoSlice';
import ver4 from '../asset/ver4.json'
import Header from './Header';

function Coinamount() {

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


    const numft = new Intl.NumberFormat('en-us')

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
        
      <div ref={vwref} className='sendbox1' >
        <div className='min_links'>
                <Link to={'/send'} className='minlink' >send funds</Link>
                <p> \ amount</p>
        </div>
        <div className='fund1' >
            <div className='fund2' >
            
                { info?.userinfo?.currency ?
                  <h2 style={{fontSize:'40px'}}>Amount ({info?.userinfo?.currency}{numft.format(am?.amount)})</h2>
                  :
                  <div className='lottie' > 
                    <Lottie style={{width:'40px', color:'#f42f54'}} animationData={ver4}/>
                  </div>
                }
                <small>SELECT PAYMENT METHOD</small>

                <Link  to={'/selectwallet'} className='slecrp' >
                    <p style={{textDecoration:'underline'}}>Send Crypto</p>
                    <small>Send supported crypto currency</small>
                </Link> 
             </div>
        </div>
        </div>
    </div>
  )
}

export default Coinamount