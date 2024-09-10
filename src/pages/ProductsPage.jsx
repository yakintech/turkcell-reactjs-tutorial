import React from 'react'
import { productsData } from '../data/productsData'
import { Link } from 'react-router-dom'

function ProductsPage() {

    let totalPrice = 0

    productsData.forEach(item => {
        if (!isNaN(item.unitPrice))
            totalPrice = item.unitPrice + totalPrice
    })

    let avgPrice = totalPrice / productsData.length

    return <>
        <h1>Length: {productsData.length}</h1>
        <hr />
        <h1>Total Price: {totalPrice}</h1>
        <hr />
        <h1>Avg Price: {avgPrice.toFixed(2)}</h1>
        <hr />

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    productsData.map(item => {

                        return <tr>
                            <td>
                               <Link to={'/products/' + item.id}>{item.id}</Link>
                            </td>
                            <td>{item.name.toUpperCase()}</td>
                            <td>{item.unitPrice?.toFixed(2)}</td>
                            <td>{item.unitsInStock}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
}

export default ProductsPage