import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {

  const {state} = useLocation()
  
  return (
    <div>
      <h1>Profile : {state?.Username} </h1>
      </div>
  )
}

export default Profile