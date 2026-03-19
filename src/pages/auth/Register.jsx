import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatedLoginPage } from '../../components/ui/animated-login'

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = (email, password, remember) => {
    navigate('/app/overview')
  }

  return <AnimatedLoginPage isRegister onSubmit={handleRegister} />
}
