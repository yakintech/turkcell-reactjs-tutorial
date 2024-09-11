import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0)
    const [unitsInStock, setunitsInStock] = useState(0)
    const [selectedCategoryId, setselectedCategoryId] = useState(0)
    const [discontiuned, setdiscontiuned] = useState(false)

    const [categories, setcategories] = useState([])


    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data)
            })
    }, [])


    const add = () => {
        let newProduct = {
            name: name,
            unitPrice: Number(unitPrice),
            unitsInStock: Number(unitsInStock),
            categoryId: Number(selectedCategoryId),
            discontinued: Boolean(discontiuned)
        }


        axios.post("https://northwind.vercel.app/api/products", newProduct)
            .then(res => {
                alert("Success")
            })
    }


    return <>
        <div>
            <label htmlFor="">Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <hr />
        <div>
            <label htmlFor="">Unit Price</label>
            <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <hr />
        <div>
            <label htmlFor="">Units In Stock</label>
            <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
        </div>
        <hr />
        <div>
            <label htmlFor="">Category: </label>
            <select
                value={selectedCategoryId}
                onChange={e => setselectedCategoryId(e.target.value)}>
                {
                    categories.map(item => <option value={item.id}>{item.name}</option>)
                }
            </select>
        </div>
        <hr />
        <div>
            <label htmlFor="">Discontiuned</label>
            <input type='radio' name='discontiuned' value='true' onChange={e => setdiscontiuned(true)} /> Yes
            <input type='radio' name='discontiuned' value='false' onChange={e => setdiscontiuned(false)} /> No
        </div>
        <hr />
        <div>
            <button onClick={add}>Add</button>
        </div>
    </>
}

export default AddProduct