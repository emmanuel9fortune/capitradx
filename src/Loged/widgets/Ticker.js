import React from 'react'
import {TickerTape } from 'react-ts-tradingview-widgets'


function Ticker() {
  return (
    <div>
    <TickerTape 
        symbol="AAPL"
        locale="en"
        interval="D"
        theme="dark"
        timezone="Etc/UTC"
        toolbar_bg="#f1f3f6"
        width="100%"
        />
    </div>
  )
}

export default Ticker