import React, { useState } from 'react'

function StateSample() {

    //1. counter ekranda göstediğim ve işlemleri yaptığım değişkenimin "kendisi"
    //2. setCounter fonksiyonu bu değişkeni "değiştirecek" tek ARKADAŞIMIZ. değişken zaten const olduğu için değişmez ayıca bu fonksiyonla yeni referans verip ekranı yenilemeyi sağlıyoruz.
    //3. useState(0) ise ekran açıldığında state e atılan DEFAULT VALUE
    const [counter, setCounter] = useState(0)


    console.log("State Sample component rendered!")


    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return <>
        <h1>Counter: {counter}</h1>
        <hr />
        <button onClick={() => increase()}>Increase</button>
        <hr />
        <button onClick={() => decrease()}>Decrease</button>
    </>
}

export default StateSample