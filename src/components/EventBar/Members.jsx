import { Avatar, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Members = () => {
    return (
        <Paper elevation={3} sx={{ p: 1 }}>
            <Typography>Admin</Typography>
            <Divider sx={{ m: 1 }} />
            <Grid container my={1}>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
            </Grid>
            <Typography>Helpers</Typography>
            <Divider sx={{ m: 1 }} />
            <Grid container my={1}>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
            </Grid>
            <Typography>Members</Typography>
            <Divider sx={{ m: 1 }} />
            <Grid container my={1} spacing={1} sx={{ overflowY: "auto", height: 100 }} >
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack alignContent="center" alignItems="center">
                        <Avatar />
                    </Stack>
                </Grid>

            </Grid>
            <Stack>
                <Button variant='outlined' size='small'>See more</Button>
            </Stack>
        </Paper>
    )
}

export default Members