import React from 'react'
import sl from '../img/sl.jpg'
import gd from '../img/gd.jpg'
import br from '../img/br.jpg'
import { useSelector } from 'react-redux'
import { selectInfo } from '../features/infoSlice'
import { ToastContainer, toast } from 'react-toastify'

function Planbox({upd}) {

    const numft = new Intl.NumberFormat('en-us')

    const info = useSelector(selectInfo)

    const upgrade =()=>{
        if(info?.userinfo?.balance === 0){
            toast.error('insufficient funds')
        }else{
            toast.success('plan purchased')
        }
    }


  return (
    <div className='plansbox boxwidth'>
    <ToastContainer/>
    <div className='planboximg'>
      
      {
        upd.type === 'Bronze' ?
        <img src={br} alt='' />
        :
        null
      }
      
      {
        upd.type === 'Premium' ?
        <img src={sl} alt='' />
        :
        null
      }
      
      {
        upd.type === 'Gold' ?
        <img src={gd} alt='' />
        :
        null
      }

    </div>

     <div className='planwrt1' >
      <p>${numft.format(upd.price)}</p>
      <p>{upd.dept}</p>
      <p>{upd.dept1}</p>
      <p>{upd.dep2}</p>
    </div>

        <button onClick={upgrade} className='sndbtnfst' >BUY PLAN</button>
    </div>
  )
}

export default Planbox