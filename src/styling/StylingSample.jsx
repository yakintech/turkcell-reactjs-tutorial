import React from 'react'
import { divStyle } from './style'
import './style.css'

function StylingSample() {

    // let divStyle = {
    //     width: 300,
    //     height: 300,
    //     borderStyle: "solid"
    // }

    

    return <>
        <div style={{display:'flex'}}>
            <div style={divStyle}>

            </div>
            <div style={{ width: 400, height: 150, borderStyle: 'solid', borderColor: "aqua" }}>

            </div>
        </div>
        <div className='box'>

        </div>
    </>
}

export default StylingSample