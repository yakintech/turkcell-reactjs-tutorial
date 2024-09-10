import React, { useState } from 'react'

function ColorDivSample() {
    const [color, setcolor] = useState("red")

    console.log("RENDER")

    return <>
        <div>
            <label htmlFor="">Color: </label>
            <input type='text' onChange={(e) => setcolor(e.target.value)} />
        </div>
        <hr />
        <div style={{ width: 400, height: 400, backgroundColor: color, borderStyle:'solid' }}>

        </div>
    </>
}

export default ColorDivSample