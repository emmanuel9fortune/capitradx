import React, { useEffect } from 'react'

function Headcryp() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500 Index"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "US 100 Cash CFD"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR to USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            }
          ],
          "showSymbolLogo": true,
          "isTransparent": false,
          "displayMode": "adaptive",
          "colorTheme": "dark",
          "locale": "en",
          "width": "100%"
        });
    
        // Append the script to the document
        const container = document.querySelector('.tradingview-widget-container__widget');

        // Check if the container exists before appending the script
        if (container) {
        container.appendChild(script);
        }

        // Cleanup: Remove the script when the component unmounts
        return () => {
        if (container && container.contains(script)) {
            container.removeChild(script);
        }
        };
      }, []);
    
      return (
        <div className="tradingview-widget-container" id="tradingview-ticker-tape-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
  )
}

export default Headcryp