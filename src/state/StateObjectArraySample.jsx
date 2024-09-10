import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function StateObjectArraySample() {

    const [products, setproducts] = useState(productsData)
    const [isSorted, setisSorted] = useState(false)

    //bu id ye sahip ürünü mevcut diziden çıkarmak
    const deleteProduct = (id) => {
        var result = window.confirm("Are u sure?");

        if (result) {
            var filteredProducts = products.filter(q => q.id != id)
            setproducts(filteredProducts)
        }
    }

    let totalPrice = 0;

    products.forEach(item => {
        totalPrice = totalPrice + item.unitPrice
    })

    const sortByUnitPrice = () => {

        if (!isSorted)
            products.sort((x, y) => x.unitPrice - y.unitPrice)
        else
            products.sort((x, y) => y.unitPrice - x.unitPrice)

        setproducts([...products])
        setisSorted(!isSorted)
    }


    return <>
        <h1>Lenght: {products.length}</h1>
        <hr />
        <h1>Total: {totalPrice.toFixed(2)}</h1>
        <hr />
        <button onClick={() => setproducts([])}>Empty</button>
        <button onClick={() => setproducts(productsData)}>Load</button>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{ cursor: 'pointer' }} onClick={sortByUnitPrice}>Unit Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete Product</button></td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default StateObjectArraySample