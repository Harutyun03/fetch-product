import React from 'react'

function Button ({item,addCard})  {

    const handleCard = (item) => {
        addCard(item)
}
  return (
        <div>
            <button className='btn' onClick={() => handleCard(item)}>Buy</button>
        </div>
  )
}

export default Button