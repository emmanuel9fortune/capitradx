import React from 'react'
import { TechnicalAnalysis } from 'react-ts-tradingview-widgets';


function Analysis() {
  return (
    <div>
        <TechnicalAnalysis 
        symbol="BITSTAMP:BTCUSD"
        locale="en"
        interval="D"
        theme="dark"
        timezone="BITSTAMP:BTCUSD"
        toolbar_bg="#f1f3f6"
        width="400px"
        height="400px"
        showIntervalTabs = {true}
        displayMode = "single"
        />
    </div>
  )
}

export default Analysis