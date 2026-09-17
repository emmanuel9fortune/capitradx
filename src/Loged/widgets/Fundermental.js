import React from 'react'
import { FundamentalData } from 'react-ts-tradingview-widgets'

function Fundermental() {
  return (
    <div>
        <FundamentalData 
        symbol="AAPL"
        locale="en"
        interval="D"
        colorTheme="dark"
        timezone="Etc/UTC"
        toolbar_bg="#f1f3f6"
        width="100%"
        isTransparent={true}
        showIntervalTabs = {true}
        displayMode = "single"
        />
    </div>
  )
}

export default Fundermental