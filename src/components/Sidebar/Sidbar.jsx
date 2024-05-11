import { Stack } from '@mui/material'
import React from 'react'
import LogoBox from './LogoBox'
import UserBox from './UserBox'
import Menu from './Menu'


const Sidbar = () => {
  return (
    <Stack p={1} spacing={1} direction="column" >
        <LogoBox/>
        <UserBox/>
        <Menu/>
    </Stack>
  )
}

export default Sidbar