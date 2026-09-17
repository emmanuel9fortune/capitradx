import React from 'react'
import Header from './Header'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


function Verphone() {

    const auth = getAuth();
   
    const ver = ()=>{
        if(!window.recaptchaVerifier ){
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignInSubmit();
                }
                });
        }
    }


    const onSignInSubmit=()=>{
        ver()

        const phoneNumber = '+23467172161';

        const appVerifier = window.recaptchaVerifier

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            console.log('yes');
            window.confirmationResult = confirmationResult;
        }).catch((error) => {
        });
    }

  return (
    <div className='dashboard' >
        <Header/>

        <div className='fund1' >
            <div className='fund2' >
                <div className='binp'>
                <div className='bin'>
                    <input placeholder='Amount' />
                    <button onClick={onSignInSubmit} >verify</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verphone