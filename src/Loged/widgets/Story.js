import React from 'react'
import { Timeline } from 'react-ts-tradingview-widgets'

function Story() {
  return (
    <div>
         <Timeline 
            feedMode = "all_symbols"
            isTransparent = {false}
            displayMode = "regular"
            width  = "100%"
            colorTheme = "dark"
            locale =  "en"
        />
    </div>
  )
}

export default Story