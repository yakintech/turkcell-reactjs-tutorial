import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../data/productsData'

function ProductDetail() {

    const { id } = useParams()

    let product = productsData.find(item => item.id == id)

    if(!product)
        return <h1>Product not found!</h1>

    return <>

        <h2>Id: {id}</h2>
        <hr />
        <h2>Name: {product.name}</h2>
        <hr />
        <h2>Unit Price: {product.unitPrice}</h2>
        <hr />
        <h2>Stock: {product.unitsInStock}</h2>
        <hr />
        <h2>Quantity Per Unit: {product.quantityPerUnit}</h2>
    
    </>
}

export default ProductDetail