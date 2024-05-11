import { Container, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import CommunityBar from '../components/community/communityBar.jsx/CommunityBar'
import ThemeConfigProvider from '../contexts/ThemeConfigProvider'
import Calendar from '../components/EventBar/Calendar'
import Members from '../components/EventBar/Members'
import NewEvent from '../components/posts/new/NewEvent'
import NewPost from '../components/posts/new/NewPost'
import Post from '../components/posts/Post'
const CommunityPage = () => {
    return (
        <ThemeConfigProvider>
            <Container maxWidth="lg">
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
                                <Post />
                            </Stack>

                        </Grid>
                        <Grid item xs={3}>
                            <Members />
                        </Grid>
                    </Grid>
                </Stack>

            </Container>
        </ThemeConfigProvider>
    )
}

export default CommunityPage