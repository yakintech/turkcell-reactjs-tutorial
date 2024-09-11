import axios from 'axios'
import React, { useEffect, useState } from 'react'

//props, state, effect(life cycle)
function Suppliers() {

    const [suppliers, setsuppliers] = useState([])


    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/suppliers")
            .then(res => {
                setsuppliers(res.data)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [])

    return <>
        <ul>
            {
                suppliers.map(item => <li>{item.companyName}</li>)
            }
        </ul>
    </>
}

export default Suppliers