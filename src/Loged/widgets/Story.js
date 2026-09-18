import React from "react";
import { Timeline } from "react-ts-tradingview-widgets";

function Story() {
  return (
    <div style={{ width: "100%" }}>
      <Timeline
        feedMode="all_symbols"
        colorTheme="dark"
        isTransparent={false}
        displayMode="regular"
        locale="en"
        width="100%"
      />
    </div>
  );
}

export default Story;