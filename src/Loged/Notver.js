import { Lottie } from "lottie-react";
import React, { useEffect, useState } from 'react'
import an from '../asset/notver.json'
import { sendEmailVerification, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



function Notver() {

    const navigate = useNavigate();

    // Countdown starts at 60 seconds
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {

        // Stop when countdown reaches 0
        if (countdown <= 0) return;

        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [countdown]);


    const resend = async () => {

        // Don't allow resend while countdown is active
        if (countdown > 0) return;

        try {

            await sendEmailVerification(auth.currentUser);

            toast.success('Verification link sent');

            // Restart countdown
            setCountdown(60);

        } catch (error) {

            toast.error('Unable to send verification email');

            console.error(error);
        }
    };


    return (
        <div className='verbox'>

            <ToastContainer />

            <div className='notverbod'>

                <Lottie
                    className='notveranim'
                    animationData={an}
                />

                <h3>Email Verification</h3>

                <p>
                    You have been sent an email. After verification reload
                    this page (Check spam for mails)
                </p>


                {/* RESEND / COUNTDOWN */}

                <button
                    onClick={resend}
                    disabled={countdown > 0}
                    className='logbtn'
                >
                    {countdown > 0
                        ? `RESEND IN ${countdown}s`
                        : 'RESEND'
                    }
                </button>


                {/* LOGOUT */}

                <button
                    onClick={() => signOut(auth)}
                    className='regbtn lgbtnss'
                >
                    LOGOUT
                </button>

            </div>

        </div>
    );
}

export default Notver;
