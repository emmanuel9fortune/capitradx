import React from 'react'
import { Screener } from 'react-ts-tradingview-widgets'

function Screen() {
  return (
    <div>   
        <Screener
        symbol="AAPL"
        locale="en"
        interval="D"
        colorTheme="dark"
        timezone="Etc/UTC"
        toolbar_bg="#f1f3f6"
        width="100%"
        showIntervalTabs = {true}
        displayMode = "single"
        />
    </div>
  )
}

export default Screen