import React, { useState } from 'react'

function StateIfElseSample() {

    const [userStatus, setuserStatus] = useState(false)

    return <>
        <button onClick={() => setuserStatus(!userStatus)}>Change Status</button>
        {
            userStatus == true ? <h1>User Online!</h1> : <h1>User Offline</h1>
        }

    </>
}

export default StateIfElseSample