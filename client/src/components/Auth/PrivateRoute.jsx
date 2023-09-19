import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'


function PrivateRoute({children}) {
    const {isLogin} = useAuth()
   
  return (
    <div>{isLogin ? children : <Navigate to="/"/>}</div>
  )
}

export default PrivateRoute