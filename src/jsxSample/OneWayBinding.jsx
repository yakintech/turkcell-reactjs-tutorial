import React from 'react'

function OneWayBinding() {

    //var,let ve const
    var name = "Çağatay"
    var age = 18
    var cities = ["İzmir", "İstanbul", "Ankara"]
    var onlineStatus = true

    return <>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <hr />
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
        {
            onlineStatus == true ? <h1>User Online!</h1> : <h1>User Offline</h1>
        }
    </>
}

export default OneWayBinding