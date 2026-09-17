import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectexp } from '../features/expSlice'
import { grab } from '../features/grabSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { selectUser } from '../features/userSlice'

function Expslip({ex}) {


    const exp = useSelector(selectexp)
    const user = useSelector(selectUser)



    const dispatch = useDispatch()

    const disp = () =>{

        dispatch(
            grab({
                grab : ex
            })
        )
    }


    const fstbtn =async()=>{
        if(!exp?.expt.us1){
            await updateDoc(doc(db, 'copy', user.uid),{
                us1 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us1 : false
            })
        }

    }


    const secbtn =async()=>{
        if(!exp?.expt.us2){
            await updateDoc(doc(db, 'copy', user.uid),{
                us2 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us2 : false
            })
        }
    }


    const trdbtn =async()=>{
        if(!exp?.expt.us3){
            await updateDoc(doc(db, 'copy', user.uid),{
                us3 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us3 : false
            })
        }
    }


    const frtbtn =async()=>{
        if(!exp?.expt.us4){
            await updateDoc(doc(db, 'copy', user.uid),{
                us4 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us4 : false
            })
        }
    }


    const fifbtn =async()=>{
        if(!exp?.expt.us5){
            await updateDoc(doc(db, 'copy', user.uid),{
                us5 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us5 : false
            })
        }
    }


    const sixbtn =async()=>{
        if(!exp?.expt.us6){
            await updateDoc(doc(db, 'copy', user.uid),{
                us6 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us6 : false
            })
        }
    }


    const sevbtn =async()=>{
        if(!exp?.expt.us7){
            await updateDoc(doc(db, 'copy', user.uid),{
                us7 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us7 : false
            })
        }
    }


    const eitbtn =async()=>{
        if(!exp?.expt.us9){
            await updateDoc(doc(db, 'copy', user.uid),{
                us9 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us9 : false
            })
        }
    }


    const ninbtn =async()=>{
        if(!exp?.expt.us10){
            await updateDoc(doc(db, 'copy', user.uid),{
                us10 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us10 : false
            })
        }
    }


    const tenbtn =async()=>{
        if(!exp?.expt.us11){
            await updateDoc(doc(db, 'copy', user.uid),{
                us11 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us11 : false
            })
        }
    }


    const elvbtn =async()=>{
        if(!exp?.expt.us12){
            await updateDoc(doc(db, 'copy', user.uid),{
                us12 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us12 : false
            })
        }
    }


    const twvbtn =async()=>{
        if(!exp?.expt.us13){
            await updateDoc(doc(db, 'copy', user.uid),{
                us13 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us13 : false
            })
        }
    }


    const trtbtn =async()=>{
        if(!exp?.expt.us14){
            await updateDoc(doc(db, 'copy', user.uid),{
                us14 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us14 : false
            })
        }
    }


    const fttbtn =async()=>{
        if(!exp?.expt.us15){
            await updateDoc(doc(db, 'copy', user.uid),{
                us15 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us15 : false
            })
        }
    }


    const fftbtn =async()=>{
        if(!exp?.expt.us16){
            await updateDoc(doc(db, 'copy', user.uid),{
                us16 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us16 : false
            })
        }
    }


    const sttbtn =async()=>{
        if(!exp?.expt.us17){
            await updateDoc(doc(db, 'copy', user.uid),{
                us17 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us17 : false
            })
        }
    }


    const svtbtn =async()=>{
        if(!exp?.expt.us18){
            await updateDoc(doc(db, 'copy', user.uid),{
                us18 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us18 : false
            })
        }
    }


    const ettbtn =async()=>{
        if(!exp?.expt.us20){
            await updateDoc(doc(db, 'copy', user.uid),{
                us20 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us20 : false
            })
        }
    }


    const nttbtn =async()=>{
        if(!exp?.expt.us21){
            await updateDoc(doc(db, 'copy', user.uid),{
                us21 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us21 : false
            })
        }
    }

    const twtbtn =async()=>{
        if(!exp?.expt.us22){
            await updateDoc(doc(db, 'copy', user.uid),{
                us22 : true
            })
        }else{
            await updateDoc(doc(db, 'copy', user.uid),{
                us22 : false
            })
        }
    }



    
  return (
    <div className='expslip'>
        <div onClick={disp} to={'/expert'} className='exphd' >
            <img src={ex.img} alt='' />
            <div className='exprate'>
                <h3>{ex.name}</h3>
                <p>{ex.wrate}</p>
                <p>{ex.pshr}</p>
            </div> 
        </div> 

        <div className='cpbtn'> 
            { ex.pos === 'us1' ?
                <>
                {
                    !exp?.expt.us1 ?
                    <p onClick={fstbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={fstbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us2' ?
                <>
                {
                    !exp?.expt.us2 ?
                    <p onClick={secbtn} >COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={secbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us3' ?
                <>
                {
                    !exp?.expt.us3 ?
                    <p onClick={trdbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={trdbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us4' ?
                <>
                {
                    !exp?.expt.us4 ?
                    <p onClick={frtbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={frtbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us5' ?
                <>
                {
                    !exp?.expt.us5 ? 
                    <p onClick={fifbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={fifbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us6' ?
                <>
                {
                    !exp?.expt.us6 ?
                    <p onClick={sixbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={sixbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us7' ?
                <>
                {
                    !exp?.expt.us7 ?
                    <p onClick={sevbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={sevbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us8' ?
                <>
                {
                    !exp?.expt.us8 ?
                    <p onClick={eitbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={eitbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us9' ?
                <>
                {
                    !exp?.expt.us9 ?
                    <p onClick={eitbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={eitbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us10' ?
                <>
                {
                    !exp?.expt.us10 ?
                    <p onClick={ninbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={ninbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us11' ?
                <>
                {
                    !exp?.expt.us11 ?
                    <p onClick={tenbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={tenbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us12' ?
                <>
                {
                    !exp?.expt.us12 ?
                    <p onClick={elvbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={elvbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us13' ?
                <>
                {
                    !exp?.expt.us13 ?
                    <p onClick={twvbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={twvbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us14' ?
                <>
                {
                    !exp?.expt.us14 ?
                    <p onClick={trtbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={trtbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us15' ?
                <>
                {
                    !exp?.expt.us15 ?
                    <p onClick={fttbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={fttbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us16' ?
                <>
                {
                    !exp?.expt.us16 ?
                    <p onClick={fftbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={fftbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us17' ?
                <>
                {
                    !exp?.expt.us17 ?
                    <p onClick={sttbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={sttbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us18' ?
                <>
                {
                    !exp?.expt.us18 ?
                    <p onClick={svtbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={svtbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us19' ?
                <>
                {
                    !exp?.expt.us19 ?
                    <p>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us20' ?
                <>
                {
                    !exp?.expt.us20 ?
                    <p onClick={ettbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={ettbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us21' ?
                <>
                {
                    !exp?.expt.us21 ?
                    <p onClick={nttbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={nttbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
            { ex.pos === 'us22' ?
                <>
                {
                    !exp?.expt.us22 ?
                    <p onClick={twtbtn}>COPY</p>
                    :
                    <div className='clbtn'>
                        <p>Copied</p>
                        <button onClick={twtbtn}>CANCEL</button>
                    </div>
                }
                </>
                :
                null
            }
        </div>
    </div>
  )
}

export default Expslip