import { Lottie } from "lottie-react";
import ld from './asset/ld.json'


const Loading =()=>{
    return (
        <div className='verbox'>
            <div className='notverbod'>
                <Lottie animationData={ld}  className='notveranim' />
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default Loading