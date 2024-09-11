import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        load();
    }, [])

    const load = () => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data)
                setloading(false)
            })
            .catch(err => console.log("error: ", err))
    }

    const deleteProduct = (id) => {
        var confirm = window.confirm("Are u sure?")

        if (confirm) {
            setloading(true)
            axios.delete("https://northwind.vercel.app/api/products/" + id)
                .then(res => {
                    load()
                })
        }
    }


    return <>
        {
            loading == true ? <h1>loading...</h1> : <>
                <hr />
                <h1>Products Length: {products.length}</h1>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(item => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.unitPrice}</td>
                                    <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        }
    </>
}

export default Products