import React from 'react'
import { SymbolInfo } from 'react-ts-tradingview-widgets'

function Symbolinfo() {
  return (
    <div>
         <SymbolInfo 
        symbol="BITSTAMP:BTCUSD"
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

export default Symbolinfo