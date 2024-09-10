import React, { useState } from 'react'

function StateInputSample() {

    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")


    const showFullName = () => {
        alert(name + " " + surname)
    }

    return <>
        <label htmlFor="">Name: </label>
        <input type='text' onChange={(e) => setname(e.target.value)} />
        <hr />
        <label htmlFor="">Surname: </label>
        <input type='text' onChange={(e) => setsurname(e.target.value)} />
        <hr />
        <button onClick={showFullName}>Full Name</button>
    </>
}

export default StateInputSample