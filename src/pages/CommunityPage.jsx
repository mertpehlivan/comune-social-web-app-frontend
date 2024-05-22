import { Box, Button, Container, CssBaseline, Grid, Paper, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommunityBar from '../components/community/communityBar.jsx/CommunityBar'
import ThemeConfigProvider, { useThemeConfig } from '../contexts/ThemeConfigProvider'
import Calendar from '../components/EventBar/Calendar'
import Members from '../components/EventBar/Members'
import NewEvent from '../components/posts/new/NewEvent'
import NewPost from '../components/posts/new/NewPost'
import Post from '../components/posts/Post'
import { LiveTv, Settings } from '@mui/icons-material'
import ComminitySettingsDialog from '../components/community/ComminitySettingsDialog'
import CommunityPost from '../components/posts/CommunityPost'
import CommunityVoting from '../components/posts/CommunityVoting'
import { Link, useParams } from 'react-router-dom'
import { useUserContext } from '../auth/AuthProvider'
import { getPublicationToCommunity } from '../services/publictionService'
import CommunityEvents from '../components/posts/CommunityEvents'
const CommunityPage = () => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const { token } = useUserContext()
    const { id } = useParams()
    const [loading,setLoading]=useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        const handlePublication = async () => {
            setLoading(true)
            const response = await getPublicationToCommunity(token, id);
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        }
        handlePublication()
    }, []);
    const handleClose = () => {
        setOpen(false);
    };

    if (loading) {
        return "Loading..."
    }
    return (
        <ThemeConfigProvider >
            <CssBaseline />



            <Container maxWidth="lg">
                <ComminitySettingsDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
                <Stack>

                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <CommunityBar />
                        </Grid>

                        <Grid item xs={3} >
                            <Stack spacing={1}>
                                <Calendar />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1}>

                                <NewPost />
                                {
                                    data.map((item, index) => {
                                        if (item.publicationType === "POST") {
                                            return <CommunityPost data={item} key={index} />;
                                        } else if (item.publicationType === "VOTING") {
                                            return <CommunityVoting key={index} />;
                                        } else if (item.publicationType === "EVENT") {
                                            return <CommunityEvents key={index} />;
                                        } else {
                                            return null; // Beklenmeyen publicationType durumları için
                                        }
                                    })
                                }


                            </Stack>

                        </Grid>
                        <Grid item xs={3}>
                            <Stack spacing={1}>
                                <Paper>
                                    <Button onClick={handleClickOpen} startIcon={<Settings />}>
                                        Setting Community
                                    </Button>
                                </Paper>
                                <Paper>
                                    <Link to="/comunelive">
                                        <Button startIcon={<LiveTv />}>
                                            Live broadcast
                                        </Button>
                                    </Link>
                                </Paper>
                                <Members />
                            </Stack>

                        </Grid>
                    </Grid>
                </Stack>

            </Container>

        </ThemeConfigProvider>
    )
}

export default CommunityPage