import React, { useState } from 'react'

function StateArraySample() {

  const [numbers, setnumbers] = useState([3, 10, 22])

  //bu fonksiyon random bir sayı üretip yukarıdaki state e o sayıyı ekleyecektir.
  const addRandom = () => {
    var random = Math.floor(Math.random() * 1000)
    setnumbers([...numbers, random])
  }

  const sortArray = () => {
      numbers.sort()
      setnumbers([...numbers])
  }

  return <>

    <button onClick={() => setnumbers([])}>Empty</button>
    <hr />
    <h1>Length: {numbers.length}</h1>
    <hr />
    <button onClick={addRandom}>Add Random</button>
    <hr />
    <button onClick={sortArray}>Sort</button>
    <ul>
      {
        numbers.map(item => <li>{item}</li>)
      }
    </ul>
  </>
}

export default StateArraySample