import React from 'react'
import { useParams } from 'react-router-dom'
import { categoriesData } from '../data/categoriesData'

function CategoryDetail() {

    var { id } = useParams()

    var detail = categoriesData.find(q => q.id == id)

    return <>
        <h1>Category Detail</h1>
        <hr />
        <h1>Id: {id}</h1>
        <h1>Name: {detail?.name}</h1>
        <h1>Description: {detail?.description}</h1>
    </>
}

export default CategoryDetail