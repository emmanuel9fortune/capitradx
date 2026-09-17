import React from 'react'
import { ForexCrossRates } from 'react-ts-tradingview-widgets'

function Forexcross() {
  return (
    <div>
        <ForexCrossRates 
        symbol="AAPL"
        locale="en"
        interval="D"
        colorTheme="dark"
        timezone="Etc/UTC"
        toolbar_bg="#f1f3f6"
        width="100%"
        isTransparent={false}
        showIntervalTabs = {true}
        displayMode = "single"
        />
    </div>
  )
}

export default Forexcross