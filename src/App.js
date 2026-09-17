import React, { useEffect, useState } from 'react';
import './App.css';
import Unloged from './Unloged';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Logged from './Loged/Logged';
import Loading from './Loading';
import TawkChat from './TawkChat';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(
          login({
            email : authUser.email,
            displayName : authUser.displayName,
            photoURL : authUser.photoURL,
            uid: authUser.uid,
            ver : authUser.emailVerified
          })
        )
      }else{
        dispatch(
            logout()
        )
      } 
    })
  },[dispatch])



  const [loading, setloading] = useState(false)


  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    }, 4000)

    clearTimeout(setloading(true))
  },[])

  return (
    <div>
      {
        loading?
        <Loading/>
        :
        <>
        {
        user ?
          <Logged/>
          :
          <Unloged/>
        }
        </>
      }
      {/* <TawkChat/> */}
    </div>
  );
}

export default App;
