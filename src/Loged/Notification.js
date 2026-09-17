import React from 'react'

function Notification({cr, id}) {


  return (
    <div className='notbar'>
        <h3>{cr?.title}</h3>
        <p>{cr?.message}</p> 
        <small>{new Date(cr?.timestamp?.toDate()).toLocaleTimeString()}</small>
    </div>
  )
}

export default Notification 