import React, { useEffect, useState } from 'react'
import Connection from './Connection'
import { AutoGraph, BarChart, Dashboard, Menu, Newspaper, Notifications, PriceChange, Wifi } from '@mui/icons-material'
import './header.css'
import { Link } from 'react-router-dom'
import Notification from './Notification'
import { Avatar } from '@mui/material'
import { db } from '../firebase'
import lg from '../img/logo.png'
import { useSelector } from 'react-redux'
import { doc, onSnapshot } from 'firebase/firestore'
import { selectUser } from '../features/userSlice'


function Header({vw1, vw2, vw3, vw4, vw5, vw6}) {

    const [not, setnot] = useState(false)

    const notclick =()=>{
        not ? setnot(false) : setnot(true)
    }

    const [menu, setmenu] = useState(false)

    const menuclick =()=>{
        menu ? setmenu(false) : setmenu(true)
    }

    const user = useSelector(selectUser)

    const [gen, setgen] = useState([])


    const [not1, setnot1] = useState([])
  
      useEffect(()=>{
          const func =()=>{
              const unsub = onSnapshot(doc(db, "personalnot",user.uid), (doc) => {
                  setnot1(doc.data());
                });
            
                return ()=>{
                  unsub()
                }
          }
      
          user.uid && func()
          
        },[user.uid])


    useEffect(()=>{
        const arr=[]

         if(not1){
          Object?.entries(not1)?.map((vl)=>{
            return arr.push({
             title : vl[1]?.title, 
             message : vl[1]?.message, 
             timestamp : vl[1]?.timestamp ,
            });
         })
         }

         setgen(arr)  
    }, [not1])





  return (
    <div className='loggedhd'>       

        <div className='loghd'>

            <div className='loghd1'>
                <div onClick={menuclick} className='menudiv'>   
                    <Menu/>
                </div>

                <img style={{width:'4em', height:'4em'}}  src={lg} alt='' />
            </div>

            <div className='logedhdlinks'>
                <Link to='/' className={vw1 ? 'logedhdlink1' : 'logedhdlink'}>
                    <Dashboard/>
                    Dashboard
                </Link>
                <Link to={'/mining'} className={vw3 ? 'logedhdlink1' : 'logedhdlink'}>
                    <AutoGraph/>
                    Mining
                </Link>
                <Link to='/market' className={vw2 ? 'logedhdlink1' : 'logedhdlink'}>
                    <BarChart/>
                    Market
                </Link>
                <Link to='/story' className={vw4 ? 'logedhdlink1' : 'logedhdlink'}>
                    <Newspaper/>
                    Story
                </Link>
                {/* <Link to='/refferals'className={vw5 ? 'logedhdlink1' : 'logedhdlink'}>
                    <Share/>
                    <p>Referrals</p>
                </Link> */}
                <Link to='/plans' className={vw6 ? 'logedhdlink1' : 'logedhdlink'}>
                    <PriceChange/>
                    <p>Plans</p>
                </Link>
            </div>

           {
            menu ?
            <div onClick={menuclick} className='menublock' >
                <div className='menubar'>
                    <div className='menubarhd'>
                    <Link className='dashboardavtr'>
                        <Avatar/>
                        <div className='userboxprofile'>
                        <p>user name</p>
                        <small>view profile</small>
                        </div>
                    </Link>
                    </div>

                    <div className='menubarlinks' >
                    <Link to='/' className={vw1 ? 'mologedhdlink1' : 'mologedhdlink'}>
                        <Dashboard/>
                        <p>Dashboard</p> 
                    </Link>
                    <Link to={'/mining'} className={vw3 ? 'mologedhdlink1' : 'mologedhdlink'}>
                        <AutoGraph/>
                        <p>Mining</p>
                    </Link>
                    <Link to='/market' className={vw2 ? 'mologedhdlink1' : 'mologedhdlink'}>
                        <BarChart/>
                        <p>Market</p>
                    </Link>
                    <Link to='/story' className={vw4 ? 'mologedhdlink1' : 'mologedhdlink'}>
                        <Newspaper/>
                        <p>Story</p>
                    </Link>
                    {/* <Link to='/referrals' className={vw5 ? 'mologedhdlink1' : 'mologedhdlink'}>
                        <Share/>
                        <p>Referrals</p>
                    </Link> */}
                    <Link to='/plans' className={vw6 ? 'mologedhdlink1' : 'mologedhdlink'}>
                        <PriceChange/>
                        <p>Plans</p>
                    </Link>
                    </div>
                </div>
            </div>
            :
            null
           }
        
            <div className='logh1'>

                <div onClick={notclick} className='logedhdicons' >
                    <Notifications/>
                </div>

                {
                    not ?
                    <div className='notification' >
                        <h3>Notifications</h3>
                        <div className='notbod'>
                            {
                                gen?.sort((a, b)=>( b?.timestamp - a?.timestamp ) ).map((nott)=>(
                                    <Notification  cr={nott} />
                                ))
                            }
                        </div>
                    </div>
                    : null
                }

                <div className='logedhdicons'>
                    <Connection>
                        <Wifi/>
                    </Connection>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header