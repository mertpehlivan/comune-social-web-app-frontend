import { Stack } from '@mui/material'
import React from 'react'
import Post from '../../components/posts/Post'
import VotingPost from '../../components/posts/VotingPost'
import NewPost from '../../components/posts/new/NewPost'
import Events from '../../components/posts/Events'

const FollowRoute = () => {
  return (
    <Stack p={1} spacing={1}>
        {/* <NewPost/> */}
        <Events/>
        <Post/> 
        <VotingPost/>
    </Stack>
  )
}

export default FollowRoute