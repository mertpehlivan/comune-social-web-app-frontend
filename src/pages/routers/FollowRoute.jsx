import { Stack } from '@mui/material'
import React from 'react'
import Post from '../../components/posts/Post'
import VotingPost from '../../components/posts/VotingPost'
import NewPost from '../../components/posts/new/NewPost'

const FollowRoute = () => {
  return (
    <Stack p={1} spacing={1}>
        {/* <NewPost/> */}
        <Post/>
        <VotingPost/>
    </Stack>
  )
}

export default FollowRoute