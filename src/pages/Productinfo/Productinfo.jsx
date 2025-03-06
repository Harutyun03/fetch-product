import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../App'
import { useNavigate } from 'react-router-dom'
import './Productinfo.css'
import Button from '../../components/Button/Button'

function Productinfo({item,addCard}){



    const navigate = useNavigate()
    const gobacks = () => {
        navigate(-1)
    }
    const [info,setInfo]= useState({})
    const {id} = useParams()

    useEffect(() => {
      instance.get(`/products/${id}`)
      .then((res) => setInfo(res.data))
    },[id])



  return (
    <div className='info'>
        <p>{info?.title}</p>
        <img src={info?.image} />
        <p>Price-{info?.price}$</p>
        <span>{info?.description}</span>
        <button className='btns-info' onClick={gobacks}>GoBack</button>
        <Button item={info} addCard={addCard}/>
    </div>
  )
}

export default Productinfo