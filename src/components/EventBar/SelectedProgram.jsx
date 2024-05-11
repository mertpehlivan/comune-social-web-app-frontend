import { Card, CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const SelectedProgram = ({ date }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{date}</Typography>
        <Divider />
      </CardContent>
      <Stack sx={{ overflowY: "auto", maxHeight: 250, minHeight: 250 }} p={1} >
        <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="center" border="1px solid" p={1} borderRadius={3} borderColor="primary.main">
          <Stack alignItems="center" justifyContent="center">
            <Avatar sx={{width:20,height:20}}/>
            <Typography fontSize={10} variant='subtitle2'>Zirrat Bank</Typography>
          </Stack>
          <Stack>
            <Typography>Etkinlik Yürüyüşü</Typography>
          </Stack>
          <Stack>
            <Chip label="12.30" />

          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </Card>
  )
}

export default SelectedProgram