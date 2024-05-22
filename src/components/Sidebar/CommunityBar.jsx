import { Avatar, Box, Divider, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BannerImage from '../../assets/banner.png'
import {getCommunityFetch} from '../../services/CommunityService'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../auth/AuthProvider'


const CommunityBar = () => {
    const {id} = useParams()
    const {token} = useUserContext()
    const [loading,setLoading] = useState(false)
    useEffect(() => {
       const fetch = async () =>{
            setLoading(true)
            const response = await getCommunityFetch(token,id)
            setLoading(false)
            console.log(response.data)
       }
        fetch()
       
    }, []);
    if (loading) {
        return "Loading..."
    }
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
                            {user.firstname} {user.lastname}
                        </Typography>
                        <Typography textAlign="center" variant='body2' color="gray">
                            {user.id}
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

export default CommunityBar