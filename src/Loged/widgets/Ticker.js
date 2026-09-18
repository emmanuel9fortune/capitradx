import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

function Ticker() {
  return (
    <div style={{ width: "100%" }}>
      <TickerTape
        colorTheme="dark"
        locale="en"
        symbols={[
          {
            proName: "BINANCE:BTCUSDT",
            title: "BTC/USDT",
          },
          {
            proName: "BINANCE:ETHUSDT",
            title: "ETH/USDT",
          },
          {
            proName: "BINANCE:SOLUSDT",
            title: "SOL/USDT",
          },
          {
            proName: "BINANCE:XRPUSDT",
            title: "XRP/USDT",
          },
          {
            proName: "BINANCE:BNBUSDT",
            title: "BNB/USDT",
          },
        ]}
      />
    </div>
  );
}

export default Ticker;