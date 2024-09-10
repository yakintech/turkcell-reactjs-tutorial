import React from 'react'

function JsxEvents() {

    const hello = () => {
        alert("Hello Reactjs!")
    }

    const calc = (number) => {
        alert(number * 1.2)
    }


    return <>
        <button onClick={hello}>Hello Reactjs</button>
        <button onClick={() => hello()}>Hello Reactjs - 2</button>
        <button onClick={() => calc(100)}>Calc</button>

    </>
}

export default JsxEvents