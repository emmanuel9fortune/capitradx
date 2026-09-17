import React, { useEffect, useRef, useState } from 'react'
import './bottom.css'
import { AutoGraph, BarChart, Dashboard, Newspaper } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Bottom({ num, num1, setnum1}) {

    const reff = useRef()


    const [ref1, setref1] = useState('0')
    const [ref2, setref2] = useState('0')

     useEffect(()=>{
        setref1(localStorage.getItem('pos'))
        setref2(localStorage.getItem('pos1'))

        reff.current.style.left = `${ref2}%`
     }, [ref2])


      const fstclick =()=>{ 
        setref1('0')
        localStorage.setItem('pos', 0)
        localStorage.setItem('pos1', 0)
        reff.current.style.left = '0'
        setTimeout(() => {
        }, 50);
      }

      const secclick =()=>{
        setref1('1')
        localStorage.setItem('pos', 1)
        localStorage.setItem('pos1', 25)
        reff.current.style.left = '25%'
        setTimeout(() => {
        }, 50);
      }

      const trdclick =()=>{
        setref1('2')
        localStorage.setItem('pos', 2)
        localStorage.setItem('pos1', 50)
        reff.current.style.left = '50%'
        setTimeout(() => {
        }, 50);
      }

      const frtclick =()=>{
        setref1('3')
        localStorage.setItem('pos', 3)
        localStorage.setItem('pos1', 75)
          reff.current.style.left = '75%'
        setnum1(0)
      }


  

  return (
    <div className={ 'bottom' }>
        {/* darkbottom */}
        <div className='bottombod'>
        { 
          ref1 === '0' ?
        <Link onClick={fstclick} to='/' className={'darkbottomlinks'} >
            <Dashboard id='bttmmicons' />
        </Link>
          :
        <Link onClick={fstclick} to='/' className={ 'darkbottomlinksL'} > 
        <Dashboard id='bttmmicons'/>
        </Link>
        }

        {
          ref1 === '1' ?
        <Link  onClick={secclick} to='/mining' className={'darkbottomlinks'} > 
        <AutoGraph id='bttmmicons' />
        </Link>
          :
        <Link  onClick={secclick} to='/mining' className={ 'darkbottomlinksL'} > 
        <AutoGraph id='bttmmicons' />
        </Link>
        }

        {
          ref1 === '2' ?
        <Link onClick={trdclick} to='/market' className={'darkbottomlinks'} > 
            <BarChart id='bttmmicons' />
        </Link>
          :
        <Link onClick={trdclick} to='/market' className={ 'darkbottomlinksL'} > 
            <BarChart id='bttmmicons' />
        </Link>
        }
        
        <Link onClick={frtclick} to='/story' className={ 'darkbottomlinksL'} > 
            <Newspaper id='bttmmicons' />
        </Link>

        

          <div ref={reff} className='tube'>
              <div className="tubelight">
                <div className="light-ray"></div>
              </div>
        </div>


        
        </div>
    </div>
  )
}

export default Bottom