import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Avatar } from '@mui/material'
import Stockmarket from './widgets/Stockmarket'
import './dashboard.css'
import Calender from './widgets/Calender'
import { ArrowBackIos, ArrowDownward, ArrowForwardIos, ArrowUpward, Groups3Outlined, History, Receipt } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Symbolinfo from './widgets/Symbolinfo'
import { useSelector } from 'react-redux'
import { selectInfo } from '../features/infoSlice'
import Notver from './Notver'
import { selectUser } from '../features/userSlice'
import Vwexptrade from './Vwexptrade'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'


function Dashboard() {

  const user = useSelector(selectUser)

  const [view1, setview1] = useState(true)

  const vwref = useRef()

  useEffect(()=>{
    if( user.ver ){
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview1(entry.isIntersecting)
        
      })
      observer.observe(vwref.current);
    }
  })


  const info = useSelector(selectInfo)

  const numft = new Intl.NumberFormat('en-us')

  useEffect(()=>{
    localStorage.setItem('pos', 0)
    localStorage.setItem('pos1', 0)
  }, [])



  const [pops, setpops] = useState(false)


  const poptrader =()=>{
    pops ? setpops(false) : setpops(true)
  }


  const [userr, setuserr] = useState([])

  useEffect(()=>{
      const func =()=>{
          const unsub = onSnapshot(doc(db, "traders", user?.uid), (doc) => {
              setuserr(doc.data());
            });
        
            return ()=>{
              unsub()
            }
      }
  
      user?.uid && func()
      
    },[user?.uid])




  return (
    <>
      {
        user.ver ?
        <div className='dashboard'>
      <Header
          vw1={view1}
      />

      <div ref={vwref} className='dashboardbod'>
        <div className='balancebod'>
            <div className='userhdprofilelnk'>
              <Link to={'/profile'} className='dashboardavtr'>
                <Avatar src={info?.userinfo?.photo} />
                <div className='userboxprofile'>
                  <p>{info?.userinfo?.displayName}</p>
                  <small>view profile</small>
                </div>
              </Link>

              <Link to='/copytraders' className='copytradelnk'>
                <Groups3Outlined/>
                <p> traders</p>
              </Link>
            </div>

            <div className='dashboardprice'>
              <div>
                <p>Balance</p>
                {
                  !info?.userinfo?.balance ?
                  <p>$0.00</p>
                  :
                  <p>${numft.format(info?.userinfo?.balance)}</p>
                }
              </div>


              <div>
                <p>profit</p>
                {
                  !info?.userinfo?.profit ?
                  <p>$0.00</p>
                  :
                  <p>${numft.format(info?.userinfo?.profit)}</p>
                }
              </div>
            </div>

            <div className='dashminilinks' >
              <Link to='/send' className='dashminilink' >
                <ArrowUpward/>
                <small>Deposit</small>
              </Link>
              
              <Link to='/withdraw' className='dashminilink'>
                <ArrowDownward/>
                <small>Withdraw</small>
              </Link>

              <Link to='/uploadproof' className='dashminilink'>
                <Receipt/>
                <small>Receipt</small> 
              </Link>

              <Link to='/deposits' className='dashminilink'>
                <History/>
                <small>History</small>
              </Link>
            </div>

            <div className='forexcrossrate'>
              <Symbolinfo/> 
            </div>
        </div>


        <div className='tradeviews'>
            <div className='widget'>
              <Stockmarket/>
            </div>

            <div className='widget'>
              <Calender/>
            </div>
        </div>
      </div>
              {/* <Bottom/> */}


              {/* <div onClick={poptrader} className='arrowtrds'>
                <ArrowForwardIos/>
              </div> */}

              {/* {
                pops ?
                <div className='poptraders' data-aos ='fade-right'>
                  <div className='innerpoptrader'>
                    <h3>Recent Trades</h3>

                    { userr ?
                        Object.keys(userr).length !== 0 ?
                        Object.entries(userr)?.sort((a,b)=>b[1]?.uploaded?.time - a[1]?.uploaded?.time ).map((frnd)=>(
                            <Vwexptrade key={frnd[1]?.uploaded?.email} frnds={frnd} />
                        ))
                        :
                        <div className='emptcont'>
                            <p>Loading..</p>
                        </div>
                        :
                        <div className='emptcont'>
                            <p>No current Trades</p>
                        </div>
                    }

                    <div onClick={poptrader} className='arrowbacktrader'>
                      <ArrowBackIos/>
                    </div>
                  </div>
              </div>
              :
              null
              } */}
        </div>   
        :
        <Notver  /> 
      }
    </>
  )
}

export default Dashboard