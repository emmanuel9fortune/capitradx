import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Background from '../Background'
import './register.css'
import lg from '../img/logo.png'
import { BarChart, Diamond, Psychology, SupportAgent, TrendingUp } from '@mui/icons-material'
import { auth } from '../firebase'
import Chaticon from '../Chaticon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Login() {
  axios.defaults.withCredentials = true

  const navigate = useNavigate()


  const navreg =()=>{
    navigate('/register')
  }

    const [fst , setfst] = useState('')
    const [sec , setsec] = useState('')
    const [load , setload] = useState(false)
    
    const handleLoginError = (error) => {
    
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format. Please enter a valid email.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-disabled") {
        toast.error("This user account has been disabled.");
      } else if (error.code === "auth/too-many-requests") {
        toast.error("Too many failed login attempts. Please try again later.");
      } else {
        toast.error("Login failed: " + error.message);
      }
    };
    

    
    const Register=async()=>{
      setload(true)
      const email = fst
      const password = sec
      
      if(fst !== '' && sec !== ''){
        try {
          await auth.signInWithEmailAndPassword(email, password).then(()=>{
            navigate('/')
          })
        } catch (error) {
          handleLoginError(error)
        } finally {
          setload(false)
        }
      }else{
        toast.error('Enter all fields')
      }
    }


  return (
    <div className='boxx2 lobxx'>
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
                  <input type='email' onChange={(e)=>setfst(e.target.value)} placeholder='Enter Email Address'/>
                </div>

                <div className='loginput'>
                  <p>Enter Password</p>
                  <input type='password' onChange={(e)=>setsec(e.target.value)} placeholder='Enter Email Password' />
                </div>

                <div className='forgt'>
                  <p>forgot Password ? <Link to={'/forgotpassword'} >RESET</Link> </p>
                </div>

                
            <div className='loginbtns'>
              {
                !load ?
                  <button onClick={Register}  className='logbtn' >LOG IN</button>
                    :
                  <div className="flex space-x-1 loadbtn">
                    <span className="dot animate-bounce delay-0"></span>
                    <span className="dot animate-bounce delay-200"></span>
                    <span className="dot animate-bounce delay-400"></span>
                  </div>
              }
              <button onClick={navreg} className='regbtn'>CREATE ACCOUNT</button>
            </div> 
                
                
              </div>
          </div>
        </div>
        <Link to='/' className='backbtn'>
          <img src={lg} alt='' />
        </Link>

        {/* <ReactWhatsapp number='+234 80600180873' className='whticon' >
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png' alt='' />
          <p>Drop a Message</p>
        </ReactWhatsapp>    */}   

        {/* <Chaticon/> */}
    </div>
  )
}

export default Login