import React from 'react'
import Logo from '../../assets/2.svg'
import { Box, Paper, Stack } from '@mui/material'
const LogoBox = () => {
    return (
        <Paper elevation={2} sx={{borderRadius:3}}>
            <Stack justifyContent="center" alignContent="center" alignItems="center" borderRadius={3}>
                <Box
                    component="img"
                    src={Logo}
                    width={100}
                    height={100}
                />
            </Stack>
        </Paper>
    )
}

export default LogoBox