
import React, { useState } from 'react'

function CelciusToFahrenayt() {

    const [celcius, setcelcius] = useState(0)
    const [fahrenayt, setfahrenayt] = useState(0)


    const convert = () => {
        if (!isNaN(celcius)){
            let result = ((9 / 5) * celcius) + 32
            setfahrenayt(result)
        }
        else{
            alert("Lütfen sayısal bir değer giriniz!")
        }
            
    }

    return <>
        <div>
            <label htmlFor="">Celcius: </label>
            <input type='text' onChange={(e) => setcelcius(e.target.value)} />
            <button onClick={convert}>Convert</button>
        </div>
        <hr />
        <div>
            <h1>Fahrenayt: {fahrenayt} </h1>
        </div>
    </>
}

export default CelciusToFahrenayt