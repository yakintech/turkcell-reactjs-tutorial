import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    console.log("Products component rendered!")

    const [products, setproducts] = useState([])

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/productssss")
            .then(res => setproducts(res.data))
            .catch(err => console.log("error: ", err))

    }, [])


    return <>
        <hr />
        <h1>Products Length: {products.length}</h1>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default Products