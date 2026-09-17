import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { selectInfo } from '../features/infoSlice'

function Withslip({cr}) {

    const user = useSelector(selectUser)

    let date = new Date(cr?.timestamp?.toDate())

    let day = date?.getDate()
    let month = date?.getMonth()
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV","DEC"]





  const numft = new Intl.NumberFormat('en-us')

  const info = useSelector(selectInfo)

  return (
    <>
     {
      cr?.email !== user?.email ?
      null
      :
      <div className='depslip'>
        <div   className='deps1'>
            <div className='depbox'>
                <strong>{months[month]}</strong>
                <h2>
                {
                    day < 10 ?
                    <p>{0 + `${day}`}</p>
                    :
                    <p> {day}</p>
                  }
                </h2>
            </div>
            <div className='depbox'>
                <strong>{info?.userinfo?.currency}{numft.format(cr?.amount)} </strong>
                <p style={cr?.status === 'pending' ? {color:'orange'}: null} >{cr?.status}</p>
            </div>
        </div>

        <div className='depbox'>
                <small>from: {cr?.from} </small>
                <p>to: {cr?.to}</p>
        </div>
    </div>
    }
   </>
  )
}

export default Withslip