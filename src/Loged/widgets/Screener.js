import React from "react";
import { Screener } from "react-ts-tradingview-widgets";

function Screen() {
  return (
    <div style={{ width: "100%" }}>
      <Screener
        colorTheme="dark"
        locale="en"
        width="100%"
        height={600}
        defaultColumn="overview"
        screener="crypto"
        showToolbar={true}
      />
    </div>
  );
}

export default Screen;