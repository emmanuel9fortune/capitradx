import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import lg from './img/logo.png'
import Ticker from './Loged/widgets/Ticker'



function Header({vw1, vw2, vw3, vw4, vw5, vw6, vw7, vw8, menu, menubtn}) {

  const scrollToAbout = (e) => {
    // Select the element by ID and scroll to it
    const aboutSection = document.getElementById(`${e}`);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <div className='header' data-aos ='zoom-in'>
      <div className='desktophd'>
        <img style={{width:'12em', height:'6em'}} src={lg} alt='' />
        <a className={vw1 ? 'hdlnk1' : 'hdlnk2'} href='/' >Home</a>

        <p className={vw2 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('about')}  >About</p>

        <p className={vw3 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('features')}  >Features</p> 

        <p className={vw4 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('investments')} >Investments</p>

        <p className={vw5 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('team')} >Team</p>

        <p className={vw6 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('faqs')} >FAQ</p>

        <p className={vw7 ? 'hdlnk1' : 'hdlnk2'}  > Reviews</p>

        <p className={vw8 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('contact')} >Contact Us</p>

        <div className='buttons'>
          <Link to='/login' className='btnl'>Login</Link>
          <Link to='/register' className='btnl'>Register</Link>
        </div>
      </div>

      <div className='mobbheader'>
        <div className='mobbhead'>
          <img style={{width:'4em', height:'4em'}}  src={lg} alt='' />

          {
            menu ?
            null
            :
            <div onClick={menubtn} className='mobbmenu'>
              <Menu/>
            </div>
          }
        </div>
      </div>

        

      <div className='hdcrp'>
        <Ticker/>
      </div>
   </div>
  )
}

export default Header