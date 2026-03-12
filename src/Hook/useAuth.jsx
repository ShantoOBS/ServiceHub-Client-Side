import React from 'react'
import { AuthContext } from '../Context/AuthContext/AuthContext'
import { useContext } from 'react'

export default function useAuth() {
    const authInfo = useContext(AuthContext)
  return authInfo;
}

