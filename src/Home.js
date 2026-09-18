import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import './home.css'
import sh3 from './img/triangle-a.png'
import sh4 from './img/polygon.png'
import ban from './img/gfx-a.png'
import { Link } from 'react-router-dom'
import pl from './img/pl.jpg'
import { Lottie } from "lottie-react";
import lott from './asset/Animation - 1708678326591.json'
import lp from './img/sc-medium-b.png'
import ph from './img/sc-small-d.jpg'
import sl from './img/sl.jpg'
import gd from './img/gd.jpg'
import br from './img/br.jpg'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Background from './Background'
import { Add, Email, Facebook, LinkedIn, Phone, Twitter } from '@mui/icons-material'
import p1 from './img/a-light.png'
import p2 from './img/b-light.png'
import p3 from './img/c-light.png'
import p4 from './img/d-light.png'
import p5 from './img/e-light.png'
import p6 from './img/f-light.png'
import p7 from './img/a-light.png'
import p8 from './img/c-light.png'
import p9 from './img/b-light.png'
import MinimizeIcon from '@mui/icons-material/Minimize';
import dl from './asset/wdl.json'
import Mobhd from './Mobhd'
import ReactWhatsapp from 'react-whatsapp'
import Chaticon from './Chaticon'
import Story from './Loged/widgets/Story'

AOS.init()
 
function Home() {

  const [fst, setfst] = useState(true)
  const [sec, setsec] = useState(false)
  const [trd, settrd] = useState(false)
  const [frt, setfrt] = useState(false)


  const fstclick=()=>{
    fst ? setfst(false) : setfst(true)
    setsec(false)
    settrd(false)
    setfrt(false)
  }


  const secclick=()=>{
    sec ? setsec(false) : setsec(true)
    setfst(false)
    settrd(false)
    setfrt(false)
  }


  const trdclick=()=>{
    trd ? settrd(false) : settrd(true)
    setsec(false)
    setfst(false)
    setfrt(false)
  }


  const frtclick=()=>{
    frt ? setfrt(false) : setfrt(true)
    setsec(false)
    settrd(false)
    setfst(false)
  }

  const [fstg, setfstg] = useState(true)
  const [secg, setsecg] = useState(false)
  const [trdg, settrdg] = useState(false)

  const fstgclick =()=>{
    setfstg(true)
    setsecg(false)
    settrdg(false)
  }

  const secgclick =()=>{
    setsecg(true)
    setfstg(false)
    settrdg(false)
  }

  const trdgclick =()=>{
    settrdg(true)
    setsecg(false)
    setfstg(false)
  }



  const [view1, setview1] = useState(true)
  const [view2, setview2] = useState(false)
  const [view3, setview3] = useState(false)
  const [view4, setview4] = useState(false)
  const [view5, setview5] = useState(false)
  const [view6, setview6] = useState(false)
  const [view7, setview7] = useState(false)
  const [view8, setview8] = useState(false)

  const vwref = useRef()
  const vwref2 = useRef()
  const vwref3 = useRef()
  const vwref4 = useRef()
  const vwref5 = useRef()
  const vwref6 = useRef()
  const vwref7 = useRef()
  const vwref8 = useRef()

  useEffect(()=>{
    const observer = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview1(entry.isIntersecting)
      
    })
    observer.observe(vwref.current);

   


   


    const observer4 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview5(entry.isIntersecting)
      
    })
    observer4.observe(vwref5.current);


    const observer6 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview6(entry.isIntersecting)
      
    })
    observer6.observe(vwref6.current);

    const observer7 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview7(entry.isIntersecting)
      
    })
    observer7.observe(vwref7.current);

    const observer8 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview8(entry.isIntersecting)
      
    })
    observer8.observe(vwref8.current);

  },[])


  useEffect(()=>{
    const observe3 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview4(entry.isIntersecting)
      
    })
    observe3.observe(vwref4.current);
  },[])

  useEffect(()=>{
    const observer2 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview3(entry.isIntersecting)
      
    })
    observer2.observe(vwref3.current);
  },[])

  useEffect(()=>{
    const observer1 = new IntersectionObserver((e)=>{
      const entry = e[0]
      setview2(entry.isIntersecting)
      
    })
    observer1.observe(vwref2.current);
  },[])


  const [menu, setmenu] = useState(false)

  const menubtn =()=>{
    menu ? setmenu(false) : setmenu(true)
  }



  


  
  return (
      <div className='home'>
        <Header
          vw1={view1}
          vw2={view2}
          vw3={view3}
          vw4={view4}
          vw5={view5}
          vw6={view6}
          vw7={view7}
          vw8={view8}
          menubtn={menubtn}
          menu={menu}
        />

        {
          menu ?
          <Mobhd
            vw1={view1}
            vw2={view2}
            vw3={view3}
            vw4={view4}
            vw5={view5}
            vw6={view6}
            vw7={view7}
            vw8={view8}
            menubtn={menubtn}
          />
          : null
        }



        <div ref={vwref} className='boxx2'>
        <div className='banner'>
          <div className='bannerwrt' data-aos ='fade-right'>
            <h3>DECENTRALIZED TRADING & INVESTMENT PLATFORM WITH BLOCKCHAIN INFRASTRUCTURE</h3>
            <p>
            Decentralized Trading & Investment platform for cryptocurrencies, forex, binary option, CFD that standarizes data & operations with blockchain technology. We provide user-friendly, efficient and secure trading & investment solutions utilizing blockchain technology.
            </p>
            <Link to='/register' className='gtbtn'>GET STARTED</Link>
          </div>

          <div className='bannerimg' data-aos ='fade-left'>
            <img src={ban} alt='' />
          </div>
        </div>
        </div>


        <div  ref={vwref2} className='boxx2' >
          <div className='about' id='about' >
            <div className='abthd'  data-aos ='zoom-in'>
              <h1>ABOUT US</h1>
              <h3>About Us</h3>
            </div>

            <div className='abtbod'  >
              <div className='abtbox'  data-aos ='zoom-in'>
                <h3>WHY Atrivas ?</h3>
                <p>
                We provide a unique global perspective through our global network, in-depth market and sector knowledge, you are assured of your investment will yield with us because we diversify and we have multiple income streams which include but not limited to: Cryptocurrency trading, Binary options trading, CFD's, Forex, Stock & Commodities.
                </p>
              </div>

              <div  className='abtbox' data-aos ='zoom-in'>
                <h3>OUR MISSION</h3>
                <p>
                Our mission is to act as a catalyst for universal adoption and blockchain innovation. We focus only on investing in cryptocurrency & forex. Our team has experience in both traditional financing and emerging mining technology. We invest, among others, in cryptocurrencies such as BTC, XRP, ETC, and ETH. We also give a chance to new.
                </p>
              </div>

              <div className='abtbox' data-aos ='zoom-in'>
                <h3>OUR VISION</h3>
                <p>
                Atrivas consists a team of financial market professionals assembled specifically in order to provide the best possible trading conditions to its customers. Our specialists have been involved in the development of technical specification for designing an up-to-date platform that is suitable for both beginners.
                </p>
              </div>
            </div>
          </div>
        </div>

 
        <div ref={vwref2} className='boxx2'>
        <div className='platform' >
          <div className='abthd dd'  data-aos ='zoom-in' >
            <h1>OUR PLATFORM</h1>
            <h4>Atrivas PLATFORM</h4>
          </div>

          <div className='platformbod'>
            <div className='platformwrt' data-aos ='fade-right'>
              <p>
              Atrivas is one of the most transformative technologies since the invention of the Internet. Atrivas stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily participate in a permissionless and decentralized network which empowers people to not be marginalized by governments and financial institutions.
              </p>

              <p>
              We welcome you to the digital world of crypto investment, Atrivas - where our clients will receive stable and risk-free long-term returns by placing your Bitcoin, Ethereum and Litecoin asset in our online profound asset management program. Atrivas is an active cryptocurrency mining and trading participant, crypto-currency asset management, which is built on many years of experience and deep market knowledge in the stock and digital market.
              </p>
            </div>
 
            <div className='platformimg' data-aos ='fade-right'>
              <div className='pimg'>
                <Lottie  animationData={lott} className='beep' />
                <img src={pl} alt='' />
                <p>
                Lisa Adwa is an Expert trader and account manager in Binary and forex trade and she is the Top Account Manager of Tradeinvestsignals
                </p>
              </div>

   
            </div>
          </div>
        </div>
        </div>


        <div ref={vwref3} className='boxx2'  >
          <div className='features' id='features' >
            <div className='abthd dd'  data-aos ='zoom-in' >
              <h1>OUR FEATURES</h1>
              <h4>Features</h4>
              <p>Why Choose Atrivas ?</p>
            </div>


            <div className='featurebod' >
              <div className='featureimg' data-aos ='zoom-in'>
                <img className='pl' src={ph} alt='' />
                <img className='ph' src={lp} alt='' />
                <img className='tr' src={sh3} alt='' />
                <img className='sq' src={sh4} alt='' />
              </div>

              <div className='featurewrt' >
                <div className='featurewrtbox' data-aos ='zoom-in'>
                  <TaskAltIcon id='task' />
                  <p>Atrivas is completely free of charge!</p>
                </div>

                <div className='featurewrtbox' data-aos ='zoom-in'>
                  <TaskAltIcon id='task' />
                  <p>
                  Atrivas can help you trade in both the manual and automatic formats with an average of 87.35% Win Rate across all compatible brokers.
                  </p>
                </div>

                <div className='featurewrtbox' data-aos ='zoom-in'>
                  <TaskAltIcon id='task' />
                  <p>
                  Atrivas is fully SSL and highly secure thereby providing little or no chance for your personal details to be phished by cyber-criminals.
                  </p>
                </div>

                <div className='featurewrtbox' data-aos ='zoom-in'>
                  <TaskAltIcon id='task' />
                  <p>
                  Our signals are generated by a complex set of mathematical operations involving the indicators and the method you’ve selected for trading.
                  </p>
                </div>

                <div className='featurewrtbox' data-aos ='zoom-in'>
                  <TaskAltIcon id='task' />
                  <p>
                  Atrivas can be synced with the Top-Class brokers in the market providing you with security for your capital and a peace of mind.
                  </p>
                </div>

                <Link to='/register' className='gtbtn2' data-aos ='zoom-in' >GET STARTED</Link>
              </div>
            </div>
          </div>
        </div>

        
        <div ref={vwref4}  className='boxx2'>
          <div className='plans' id='investments'  data-aos ='zoom-in'>
            <div className='abthd dd'>
                <h1>PRICING</h1>
                <h4>INVESTMENT PLANS</h4>
            </div>

            <div className='plansbod'>
              <div className='plansbox' data-aos ='zoom-in'>
                  <div className='planboximg'>
                    
                    <img src={br} alt='' />
                  </div>

                  <div className='planwrt1' >
                    <p>$500</p>
                    <p>Daily earnings:$20</p>
                    <p>Weakly earnings:$140</p>
                    <p>Monthly earnings:$600</p>
                    <p>Contract Duration: 3 months</p>
                  </div>
              </div>

              <div className='plansbox' data-aos ='zoom-in'>
                  <div className='planboximg'>
                    
                    <img src={sl} alt='' />
                  </div>

                  <div className='planwrt1'  >
                    <p>$1,500</p>
                    <p>Daily earnings:$60</p>
                    <p>Weakly earnings:$420</p>
                    <p>Monthly earnings:$1,800</p>
                    <p>Contract Duration: 6 months</p>
                  </div>
              </div>

              <div className='plansbox' data-aos ='zoom-in'>
                  <div className='planboximg'>
                    <img src={gd} alt='' />
                  </div>

                  <div className='planwrt1' >
                    <p>$2,800</p>
                    <p>Daily earnings:$100</p>
                    <p>Weakly earnings:$700</p>
                    <p>Monthly earnings:$3,000</p>
                    <p>Contract Duration:1 year signed contract</p>
                  </div>
              </div>
            </div>

            <Link to='/register' className='plansignbtn' >SIGN UP FOR MORE PLANS</Link>

          </div>
        </div>


        <div ref={vwref5} className='boxx2' >
          <div className='team' id='team' >
            <div className='abthd dd'  data-aos ='zoom-in'>
                <h1>OUR TEAM</h1>
                <h4>OUR TEAM</h4>
                <p className='hdteam'>
                Atrivas Team combines a passion for fintech and proven record in finance, development and deep market analysis. You are in safe hands.
                </p>
            </div>

            <div className='teambod'>
              <div className='teambox'  data-aos ='zoom-in'>
                <h3>Thomas Hubert</h3>
                <p>CEO & Lead Blockchain Developer</p>
                <div className='teamicon' >
                  <a href='/' >
                    <Facebook/>
                  </a>
                  <a href='/' >
                    <LinkedIn/>
                  </a>
                  <a href='/' >
                    <Twitter/>
                  </a>
                </div>
              </div>




              
              <div className='teambox tmbx'  data-aos ='zoom-in'>
                <h3>Micael Denise</h3>
                <p>CTO & Head Of Financial Trading</p>
                <div className='teamicon' >
                  <a href='/' >
                    <Facebook/>
                  </a>
                  <a href='/' >
                    <LinkedIn/>
                  </a>
                  <a href='/' >
                    <Twitter/>
                  </a>
                </div>
              </div>





              <div className='teambox'  data-aos ='zoom-in'>
                <h3>Maeres Oickey</h3>
                <p>Head UI/UX Designer & Product Manager</p>
                <div className='teamicon' >
                  <a href='/' >
                    <Facebook/>
                  </a>
                  <a href='/' >
                    <LinkedIn/>
                  </a>
                  <a href='/' >
                    <Twitter/>
                  </a>
                </div>
              </div>





              <div className='teambox tmbx'  data-aos ='zoom-in'>
                <h3>Lary Ryan Smith</h3>
                <p>Investment Co-ordinator</p>
                <div className='teamicon' >
                  <a href='/' >
                    <Facebook/>
                  </a>
                  <a href='/' >
                    <LinkedIn/>
                  </a>
                  <a href='/' >
                    <Twitter/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div ref={vwref5} className='boxx2'>

          <div className='press'>
            <div className='abthd dd'  data-aos ='zoom-in'>
                <h1>PRESS</h1>
                <h4>IN PRESS</h4>
            </div>

            <div className='pressimg'>
              <div className='press' data-aos ='zoom-in'>
                <img src={p1} alt='' />
                <img src={p2} alt='' />
                <img src={p3} alt='' />
              </div>

              <div className='press' data-aos ='zoom-in'>
                <img src={p4} alt='' />
                <img src={p5} alt='' />
                <img src={p6} alt='' />
              </div>

              <div className='press' data-aos ='zoom-in'>
                <img src={p7} alt='' />
                <img src={p8} alt='' />
                <img src={p9} alt='' />
              </div>
            </div>
          </div>
        </div>



        <div ref={vwref5} className='boxx2'>

          <div className='news'>
            <div className='abthd dd'  data-aos ='zoom-in'>
                <h1>FINANCIAL NEWS</h1>
                <h4>FINANCIAL NEWS</h4>
            </div>


            <div className='newsbod' data-aos ='zoom-in'>

              <div className='newbox'>
                <Story/>
              </div>

              <div className='newbox'>
                <Story/>
              </div>
             
            </div>
          </div>

        </div>



        <div ref={vwref6} className='boxx2'>

          <div id='faqs' className='faqbody'>
            <div className='abthd dd'  data-aos ='zoom-in'>
                <h1>FAQS</h1>
                <h4>FAQS</h4>
                <p className='hdteam'>
                Below we’ve provided answers to the most frequently asked questions. If you have any other questions, please get in touch.
                </p>
            </div>
            
            <div className='faqsbod' data-aos ='zoom-in'>
              <div className='faqsbtn'>
                {
                  fstg ?
                  <button onClick={fstgclick} className='fqbtns pinkbtn' >General Questions</button>
                  :
                  <button onClick={fstgclick} className='fqbtns' >General Questions</button>
                }
                
                {
                  secg ?
                  <button  onClick={secgclick} className='fqbtns pinkbtn'>Account Questions</button>
                  :
                  <button  onClick={secgclick} className='fqbtns'>Account Questions</button>
                }

                {
                  trdg ?
                  <button  onClick={trdgclick} className='fqbtns pinkbtn'>Investment Questions</button>
                  :
                  <button  onClick={trdgclick} className='fqbtns'>Investment Questions</button>
                }
              </div>

              {
                fstg ?
                <div className='faqsboxx' data-aos ='zoom-in'>
                <div className='faqsbox' onClick={fstclick}>
                  {
                    fst ?
                    <div className='fqasboxhd pink' >
                    <h3 >What is Surgement Signals</h3>
                    <MinimizeIcon/>
                    </div>
                    :
                    <div className='fqasboxhd'>
                      <h3>What is Surgement Signals</h3>
                      <Add/>
                    </div>
                  }
                  {
                    fst ?
                    <p>
                    Atrivas is a professional trading & investment company with emphasis on cryptocurrency, forex, binary option, CFDs. We are a group of qualified and trained financiers with technical knowledge. We actively monitor and trade the forex market, binary option, CFDs. The vast majority of customer deposits are stored offline in air-gapped cold storage. We only keep enough online to facilitate active trading, which greatly minimizes risk and exposure. Our auditing programs monitor every activity 24/7/365. Their job is to report and block any suspicious activity before it becomes a problem. We have strong roots and believe in customer service and transparency. We are committed to optimum delivery and uprightness. We let our service do the talking. Any funds you put into Atrivas are only used to facilitate trading through your account. Unlike banks, we do not operate on fractional reserves.
                    </p>
                  :
                  null
                  }
                </div>

                <div className='faqsbox' onClick={secclick}>
                  {
                      sec ?
                      <div className='fqasboxhd pink'>
                        <h3>How do i make money here?</h3>
                        <MinimizeIcon/>
                      </div>
                  :
                  <div className='fqasboxhd'>
                    <h3>How do i make money here?</h3>
                    <Add/>
                  </div>
                  }
                  {
                    sec ?
                    <p>
                    We provide individuals and businesses a world class experience to earn weekly/monthly passive income or otherwise decide to compound profits for improved returns. The more money you deposit, the more money you make. The profit is generated from trading cryptocurrencies as well as forex, CFDs, binary options in registered exchanges.
                    </p>
                  : null
                  }
                </div>

                <div className='faqsbox' onClick={trdclick}>
                  {
                    trd ?
                    <div className='fqasboxhd pink'>
                      <h3>Is using Atrivas free of charge?</h3>
                      <MinimizeIcon/>
                    </div>
                  :
                  <div className='fqasboxhd'>
                    <h3>Is using Atrivas free of charge?</h3>
                    <Add/>
                  </div>
                  }
                  {
                    trd ?
                    <p>
                    Yes, it is totally free of charge.                  
                    </p>
                  : null
                  }
                </div>

                <div className='faqsbox' onClick={frtclick}>
                  {
                    frt ?
                      <div className='fqasboxhd pink'>
                        <h3>Is Atrivas a legitimate company?</h3>
                        <MinimizeIcon/>
                      </div>
                      :
                      <div className='fqasboxhd'>
                        <h3>Is Atrivas a legitimate company?</h3>
                        <Add/>
                      </div>
                  }
                  {
                    frt ?
                    <p>
                      Atrivas LTD is a legal investment company incorporated in the United Kingdom.
                    </p>
                    : null
                  }
                </div>
                
                </div>
                :
                null
              }

              {
                secg ?
                <div className='faqsboxx' data-aos ='zoom-in'>
                <div className='faqsbox' onClick={fstclick}>
                  {
                    fst ?
                    <div className='fqasboxhd pink' >
                    <h3 >What's the limit to the number of accounts i own?</h3>
                    <MinimizeIcon/>
                    </div>
                    :
                    <div className='fqasboxhd'>
                      <h3>What's the limit to the number of accounts i own?</h3>
                      <Add/>
                    </div>
                  }
                  {
                    fst ?
                    <p>
                    
                    Any client can have any number of accounts they wish to as long as they keep them funded.
                    </p>
                  :
                  null
                  }
                </div>

                <div className='faqsbox' onClick={secclick}>
                  {
                      sec ?
                      <div className='fqasboxhd pink'>
                        <h3>How do i make money here?</h3>
                        <MinimizeIcon/>
                      </div>
                  :
                  <div className='fqasboxhd'>
                    <h3> i'm having problems registering an account?</h3>
                    <Add/>
                  </div>
                  }
                  {
                    sec ?
                    <p>
                    Check the entered information is correct & accurate. Displayed errors can help you, they show where you have made mistakes. Sometimes it could be issues with your browser. Try to change your browser or turn off any translator if you use one. If you need further assistance don't hesitate to contact us.
                    </p>
                  : null
                  }
                </div>

                <div className='faqsbox' onClick={trdclick}>
                  {
                    trd ?
                    <div className='fqasboxhd pink'>
                      <h3> What is the minimum deposit amount?</h3>
                      <MinimizeIcon/>
                    </div>
                  :
                  <div className='fqasboxhd'>
                    <h3> What is the minimum deposit amount?</h3>
                    <Add/>
                  </div>
                  }
                  {
                    trd ?
                    <p>
                    The minimum that you can deposit is $1000 per processor. There is currently no maximum amount you can have in your account.               
                    </p>
                  : null
                  }
                </div>

                <div className='faqsbox' onClick={frtclick}>
                  {
                    frt ?
                      <div className='fqasboxhd pink'>
                        <h3> How do i withdraw my earnings?</h3>
                        <MinimizeIcon/>
                      </div>
                      :
                      <div className='fqasboxhd'>
                        <h3> How do i withdraw my earnings?</h3>
                        <Add/>
                      </div>
                  }
                  {
                    frt ?
                    <p>
                    Payouts are sent to you automatically when you request a withdrawal depending on your agreed schedule and will be to your provided payment details.
                    </p>
                    : null
                  }
                </div>
                
              </div>
              : null
              }

              
              {
                trdg ?
                <div className='faqsboxx' data-aos ='zoom-in'>
                <div className='faqsbox' onClick={fstclick}>
                  {
                    fst ?
                    <div className='fqasboxhd pink' >
                    <h3 >Who is eligible to invest?</h3>
                    <MinimizeIcon/>
                    </div>
                    :
                    <div className='fqasboxhd'>
                      <h3>Who is eligible to invest?</h3>
                      <Add/>
                    </div>
                  }
                  {
                    fst ?
                    <p>
                    
                    Atrivas is open to everyone of legal age to make investments and financial decisions for themselves. You are responsible for making sure that you comply with local laws.
                    </p>
                  :
                  null
                  }
                </div>

                <div className='faqsbox' onClick={secclick}>
                  {
                      sec ?
                      <div className='fqasboxhd pink'>
                        <h3>How much can i make?</h3>
                        <MinimizeIcon/>
                      </div>
                  :
                  <div className='fqasboxhd'>
                    <h3>How much can i make?</h3>
                    <Add/>
                  </div>
                  }
                  {
                    sec ?
                    <p>
                    
                    The rates of income highly depend on the amount you invest. You can earn from 50% weekly. For more information, view the pricing table on the homepage.
                    </p>
                  : null
                  }
                </div>

                <div className='faqsbox' onClick={frtclick}>
                  {
                    frt ?
                      <div className='fqasboxhd pink'>
                        <h3>What is the minimum investment</h3>
                        <MinimizeIcon/>
                      </div>
                      :
                      <div className='fqasboxhd'>
                        <h3>What is the minimum investment</h3>
                        <Add/>
                      </div>
                  }
                  {
                    frt ?
                    <p>
                    
                    The minimum investment plan is BRONZE which costs from $1000 to $5000
                    </p>
                    : null
                  }
                </div>
                
              </div>
              : null
              }



            </div>

          </div>
            
        </div>


        <div ref={vwref7} className='boxx2' >
          <div className='about' id='reviews' >
            <div className='abthd dd'  data-aos ='zoom-in'>
              <h1>TESTIMONIAL</h1>
              <h3>TESTIMONIALS</h3>
            </div>

            <div className='abtbod'  >
              <div className='abtbox'  data-aos ='zoom-in'>
                <h3>ALEXANDAR OSTERWARD USA, JANUARY 2020</h3>
                <p>
                I am enjoying the profits very much. It has already made a huge difference in my trading. Your plans are worth every penny. Thanks for the opportunity you have given to me!
                </p>
              </div>

              <div  className='abtbox' data-aos ='zoom-in'>
                <h3>WAYNE DIANA AUSTRALIA, JANUARY 2020</h3>
                <p>
                The most professional delivery of service in my experience. A genuine desire to help people reach become financially stable – has provided a significant turning point in my career.
                </p>
              </div>

              <div className='abtbox' data-aos ='zoom-in'>
                <h3>BROWN ROBERTS CANADA, FEBURARY 2020</h3>
                <p>
                I’m doing very well. Trading just keeps going to the next level for me. I’ve broken through the 7 figure barrier (although in CAD.. too bad my account isn’t in GBP), and plan on continuing to keep climbing!
                </p>
              </div>

              <div className='abtbox' data-aos ='zoom-in'>
                <h3>ESKIMOS MELBOURNE, AUSTRALIA, DECEMBER, 2019</h3>
                <p>
                I was on the edge to stop trading or do something different. I paid for bronze plan and never looked back. It is a simple and eye-opening. Recommend.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div ref={vwref8} className='boxx2' >
              <Background/>
            <div id='contact' className='contact' >
              <div className='contacts' data-aos ='zoom-in'>
                <Lottie animationData={dl} className='dl' />
                <div className='contactlinks'>
                  {/* <a href='tel:+1-2738-3847'> <Phone/> +1-2738-3847</a> */}
                  <a href='info@Atrivas.com'> <Email/> info@Atrivas.com</a>
                </div>
              </div>


              <div className='contactfield'>
                <h3 data-aos ='zoom-in'>CONTACT US</h3>
                <p data-aos ='zoom-in'>
                We are always open and welcome to questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.
                </p>

                <div className='contactform'>
                  <div className='contactinputs'>
                    <div className='contactinput' data-aos ='zoom-in'>
                      <p>YOUR NAME</p>
                      <input placeholder='YOUR FULL NAME' />
                    </div>

                    <div className='contactinput' data-aos ='zoom-in'>
                      <p>YOUR EMAIL</p>
                      <input placeholder='YOUR EMAIL ADDRESS' />
                    </div>
                  </div>

                  <div className='contacttext' data-aos ='zoom-in'>
                    <p>YOUR MESSAGE</p>
                    <textarea placeholder='LEAVE YOUR QUESTION OR COMMENT HERE' />
                  </div>

                  <button onClick={()=>{
                    alert('message sent')
                    window.location.reload('')
                  }} data-aos ='zoom-in'>SEND MESSAGE</button>
                </div>
              </div>
            </div>

            <div className='homebottom' >
              <p>Atrivas © 2014. ALL RIGHTS RESERVED</p>

              <div className='bottomlink'>
                <a href='/'>PRIVACY POLICY</a>
                <a href='/'>TERMS & CONDITIONS</a>
              </div>
            </div>
        </div>      



        {/* <ReactWhatsapp number='+234 80600180873' className='whticon' >
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png' alt='' />
          <p>Drop a Message</p>
        </ReactWhatsapp>    */}   

        

        <Chaticon/>

          
      </div>
  )



}

export default Home