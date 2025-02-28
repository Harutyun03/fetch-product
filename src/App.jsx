import { useState,useEffect } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Homepage from './pages/Homepage/Homepage'
import Cards from './pages/Card/Card'

function App() {
  
  const [product,setProduct] = useState([])
  const [card,setCard] = useState([])
  
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setProduct(res.map((prods) => {
      return {
        ... prods ,
        count : 1,
        cardprice : prods.price
      }
    })  

    ))
  },[])


  const addCard = (prod) => {
    
      setCard([...card, prod])
      
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  element={<Homepage  product={product} addCard={addCard}/>}/>
          <Route path='/card' element={<Cards card={card}/>}/>
        </Route>
      </Routes>
    </div>

    
  )
}

export default App
