import React, { useEffect } from 'react';

const Chaticon = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '5f5e3695128231a54e34a6199d660b918f7283e6';
      _smartsupp.offsetY = 85;
      window.smartsupp || (function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
      })(document);
      `; 
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }, []);
    
    // _smartsupp.key = '9876bc978b415a0956f170a430a47bd9a4a289ea';

  return (
    <noscript>
      Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noopener noreferrer">Smartsupp</a>
    </noscript>
  );
};

export default Chaticon