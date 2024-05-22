import { Box, Button, CircularProgress, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginImage from '../assets/Login-rafiki.svg'
import Logo from '../assets/2.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Error, Home, Login, People } from '@mui/icons-material'
import { loginFetch } from '../services/AuthService'
import { useUserContext } from '../auth/AuthProvider'



const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { handleAuth } = useUserContext()
  const handleChange = (e) => {
    setError("")
    const { name, value } = e.target
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }






  const handleLogin = async () => {
    const data = {
      email: email,
      password: password
    }

    try {
      setLoading(true)
      const response = await loginFetch(data)
      handleAuth(response.data)
      
     
      setLoading(false)
      console.log(response.data)
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <Container >
      <Stack sx={{ height: "100vh" }}>
        <Stack width="100%">
          <Paper sx={{ py: 10 }} elevation={10} >
            <Grid container>
              <Grid item xs={6}>
                <Stack justifyContent="start" alignItems="start" pl={2}>
                  <Link to="/">

                    <Button variant='outlined' startIcon={<Home />}>Go Home</Button>
                  </Link>
                </Stack>
                <Stack alignItems="center" justifyContent="center" width="100%" >
                  <Box component="img" src={Logo} width={100} />
                  <Stack alignItems="center" spacing={5} width="100%">
                    <Stack alignItems="center">
                      <Typography color="primary.main" variant='h4'>Log in</Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography>Don't I have any account?</Typography><Link to="/signup" style={{ color: "#ee6c4d" }}>Sign up</Link>
                      </Stack>
                    </Stack>

                    <Stack spacing={2} width="50%" >
                      <TextField variant='standard' name='email' value={email} onChange={handleChange} label="E-mail" type='email' fullWidth size='small' />
                      <TextField variant='standard' name='password' value={password} onChange={handleChange} label="Password" type='password' fullWidth size='small' />
                      {error && <Stack color="red" direction="row" justifyContent="center" spacing={0.5}>
                        <Error />
                        <Typography>{error}</Typography>
                      </Stack>}

                    </Stack>

                    <Button onClick={handleLogin} sx={{ width: 300, height: 50 }} startIcon={(loading ? <CircularProgress /> : <Login />)} variant='contained'>
                      Log in
                    </Button>
                  </Stack>

                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack alignItems="center">
                  <Box component="img" src={LoginImage} width={500} />
                  <Link to="/signup-community">
                    <Button sx={{ width: 300, height: 50 }} startIcon={<People />} variant='outlined'>
                      Create Community
                    </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>

          </Paper>
        </Stack>
      </Stack>

    </Container>
  )
}

export default LoginPage