import { Cancel } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Mobhd({vw1, vw2, vw3, vw4, vw5, vw6, vw7, vw8, menubtn}) {
  const scrollToAbout = (e) => {
    // Select the element by ID and scroll to it
    const aboutSection = document.getElementById(`${e}`);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='mobbnavlinks' onClick={menubtn}>
            <div className='monavlink'>
              <div onClick={menubtn} className='mobcancel'>
                <Cancel/>
              </div>

              <div className='mobhdlinks'>

                <a className={vw1 ? 'hdlnk1' : 'hdlnk2'} href='/' >Home</a>

                <p className={vw2 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('about')}  >About</p>

                <p className={vw3 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('features')}  >Features</p> 

                <p className={vw4 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('investments')} >Investments</p>

                <p className={vw5 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('team')} >Team</p>

                <p className={vw6 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('faqs')} >FAQ</p>

                <p className={vw7 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('reviews')} > Reviews</p>

                <p className={vw8 ? 'hdlnk1' : 'hdlnk2'} onClick={()=>scrollToAbout('contact')} >Contact Us</p>
              </div>

              <div className='mobbuttons'>
                <Link to='/login' className='btnl'>Login</Link>
                <Link to='/register' className='btnl'>Register</Link>
              </div>
            </div>
      </div>
  )
}

export default Mobhd