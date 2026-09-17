import React, { useEffect, useState } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Market from './Market';
import Min from './Min';
import Stories from './Stories';
import Send from './Send';
import Withdraw from './Withdraw';
import Receipt from './Receipt';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { info } from '../features/infoSlice';
import Plans from './Plans';
import Referrals from './Referrals';
import Coinamount from './Coinamount';
import Selectwallet from './Selectwallet';
import Wallet from './Wallet';
import Deposit from './Deposit';
import Uploadproof from './Uploadproof';
import Withmethod from './Withmethod';
import Paypal from './Paypal';
import Cashapp from './Cashapp';
import Crypto from './Crypto';
import Bank from './Bank';
import Verphone from './Verphone';
import Verid from './Verid';
import Updatepass from './Updatepass';
import Copytrade from './Copytrade';
import { exp } from '../features/expSlice';
import Bottom from './Bottom';

function Logged() {

  const user = useSelector(selectUser)

  const [userinfo, setuserinfo] = useState([])

  const dispatch = useDispatch()

  
  


  useEffect(()=>{
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            setuserinfo( doc.data());
        });

        return ()=>{
          unsub()
        }
  },[user.uid])

  useEffect(()=>{
    if(userinfo){
      dispatch(
        info({
          userinfo : userinfo,
        })
      )
    }
},[dispatch, userinfo])





const [expt, setexpt] = useState([])




useEffect(()=>{
      const unsub = onSnapshot(doc(db, "copy", user.uid), (doc) => {
          setexpt( doc.data());
      });

      return ()=>{
        unsub()
      }
},[user.uid])

useEffect(()=>{
  if(expt){
    dispatch(
      exp({
        expt : expt,
      })
    )
  }
},[dispatch, expt])


const [num, setnum] = useState()
const [num1, setnum1] = useState()

useEffect(() => {
  if( user.email){
  setnum(JSON.parse(localStorage.getItem(`${user.uid}`)));
    setnum1(0)
}
  
}, [ num, user.uid, user.email]);




  return (
    <Router>
     <div>
     <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/register' element={<Dashboard/>} />
        <Route path='/login' element={<Dashboard/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/mining' element={<Min/>} />
        <Route path='/story' element={<Stories/>} />
        <Route path='/send' element={<Send/>} />
        <Route path='/withdraw' element={<Withdraw/>} />
        <Route path='/receipt' element={<Receipt/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/refferals' element={<Referrals/>} />
        <Route path='/deposits' element={<Deposit/>} />
        <Route path='/uploadproof' element={<Uploadproof/>} />
        <Route path='/amount' element={<Coinamount/>} />
        <Route path='/selectwallet' element={<Selectwallet/>} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/withdrawalmethod' element={<Withmethod/>} />
        <Route path='/paypal' element={<Paypal/>} />
        <Route path='/cashapp' element={<Cashapp/>} />
        <Route path='/crypto' element={<Crypto/>} />
        <Route path='/bank' element={<Bank/>} />
        <Route path='/verifyphonenumber' element={<Verphone/>} />
        <Route path='/verifyidentification' element={<Verid/>} />
        <Route path='/updatepassword' element={<Updatepass/>} />
        <Route path='/copytraders' element={<Copytrade/>} />
      </Routes>

      <Bottom num={num} num1={num1} setnum1={setnum1}   />
     </div>
    </Router>
  );
}

export default Logged;
