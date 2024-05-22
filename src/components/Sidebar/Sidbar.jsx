import { Button, Stack } from '@mui/material'
import React from 'react'
import LogoBox from './LogoBox'
import UserBox from './UserBox'
import Menu from './Menu'
import LogOutDialog from '../dialog/LogOutDialog'
import { useUserContext } from '../../auth/AuthProvider'


const Sidbar = () => {
  const [open, setOpen] = React.useState(false);
  const {handleLogOut} = useUserContext()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack p={1} spacing={1} direction="column" >
      <LogOutDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} handlelogOut={handleLogOut}/>
        <LogoBox/>
        <UserBox/>
        <Menu/>
        <Button onClick={handleClickOpen}>
          Logout
        </Button>
    </Stack>
  )
}

export default Sidbar