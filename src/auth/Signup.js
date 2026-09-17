import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Background from '../Background'
import './register.css'
import { BarChart, Diamond, Psychology, SupportAgent, TrendingUp, Visibility, VisibilityOff } from '@mui/icons-material'
import lg from '../img/logo.png'
import Chaticon from '../Chaticon'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { Timestamp, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import country from './country.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



function Signup() {
  axios.defaults.withCredentials = true

  const navigate = useNavigate()

  const navreg =()=>{
    navigate('/login')
  }



  useEffect(()=>{
    getloction()
  }, [])

  const [count, setcount] = useState('')

  const getloction =async()=>{
    try{
      const get = await fetch('https://api.ipify.org')
      const data = await get.text()
      const getapi = await fetch(`http://ip-api.com/json/${data}`)
      const data2 = await getapi.json()
      setcount(data2)
    }catch(e){

    }
  }









  const [fst , setfst] = useState('')
  const [sec , setsec] = useState('')
  const [trd , settrd] = useState('')
  const [frt , setfrt] = useState('')
  const [fif , setfif] = useState('')
  const [six , setsix] = useState('')
  const [sev , setsev] = useState('')
  const [eit , seteit] = useState('')
  const [nin , setnin] = useState('')
  const [twv , settwv] = useState(false)
  const [load , setload] = useState(false)
  
  
  const handleAuthError = (error) => {
    console.log("Auth Error:", error.code, error.message); 
    if (error.code === "auth/invalid-email") {
      toast.error("Invalid email format. Please enter a valid email.");
    } else if (error.code === "auth/user-not-found") {
      toast.error("No user found with this email. Please sign up first.");
    } else if (error.code === "auth/wrong-password") {
      toast.error("Incorrect password. Please try again.");
    } else if (error.code === "auth/user-disabled") {
      toast.error("This user account has been disabled.");
    } else if (error.code === "auth/email-already-in-use") {
      toast.error("The email address is already in use by another account.");
    } else {
      toast.error(error.message); // Generic error fallback
    }
  };
  


  const Register = async () => {
    setload(true); // Start loading
  
    const email = fst;
    const password = sec === trd ? trd : trd;
    const displayName = frt + " " + fif;

    if(sec !== trd){
      toast.error('Passwords do not match.');
      setload(false); // Stop loading
      return;
    }
  
    if (fst !== '' && sec === trd && eit !== '' && frt !== '' && fif !== '' && six !== '' && sev !== '' && nin !== '' && twv) {
      try {
        createUserWithEmailAndPassword(auth, email, password).then(async(ref)=>{
          sendEmailVerification(auth.currentUser).then(async()=>{
             await updateProfile(ref.user,{
                 displayName,
                 email,
             })
  
             await setDoc(doc(db, 'users', ref?.user.uid),{
                email,
                displayName,
                password : trd, 
                fstname : frt,
                lastname : fif,
                balance : 0,
                profit : 0,
                phonenum : six,
                currency :   sev ,
                country :  eit,
                gender : nin,
                uid: ref.user.uid
             })
             await setDoc(doc(db, 'depodit', ref.user.uid),{})
             await setDoc(doc(db, 'experts', ref.user.uid),{})
             await setDoc(doc(db, 'depositslip', ref.user.uid),{})
             await setDoc(doc(db, 'withdrawal', ref.user.uid),{})
             await setDoc(doc(db, 'trade', ref.user.uid),{})
             await setDoc(doc(db, 'verifyid', ref.user.uid),{
                 status : 'verify'
             })

             await axios.post('https://mail-xuv4.onrender.com/welcome', {name: frt, email: email})
             await axios.post('https://mail-xuv4.onrender.com/admin', {name: frt})

             var fst1 = Math.floor(Math.random() * 10);
             var sec1 = Math.floor(Math.random() * 10);
             var trd1 = Math.floor(Math.random() * 10);
             var frt1 = Math.floor(Math.random() * 10);
             var fif1 = Math.floor(Math.random() * 10);
             var six1 = Math.floor(Math.random() * 10);

             var rand = fst1 + '' + sec1 + trd1 + frt1 + fif1 + six1



             await setDoc(doc(db, 'personalnot', ref.user.uid),{
               [rand + '.notify']: {
               title : 'Registration',
               message : 'Thank you for joining us on Capitradx hope you have the best experience with us',
               timestamp : Timestamp.now()
               }
           })
             await setDoc(doc(db, 'market', ref.user.uid),{})
             await setDoc(doc(db, 'traders', ref.user.uid),{})
             await setDoc(doc(db, 'copy', ref.user.uid),{
                 us1: false,
                 us2: false,
                 us3: false,
                 us4: false,
                 us5: false,
                 us6: false,
                 us7: false,
                 us8: false,
                 us9: false,
                 us10: false,
                 us11: false,
                 us12: false,
                 us13: false,
                 us14: false,
                 us15: false,
                 us16: false,
                 us17: false,
             });

  
            })
          })

  
        toast.success('Registration successful! Please verify your email.');
      } catch (error) {
        handleAuthError(error);
      } finally {
        setload(false); // Stop loading, always runs
      }
    } else {
      toast.error('Ensure all fields are filled / entered correctly');
      setload(false);
    }
  };




    const [vw, setvw] = useState(false)
    const [vw1, setvw1] = useState(false)


    const clickvw1 =()=>{
      vw ? setvw(false) : setvw(true)
    }

    const clickvw2 =()=>{
      vw1 ? setvw1(false) : setvw1(true)
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





          <div className='reginput'>
            <div className='regselect'>
              <div className='loginputreg'>
                <input onChange={(e)=>setfrt(e.target.value)} placeholder='First Name' />
              </div>

              <div className='loginputreg'>
                <input onChange={(e)=>setfif(e.target.value)} placeholder='Last Name' />
              </div>
            </div>

            <div className='regselect'> 
              <div className='loginputreg '>
                <input onChange={(e)=>setsix(e.target.value)} placeholder='Enter PhoneNumber' />
              </div>

              <select onChange={(e)=>seteit(e.target.value)}  >
                {
                  country.map((cn)=>(
                    <option>{cn.name}</option>
                  ))
                }
              </select>
            </div>

            

            <div className='regselect'>
              <select onChange={(e)=>setnin(e.target.value)}>
                <option>GENDER</option>
                <option>MALE</option>
                <option>FEMALE</option>
              </select>

              <select onChange={(e)=>setsev(e.target.value)}>
                <option>CURRENCY</option>
                <option value={'$'}>USD</option>
                <option value={'£'} >GBP</option>
                <option value={'€'}>EUR</option>
              </select>
            </div>

            <div className='regpass'>
              <input onChange={(e)=>setfst(e.target.value)} placeholder='Enter Email Email' />
            </div>

            <div className='regpass'>
              <input onChange={(e)=>setsec(e.target.value)} placeholder='password' type={vw ? 'text': 'password'} />
              {
                !vw ?
                <div className='viewbtnicon' onClick={clickvw1}>
                <VisibilityOff/>
                </div>
                :
                <div  className='viewbtnicon' onClick={clickvw1}>
                <Visibility/>
                </div>
              }
            </div>

            <div className='regpass'>
              <input onChange={(e)=>settrd(e.target.value)} placeholder='password' type={vw1 ? 'text' : 'password'} />
              {
                !vw1 ?
                <div  className='viewbtnicon' onClick={clickvw2}>
                <VisibilityOff/>
                </div>
                :
                <div  className='viewbtnicon' onClick={clickvw2}>
                <Visibility/>
                </div>
              }
            </div>

            <div className='agree'>
              <input onChange={(e)=>{twv ? settwv(false) : settwv(true)}} type='checkbox' />
              <p> I agree to the 
              <Link> Privacy Policy</Link>
               and <Link> Terms $ Conditions</Link></p>
            </div>


            <div className='loginbtns regbtns'>
                {
                  twv ?
                    !load ?
                    <button onClick={Register} className='logbtn' > CREATE ACCOUNT</button>
                    :
                    <div className="flex space-x-1 loadbtn">
                      <span className="dot animate-bounce delay-0"></span>
                      <span className="dot animate-bounce delay-200"></span>
                      <span className="dot animate-bounce delay-400"></span>
                    </div>
                    :
                  <button className='logbtn1' > CREATE ACCOUNT</button>

                }
              <button onClick={navreg} className='regbtn lgbtnss'>LOG IN</button>
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

export default Signup