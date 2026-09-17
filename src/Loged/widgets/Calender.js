import React from 'react'
import { EconomicCalendar } from 'react-ts-tradingview-widgets'

function Calender() {
  return (
    <div>
        <EconomicCalendar 
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

export default Calender