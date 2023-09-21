import React from 'react'
import { TwinSpin } from "react-cssfx-loading";

const Loader=(prop)=> {
    if(prop.show==true){
        return(
            <div className='container  d-flex justify-content-center flex-column align-items-center' style={{height:"90vh"}}>
                <TwinSpin color="#007BFF" width="100px" height="100px"  />
                <p className='pt-3'>{prop.message}</p>
            </div>
        );
    }
}

export default Loader;
