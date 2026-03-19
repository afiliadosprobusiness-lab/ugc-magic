import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatedLoginPage } from '../../components/ui/animated-login'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (email, password, remember) => {
    navigate('/app/overview')
  }

  return <AnimatedLoginPage onSubmit={handleLogin} />
}
