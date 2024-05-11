import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import LoginImage from '../assets/Login-rafiki.svg'
import Logo from '../assets/2.svg'
import { Link } from 'react-router-dom'
import { Home, Login, People } from '@mui/icons-material'
const LoginPage = () => {
  return (
    <Container >
      <Stack sx={{ height: "100vh" }}>
        <Stack width="100%">
          <Paper sx={{ py: 10 }} elevation={10} >
            <Grid container>
              <Grid item xs={6}>
                <Stack justifyContent="start" alignItems="start" pl={2}>
                  <Button variant='outlined' startIcon={<Home />}>Go Home</Button>
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
                      <TextField label="E-mail" fullWidth size='small' />
                      <TextField label="password" type='password' fullWidth size='small' />
                    </Stack>
                    <Button href='/home' sx={{ width: 300, height: 50 }} startIcon={<Login />} variant='contained'>
                      Log in
                    </Button>
                  </Stack>

                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack alignItems="center">
                  <Box component="img" src={LoginImage} width={500} />
                  <Button sx={{ width: 300, height: 50 }} startIcon={<People />} variant='outlined'>
                    Create Community
                  </Button>
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