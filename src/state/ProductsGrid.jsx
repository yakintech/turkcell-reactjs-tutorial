import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsGrid() {

    const [products, setproducts] = useState(productsData)
    const [minPrice, setminPrice] = useState(0)
    const [maxPrice, setmaxPrice] = useState(0)
    const [showCritical, setshowCritical] = useState(false)


    const search = (value) => {
        let searchWord = value.trim().toLowerCase();
        let filteredProducts = productsData.filter(q => q.name.toLowerCase().includes(searchWord))
        setproducts(filteredProducts)
    }

    const searchByPrices = () => {
        if (minPrice > 0 && maxPrice > 0) {
            let filteredProducts = productsData.filter(q => q.unitPrice > minPrice && q.unitPrice < maxPrice)
            filteredProducts.sort((x, y) => x.unitPrice - y.unitPrice)
            setproducts(filteredProducts)
            return
        }
        setproducts(productsData)

    }

    //Eğer stock 5 altındaysa bu fonksiyon o ürünleri kırmızı yapacak
    const showCriticalStocks = () => {
        // let criticalStocks = products.filter(q => q.unitsInStock < 5)
        // setproducts(criticalStocks)
        setshowCritical(!showCritical)
    }

    return <>
        <h1>Result: {products.length}</h1>
        <hr />
        <div>
            <label htmlFor="">Search: </label>
            <input type='text' onChange={(e) => search(e.target.value)} />
        </div>
        <hr />
        <div>
            <label htmlFor="">Min Price</label>
            <input type='text' onChange={(e) => setminPrice(e.target.value)} />

            <label htmlFor="">Max Price</label>
            <input type='text' onChange={(e) => setmaxPrice(e.target.value)} />

            <button onClick={searchByPrices}>Search</button>
        </div>
        <hr />
        <button onClick={showCriticalStocks}>Show Critical Stocks</button>
        <button onClick={() => setproducts(productsData)}>Refresh</button>

        <hr />
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => {
                            let color = ""
                            if (showCritical && item.unitsInStock < 5)
                                color = "red"

                            return <tr style={{ backgroundColor: color }}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice.toFixed(2)}</td>
                                <td>{item.unitsInStock}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default ProductsGrid