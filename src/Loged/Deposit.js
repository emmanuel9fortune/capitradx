import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { Cancel } from '@mui/icons-material'
import DepSlip from './DepSlip'

function Deposit() {

  
  const [dep, setdep] = useState([])

  useEffect(()=>{
      db.collection('depositslip').onSnapshot((snapshot)=>
      setdep(
      snapshot.docs.map((doc)=>({
        id: doc.id,
        data : doc.data()
      }))
      )
      )
  },[])

  const [cl, setcl] = useState(true)


  return (
    <div className='dashboard' >
      <Header/>

      <div className='sendbox1' >
        {
          cl ?
          <div  className='dep1'>
            <p>Deposits will be pending until there are sufficent confirmations on the blockchain.</p>
            <Cancel onClick={()=>setcl(false)} />
          </div>
          :
          null 
        }

        {
          dep?.sort((a, b)=>( b?.data?.timestamp - a?.data?.timestamp ) ).map(({id, data})=>(
            <DepSlip  id={id} cr={data} />
          ))
        }
      </div>
    </div>
  )
}

export default Deposit