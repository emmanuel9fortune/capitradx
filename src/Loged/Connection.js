import { WifiOff } from '@mui/icons-material'
import React from 'react'
import { Detector } from 'react-detect-offline'


function Connection(props) {
  return (
    <div>
        <Detector 
            render={({online})=>(
                online ? props.children:
                <div>
                    <WifiOff id='wifioff' />
                </div>
            )}
         />
    </div>
  )
}

export default Connection