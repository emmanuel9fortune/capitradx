import React, { useEffect } from 'react'

function Story() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "feedMode": "all_symbols",
          "isTransparent": false,
          "displayMode": "regular",
          "width":"100%",
          "height":500,
          "colorTheme": "light",
          "locale": "en"
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
        <div className="tradingview-widget-container" id="tradingview-timeline-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
  )
}

export default Story