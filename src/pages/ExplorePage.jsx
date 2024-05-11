import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidbar from '../components/Sidebar/Sidbar'
import Calendar from '../components/EventBar/Calendar'
import SelectedProgram from '../components/EventBar/SelectedProgram'



const ExplorePage = () => {
    const [selectedDate, setSelectedDate] = useState("")
    const selectedDateFunciton = (date) => {
        console.log(date)
        setSelectedDate(date)
    }
    return (
        <Container maxWidth="lg" >
            <Grid container xs="">
                <Grid item xs={2.9} position="relative">
                    <Box position="fixed" p={1} width={280}>
                        <Sidbar />
                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <Outlet />
                </Grid>
                <Grid item xs={3.1}>
                    <Box position="fixed" p={1} width={300}>
                        <Calendar/>
                     
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default ExplorePage