import { useState,useEffect } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Homepage from './pages/Homepage/Homepage'
import Cards from './pages/Card/Card'
import Productinfo from './pages/Productinfo/Productinfo'
import axios from 'axios'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'


export const instance = axios.create({
  baseURL : "https://fakestoreapi.com"
})


function App() {
  
  const [product,setProduct] = useState([])
  const [card,setCard] = useState([])
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  
  
  useEffect(() => {

    instance.get('/products')
    .then((res) => setProduct(res.data.map((prods) => {
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

  const Claer = () => {
    setCard([])
  }




  const registerUser = (userData) => {
		const User = { ...userData,
       LogginId: false }
		setUsers(prods => [...prods, User])
	}

  const loginUser = (userData) => {
		const Userner = users.find(
			u => u.username === userData.username && u.password === userData.password
		)
	}

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout card={card}/>}>
          <Route index  element={<Homepage  product={product} addCard={addCard}/>}/>
          <Route path='/card' element={<Cards card={card} change={change} removeItem={removeItem} Claer = {Claer}/>}/>
          <Route path='/:id' element={<Productinfo product={product} addCard={addCard}/>}/>
          <Route path='/register' element={<Register registerUser={registerUser}/>}/>
          <Route path='/login' element={<Login loginUser={loginUser}/>}/>
          <Route path='/profile' element={<Profile users={users}/>}/>
        </Route>
      </Routes>
    </div>

    
  )
}

export default App
