import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectUser } from '../features/userSlice'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import Header from './Header'
import btc from '../img/btc.jpg'
import eth from '../img/usd.jpg'
import usd from '../img/usd.jpg'
import xrp from '../img/xrp.jpg'
import usdcimg from '../img/usd.jpg'
import { CopyAll } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Wallet() {

    const navigate = useNavigate()
 
    const handleproof=()=>{
      navigate('/uploadproof')
    }
  
    const handlewait=()=>{
      navigate('/deposits')
    }
  
  
  
    const user = useSelector(selectUser)
  
    const [deb, setdeb] = useState([])
  
  
  
    useEffect(()=>{
      const unsub = onSnapshot(doc(db, "depodit", user.uid), (doc) => {
        setdeb(doc.data());
      });
      return ()=>{
          unsub()
      }
    },[user.uid])
  
   
  
  
    const btc1 = ()=>{
      navigator.clipboard.writeText('bc1qkjmd2un60c8nzatppkfapdrrcad7g7afxww6gh')
      toast('copied')
    }
  
    const usdt1 = ()=>{
      navigator.clipboard.writeText('0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134')
      toast('copied')
    }
  
    const eth1 = ()=>{
      navigator.clipboard.writeText('0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134')
      toast('copied')
    }
  
    const xrp1 = ()=>{
      navigator.clipboard.writeText('rBsiswjdkFLfxxG3ceDLG6DA7XtazDTgy2')
      toast('copied')
    }
  
    const usdc = ()=>{
      navigator.clipboard.writeText('0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134')
      toast('copied')
    }




    const [view1, setview1] = useState(true)

    const vwref = useRef()
  
    useEffect(()=>{
      const observer = new IntersectionObserver((e)=>{
        const entry = e[0]
        setview1(entry.isIntersecting)
        
      })
      observer.observe(vwref.current);
    })







  

  return (
    <div className='dashboard'>
     <Header
        vw1={view1}
     />
     <ToastContainer/>
    <div ref={vwref} className='sendbox1' >
     <div className='min_links'>
            <Link to={'/send'} className='minlink' >send funds</Link>
            <Link to='/amount' className='minlink'> \ amount</Link>
            <Link to='/selectwallet' className='minlink'> \ select wallet</Link>
            <p>\ wallet</p>
    </div>
        <div className='fund1' >
        <div className='fund2' >
           
        <div className='wallet'>
            <div className='wallinfo'>
            <p style={{textTransform:'capitalize'}}>SEND {deb?.crypamount} {deb?.symbol}</p>
            <h3>TO THE WALLET ADDRESS BELOW OR SCAN THE QR CODE WITH YOUR WALLET APP</h3>


            {
            deb?.wallet === 'btc' ?
            <>
                <CopyToClipboard text={'bc1qkjmd2un60c8nzatppkfapdrrcad7g7afxww6gh'} onCopy={btc1}>
              <div className='walllink'>
                  <div >
                      <CopyAll  />
                  </div>
                <p>bc1qkjmd2un60c8nzatppkfapdrrcad7g7afxww6gh</p>
              </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={btc} alt='' />
              </div>
            </>
            :
            null
           }



            {
            deb?.wallet === 'eth' ?
            <> 
                <CopyToClipboard text={'0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134'} onCopy={eth1}>
              <div className='walllink'>
                  <div >
                  <CopyAll/>
                  </div>
                <p>0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134</p>
              </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={eth} alt='' />
              </div>
            </> 
            :
            null
           }




            {
            deb?.wallet === 'usdt' ?
            <>
                <CopyToClipboard text={'0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134'} onCopy={usdt1}>
              <div className='walllink'>
                  <div >
                  <CopyAll/>
                  </div>
                <p>0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134</p>
              </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={usd} alt='' />
              </div>
            </>
            :
            null
           }

            {
            deb?.wallet === 'xrp' ?
            <>
                <CopyToClipboard text={'rBsiswjdkFLfxxG3ceDLG6DA7XtazDTgy2'} onCopy={xrp1}>
                  <div className='walllink'>
                      <div>
                        <CopyAll/>
                      </div>
                    <p>rBsiswjdkFLfxxG3ceDLG6DA7XtazDTgy2</p>
                  </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={xrp} alt='' />
              </div>
            </>
            :
            null
           }

            {
            deb?.wallet === 'usdc' ?
            <>
                <CopyToClipboard text={'0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134'} onCopy={usdc}>
                  <div className='walllink'>
                      <div>
                        <CopyAll/>
                      </div>
                    <p>0xFe4F2c4eCB7897759d28ceDDcAc0407dCa878134</p>
                  </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={usdcimg} alt='' />
              </div>
            </>
            :
            null
           }

            <button className='uploadbtn' onClick={handleproof} >UPLOAD PAYMENT PROOF</button>
            <button className='waitbtn' onClick={handlewait}  >WAIT FOR CONFIRMATION</button>
          </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Wallet