import { Avatar, Divider, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import SubCommentComponent from './SubCommentComponent'
const CommentComponent = () => {
  return (
    <Stack >
      <Stack p={2}>
        <Stack direction="row" spacing={1} mb={1}>
          <Avatar/>
          <TextField sx={{height:60}} fullWidth size='small' rows={2} multiline />
        </Stack>

        <SubCommentComponent />
        <SubCommentComponent>
          <SubCommentComponent>
            <SubCommentComponent></SubCommentComponent>
          </SubCommentComponent>
        </SubCommentComponent>

      </Stack>
    </Stack >
  )
}

export default CommentComponent