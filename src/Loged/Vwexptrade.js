import React from 'react'

function Vwexptrade({frnds}) {

  let date = new Date(frnds[1]?.time?.toDate())

    let day = date?.getDate()
    let month = date?.getMonth()
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV","DEC"]


  return (
    <div className='notlisted' >
         <div className='depbox boxxxtimer'>
                <strong style={{fontSize:'13px'}} >{months[month]}</strong>
                <h2 style={{fontSize:'15px'}}>
                {
                    day < 10 ?
                    <p>{0 + `${day}`}</p>
                    :
                    <p> {day}</p>
                  }
                </h2>
            </div>

        <div className='traderinfo'>
          <h3>{frnds[1]?.name}</h3>
          <p>outcome : {frnds[1]?.profit}</p>
        </div>
    </div>
  )
}

export default Vwexptrade