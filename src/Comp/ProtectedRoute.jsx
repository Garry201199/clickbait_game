import React, { useContext } from 'react'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import CounterContext from '../Context/CounterContext'

const ProtectedRoute = () => {
    const {name }= useContext(CounterContext)

    const [isUser ]= useState(name.trim().length > 0)
  return ( 
      isUser ? <Outlet/> : <Navigate to='/' /> 
  )
}
export default ProtectedRoute
