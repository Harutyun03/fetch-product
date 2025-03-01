import React from 'react'
import { useState } from 'react'
import './Cardpages.css'

function Cardpages ({elem, change, removeItem}) {

    let [count, setCount] = useState(elem.count)

    const plus = () => {
        setCount(++count)
        change(count, elem.id)
    }

    const minus = () => {
        if(count > 1) {
            setCount(count - 1)
            change(count, elem.id)
        }
    }

    const remove = () => {
        removeItem(elem.id)
    }

  return (
    <div className='card-item'>
        <div className='cardone'>
            <h3>{elem.title}</h3>
            <img src={elem.image}/>
            <h2>{elem.category}</h2>
        </div>
        <div className='btngroup'>
            <button className='btn2' onClick={minus}>-</button>
            <p className='text'>{count}</p>
            <button className='btn2' onClick={plus}>+</button>
        </div>
        <div className='child'>
            <h1>{elem.cardprice}$</h1>
            <button className='btn3' onClick={remove}>Delete</button>
        </div>
    </div>
  )
}

export default Cardpages