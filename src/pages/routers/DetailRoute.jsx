import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Post from '../../components/posts/Post'
import { ArrowBack } from '@mui/icons-material'

const DetailRoute = () => {
    return (
        <Container maxWidth="sm">
            <Stack pt={2}>


                <Stack direction="row" justifyContent="start">
                    <Button startIcon={<ArrowBack/>} variant='contained'>Back</Button>
                </Stack>

                <Stack bgcolor="background.default" spacing={1}>
                    <Post />
                    <Stack>
                        <Typography>Comments</Typography>

                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default DetailRoute