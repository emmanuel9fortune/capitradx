import React from 'react'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';


function Chart() {

  return (
    <div>
         <AdvancedRealTimeChart
        symbol="AAPL"
        locale="en"
        interval="D"
        theme="dark"
        timezone="Etc/UTC"
        toolbar_bg="#f1f3f6"
        save_image={false}
        isTransparent={true}
        container_id="tradingview_12345"
        enable_publishing = {false}
        withdateranges = {true}
        hide_side_toolbar = {false}
        allow_symbol_change = {true}
        details = {true}
        hotlist = {true}
        calendar = {true}
        watchlist = {[
          "CME_MINI:ES1!",
          "FX:EURUSD",
          "BINANCE:BTCUSDT",
          "NASDAQ:AAPL"
        ]}
        show_popup_button = {true}
        width="100%"
      />
    </div>
  )
}

export default Chart