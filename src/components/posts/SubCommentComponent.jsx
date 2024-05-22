import { Avatar, Button, ButtonGroup, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LightToolKit from '../LightToolKit'
import UserBox from '../Sidebar/UserBox'
import { Link } from 'react-router-dom'
import { Reply } from '@mui/icons-material'

const SubCommentComponent = ({ children }) => {
    const [viewReply, setViewReply] = useState(false)
    const [reply, setReply] = useState(false)
    return (
        <Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
                <Avatar sx={{ width: 25, height: 25 }} />
                <LightToolKit enterDelay={500} leaveDelay={200} style={{ bgcolor: "transparent" }} title={
                    <UserBox />
                }> <Link style={{ color: "primary.main" }}> <Typography >mert pehlivan</Typography></Link></LightToolKit>
            </Stack>

            <Stack>
                <Stack direction="row">
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={3} justifyContent="space-evenly" ml={1.5}>

                        <Typography variant='body2'>Integer in lectus eget elit ultrices fermentum sed a felis. Nullam eleifend tincidunt euismod. Integer laoreet augue ut orci blandit, accumsan tristique dui varius.</Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row">
                                <Button onClick={() => setReply(prev => !prev)} startIcon={<Reply />} sx={{ width: 10, height: 30, color: "gray" }} size='small'>Reply</Button>
                                <Button onClick={() => setViewReply(prev => !prev)} startIcon={<Reply />} sx={{ width: 150, height: 30, color: "gray" }} size='small'>4 View reply</Button>
                            </Stack>

                            <Typography variant='body2' color="gray">4s ago</Typography>
                        </Stack>

                        <Stack ml={3}>
                            {viewReply && children}
                        </Stack>
                        {reply && <Stack direction="row" spacing={1} mb={1}>
                            <Avatar />
                            <TextField sx={{ height: 60 }} fullWidth size='small' rows={2} multiline />
                            <Button variant='contained'>Add reply</Button>
                        </Stack>}
                    </Stack>

                </Stack>
            </Stack>


        </Stack>
    )
}

export default SubCommentComponent