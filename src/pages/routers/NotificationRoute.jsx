import { BarChart, Event, PostAdd } from '@mui/icons-material'
import { Chip, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Voitings = () => {
    return (
        <Stack p={2}>
            <Stack direction="row" alignItems="start" spacing={2} p={1}>
                <BarChart sx={{ color: "primary.main" }} />
                <Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography sx={{ color: "primary.main" }} variant='h6'>Lorem ipsum dolor sit amet</Typography>
                        <Typography>12:33</Typography>
                    </Stack>
                    <Typography variant='body2' color="gray">Integer in lectus eget elit ultrices fermentum sed a felis. Nullam eleifend tincidunt euismod. Integer laoreet augue ut orci blandit, accumsan tristique dui varius...</Typography>
                </Stack>
            </Stack>
            <Divider />
        </Stack>
    )
}
const Events = () => {
    return (
        <Stack p={2}>
            <Stack direction="row" alignItems="start" spacing={2} p={1}>
                <Event sx={{ color: "primary.main" }} />
                <Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography sx={{ color: "primary.main" }} variant='h6'>Lorem ipsum dolor sit amet</Typography>
                        <Typography>12:33</Typography>
                    </Stack>

                    <Typography variant='body2' color="gray">Integer in lectus eget elit ultrices fermentum sed a felis. Nullam eleifend tincidunt euismod. Integer laoreet augue ut orci blandit, accumsan tristique dui varius...</Typography>
                </Stack>
            </Stack>
            <Divider />
        </Stack>
    )
}

const Posts = () => {
    return (
        <Stack p={2}>
            <Stack direction="row" alignItems="start" spacing={2} p={1}>
                <PostAdd sx={{ color: "primary.main" }} />
                <Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography sx={{ color: "primary.main" }} variant='h6'>Lorem ipsum dolor sit amet</Typography>
                        <Typography>12:33</Typography>
                    </Stack>
                    <Typography variant='body2' color="gray">Integer in lectus eget elit ultrices fermentum sed a felis. Nullam eleifend tincidunt euismod. Integer laoreet augue ut orci blandit, accumsan tristique dui varius...</Typography>
                </Stack>
            </Stack>
            <Divider />
        </Stack>
    )
}
const NotificationRoute = () => {
    return (
        <Stack mt={2}>
            <Paper elevation={3}>
                <Stack p={3}>
                    <Divider>
                        <Chip label="Bugün" />
                    </Divider>
                    <Posts />
                    <Posts />
                    <Events/>
                    
                    <Divider>
                        <Chip label="12.04.2024" />
                    </Divider>
                    <Voitings/>
                    <Voitings/>
                    <Posts/>
                </Stack>

            </Paper>
        </Stack>
    )
}

export default NotificationRoute