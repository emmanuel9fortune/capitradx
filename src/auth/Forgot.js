import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../Background'
import lg from '../img/logo.png'
import ReactWhatsapp from 'react-whatsapp'
import Chaticon from '../Chaticon'
import { sendPasswordResetEmail } from 'firebase/auth'
import { dbauth } from '../firebase'
import { BarChart, Diamond, Psychology, SupportAgent, TrendingUp } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function Forgot() {

  const navigate = useNavigate()

  const navreg =()=>{
    navigate('/login')
  }

  const [fst , setfst] = useState('')

    const Register=()=>{
        const email =fst

        sendPasswordResetEmail(dbauth, email).then((data)=>{
          toast.success('password reset link sent')
        }).catch((err)=>{
          toast.error(err.message)
        })
    }


  return ( 
    <div className='boxx2'>
    <Background/>
    <ToastContainer/>
    <div className='login'>
    <div className='loginbod' >
    <div className='loglogo'>
            <div className='introbox'>
              <div className='fstintrobox'>
                <div className='hdinrobox'>
                  <h1>$20,788,710,401</h1>
                  <p>24H Trading Volume (USD)</p>
                </div>

                <div className='bodintrobox'>
                  <div className='innerbox'>
                    <h1>23M+</h1>
                    <p>Registered Users</p>
                  </div>

                  <div className='innerbox midinnerbox'>
                    <h1>160</h1>
                    <p>Supported Countries</p>
                  </div>

                  <div className='innerbox'>
                    <h1>1067</h1>
                    <p>Token Listed</p>
                  </div>
                </div>
              </div>



              <div className='innerdivs'>
                <SupportAgent id='minicons' />
                <h3>24/7 Support | 100k TPS Matching Engine</h3>
              </div>

              <div className='innerdivs'>
                <TrendingUp id='minicons' />
                <div>
                  <h3>Industry-leading trading products with best-in-class liquidity through our Unified Trading Account</h3>
                  <p>Perpetuals, Futures, Options, Margin Trading, Spot</p>
                </div>
              </div>

              <div className='innerdivs'>
                <BarChart id='minicons' />
                <div>
                  <h3>Trade like a Pro with our easy-to-use Trading Tools</h3>
                  <p>Earn, Copy Trading, and Trading Bots</p>
                </div>
              </div>

              <div className='innerdivs'>
                <Psychology id='minicons' />
                <div>
                  <h3>Expand your crypto journey with Web3 and crypto payments</h3>
                </div>
              </div>

              <div className='innerdivs'>
                <Diamond id='minicons' />
                <div>
                  <h3>Bybit VIP | Crypto Meets Elite</h3>
                  <p>Enjoy discounted fees, lower interest rates and earn exclusive APR</p>
                </div>
              </div>

            </div>
          </div>

        <div className='loginputs'>
          <div className='loginput'>
            <p>Enter Email</p>
            <input onChange={setfst} placeholder='Enter Email Address' />
          </div>

          <div className='loginbtns frgt'>
            <button onClick={Register} className='logbtn' >RESET</button>
            <button onClick={navreg} className='regbtn'>LOGIN</button>
          </div>
           
        </div>
    </div>
    </div>

      <Link to='/' className='backbtn'>
          <img src={lg} alt='' />
        </Link>

        <ReactWhatsapp   number='+234 80600180873' className='whticon' >
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png' alt='' />
          <p>Drop a Message</p>
        </ReactWhatsapp>      

        <Chaticon/>
  </div>
  )
}

export default Forgot