import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import LoginImage from '../assets/Mobile login-pana.svg'
import Logo from '../assets/2.svg'
import { Link } from 'react-router-dom'
import { Home, Login, People, SignLanguage } from '@mui/icons-material'
const SignUpPage = () => {
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
                                            <Typography color="primary.main" variant='h4'>Sign up</Typography>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <Typography>I already have an account.</Typography><Link to="/login" style={{ color: "#ee6c4d" }}>Login</Link>
                                            </Stack>
                                        </Stack>

                                        <Stack spacing={2} width="50%" >
                                            <TextField label="First name" type='text' fullWidth size='small' />
                                            <TextField label="Last name" type='text' fullWidth size='small' />
                                            <TextField label="E-mail" type='email' fullWidth size='small' />
                                            <TextField label="Password" type='password' fullWidth size='small' />
                                        </Stack>
                                        <Button sx={{ width: 300, height: 50 }} startIcon={<SignLanguage />} variant='contained'>
                                            Sign up
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

export default SignUpPage