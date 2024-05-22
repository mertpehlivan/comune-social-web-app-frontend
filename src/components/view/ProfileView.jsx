import { Avatar, Box, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/banner.png'
import { CommuteRounded } from '@mui/icons-material'
import { useUserContext } from '../../auth/AuthProvider'

const ProfileView = ({selectedProfileImage,selectedBannerImage}) => {

    return (

        <Paper elevation={2} sx={{ borderRadius: 3 }}>
            <Stack spacing={-5} borderRadius={3}  >

                <Box
                    height={100}
                    component="img"
                    src={selectedBannerImage ? selectedBannerImage : BannerImage}
                    alt='Banner Image'
                    borderRadius={3}
                />

                <Stack alignItems="center" justifyContent="center" p={1} spacing={1}>
                    <Stack borderRadius={3} alignItems="center">
                        <Avatar src={selectedProfileImage} style={{ border: "5px solid white" }} sx={{ width: 60, height: 60 }} />

                        <Typography variant="body1">
                            Community Name
                        </Typography>
                        

                    </Stack>


                </Stack>

            </Stack>
        </Paper>
    )
}

export default ProfileView