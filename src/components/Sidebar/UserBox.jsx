import { Avatar, Box, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/banner.png'
import { CommuteRounded } from '@mui/icons-material'

const UserBox = () => {

    return (

        <Paper elevation={2} sx={{borderRadius:3}}>
            <Stack spacing={-5} borderRadius={3}  >

                <Box
                    height={100}
                    component="img"
                    src={BannerImage}
                    alt='Banner Image'
                    borderRadius={3}
                />

                <Stack alignItems="center" justifyContent="center" p={1} spacing={1}>
                    <Stack borderRadius={3} alignItems="center">
                        <Avatar style={{ border: "5px solid white" }} sx={{ width: 60, height: 60 }} />

                        <Typography variant="body1">
                            Joe Dipen
                        </Typography>
                        <Typography variant='body2' color="gray">
                            @joedipen
                        </Typography>

                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" border="1px solid" borderColor="secondray.main" p={1} borderRadius={3}>
                        <Stack alignItems="center" justifyContent="center">
                            <Typography variant="body2">
                                Following
                            </Typography>
                            <Typography variant="h6">
                                12
                            </Typography>

                        </Stack>
                        <Stack alignItems="center" justifyContent="center">
                            <Typography variant="body2">
                                Followers
                            </Typography>
                            <Typography variant="h6">
                                12
                            </Typography>

                        </Stack>
                        <Stack alignItems="center" justifyContent="center">
                            <Typography variant="body2">

                                Communities
                            </Typography>
                            <Typography variant="h6">
                                12
                            </Typography>

                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </Paper>
    )
}

export default UserBox