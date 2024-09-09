import React from 'react'

function OneWayBinding() {

    //var,let ve const
    var name = "Çağatay"
    var age = 18
    var cities = ["İzmir", "İstanbul", "Ankara"]

    return <>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <hr />
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

export default OneWayBinding