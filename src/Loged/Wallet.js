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
      navigator.clipboard.writeText('bc1qf27dl3s565h3t03nhht5sdq2walaczv9cn4x8z')
      toast('copied')
    }
  
    const usdt1 = ()=>{
      navigator.clipboard.writeText('0x9fbb839119a32AeA366aF25FA63757C8C35047A9')
      toast('copied')
    }
  
    const eth1 = ()=>{
      navigator.clipboard.writeText('0x9fbb839119a32AeA366aF25FA63757C8C35047A9')
      toast('copied')
    }
  
    const xrp1 = ()=>{
      navigator.clipboard.writeText('rPXtLsvwop9hnt9KrM2znFzG57RwGSXd7V')
      toast('copied')
    }
  
    // const usdc = ()=>{
    //   navigator.clipboard.writeText('0x9fbb839119a32AeA366aF25FA63757C8C35047A9')
    //   toast('copied')
    // }




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
                <CopyToClipboard text={'bc1qf27dl3s565h3t03nhht5sdq2walaczv9cn4x8z'} onCopy={btc1}>
              <div className='walllink'>
                  <div >
                      <CopyAll  />
                  </div>
                <p>bc1qf27dl3s565h3t03nhht5sdq2walaczv9cn4x8z</p>
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
                <CopyToClipboard text={'0x9fbb839119a32AeA366aF25FA63757C8C35047A9'} onCopy={eth1}>
              <div className='walllink'>
                  <div >
                  <CopyAll/>
                  </div>
                <p>0x9fbb839119a32AeA366aF25FA63757C8C35047A9</p>
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
                <CopyToClipboard text={'0x9fbb839119a32AeA366aF25FA63757C8C35047A9'} onCopy={usdt1}>
              <div className='walllink'>
                  <div >
                  <CopyAll/>
                  </div>
                <p>0x9fbb839119a32AeA366aF25FA63757C8C35047A9</p>
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
                <CopyToClipboard text={'rPXtLsvwop9hnt9KrM2znFzG57RwGSXd7V'} onCopy={xrp1}>
                  <div className='walllink'>
                      <div>
                        <CopyAll/>
                      </div>
                    <p>rPXtLsvwop9hnt9KrM2znFzG57RwGSXd7V</p>
                  </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={xrp} alt='' />
              </div>
            </>
            :
            null
           }

            {/* {
            deb?.wallet === 'usdc' ?
            <>
                <CopyToClipboard text={'0x9fbb839119a32AeA366aF25FA63757C8C35047A9'} onCopy={usdc}>
                  <div className='walllink'>
                      <div>
                        <CopyAll/>
                      </div>
                    <p>0x9fbb839119a32AeA366aF25FA63757C8C35047A9</p>
                  </div>
                </CopyToClipboard>

              <div className='wallscan'>
              <img src={usdcimg} alt='' />
              </div>
            </>
            :
            null
           } */}

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