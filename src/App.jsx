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


  
  

  const change = (count, id) => {
        setCard(card.map((itemss) => {
          if(itemss.id === id){
            return {
              ...itemss,
              count: count,
              cardprice : itemss.price * count
            }
          }else{
            return itemss
          }
        }))
  }

 
  const removeItem = (id) => {
    setCard(card.filter((el) => el.id !== id))
  }

  
   const addCard = (prod) => {
    
    let boolean = false

    card.forEach((carder) => {
        if(carder.id=== prod.id) {
          boolean = true
          setCard(card.map((el) => {
              if(el.id === prod.id) {
                  return {
                    ...el,
                    count : ++el.count,
                    cardprice : el.cardprice + el.price
                  }

              }else{
                return el
              }
          }))
        }
    })

    if(!boolean){
      setCard((prev) => {
        return [...prev, prod]
      })

    }

      
  }

  const ClaerPage = () => {
    setCard([])
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout card={card}/>}>
          <Route index  element={<Homepage  product={product} addCard={addCard}/>}/>
          <Route path='/card' element={<Cards card={card} change={change} removeItem={removeItem} ClaerPage = {ClaerPage}/>}/>
        </Route>
      </Routes>
    </div>

    
  )
}

export default App
