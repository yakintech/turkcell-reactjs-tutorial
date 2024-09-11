import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddCategory() {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")

    const [categories, setcategories] = useState([])

    const add = () => {

        let newCategory = {
            name: name,
            description: description
        }

        axios.post("https://northwind.vercel.app/api/categories", newCategory)
            .then(res => {
                alert("Success!")
                load()
            })
    }

    useEffect(() => {
        load()
    }, [])
    


    const load = () => {
        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data)
            })
    }

    return <>

        <div>
            <label htmlFor="">Name: </label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description: </label>
            <textarea rows={3} value={description} onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <hr />
        <h1>Categories Length: {categories.length}</h1>
        <ul>
            {
                categories.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>
}

export default AddCategory