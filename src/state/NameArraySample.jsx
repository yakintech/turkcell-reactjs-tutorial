import React, { useState } from 'react'

function NameArraySample() {
    const [name, setname] = useState("")
    const [names, setnames] = useState([])


    const add = () => {
        //eleman dizide varsa ekleme ve ekrana uyarı ver

        var nameControl = names.find(q => q == name)
        if(nameControl){
            alert("Bu isim dizide mevcuttur. Lütfen yeni bir isim ekleyiniz");
            return
        }

        //gelen değer boş ise uyarı ver
        if(name.trim() == ""){
            alert("Lütfen bir isim giriniz")
            return
        }

        setnames([...names, name])
        setname('')
    }
    return <>
        <div>
            <label htmlFor="">Name:</label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
        <hr />
        <h1>Length: {names.length}</h1>
        <hr />
        <div>
            <ul>
                {
                    names.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    </>
}

export default NameArraySample