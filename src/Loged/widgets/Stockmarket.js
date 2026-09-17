import React from 'react'
import { StockMarket } from 'react-ts-tradingview-widgets';


function Stockmarket() {
  return (
    <div>
         <StockMarket 
        symbol="AAPL"
        locale="en"
        interval="D"
        colorTheme="dark"
        timezone="Etc/UTC"
        isTransparent={true}
        toolbar_bg="#f1f3f6"
        width="100%"
        showIntervalTabs = {true}
        displayMode = "single"
        />
    </div>
  )
}

export default Stockmarket