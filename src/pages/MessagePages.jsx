import { ArrowBack, Send, TagFaces } from '@mui/icons-material'
import { Avatar, Button, Container, Divider, Grid, IconButton, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MessagePages = () => {
  const [emoji,setEmoji] = useState(false)
  const [text,setText] = useState("")
  const navigate = useNavigate();
  const handleBack  = () =>{
    navigate(-1)
  }
  return (
    <Container>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={3} p={1}>
            <Paper elevation={9} sx={{ height: "100%" }}>
              <Stack>
                <Button onClick={handleBack}  variant='contained' startIcon={<ArrowBack />}>Back</Button>
              </Stack>
              <Stack height="80vh" p={3} sx={{ overflowY: "auto" }} spacing={1}>
                <Stack p={1} borderRadius={3} >
                  <Typography variant='h5'>Community Chat</Typography>
                  <Divider />
                </Stack>

                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Avatar />
                  <Typography>Tema</Typography>
                </Stack>
              </Stack>

            </Paper>

          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={8.99}>

            <Stack alignItems="center" spacing={1} width="100%" direction="row" p={1}>
              <Avatar />
              <Typography>Tema</Typography>

            </Stack>
            <Divider />
            <Stack height="68vh">

            </Stack>
            <Paper elevation={9}>
              <Stack height="20%" p={1} direction="row" spacing={1}>
                <TextField value={text} onChange={(e)=>setText(e.target.value)} size='samll' rows={5} fullWidth sx={{ bgcolor: "white" }} multiline />
                <Stack>
                  <Tooltip open={emoji} title={<EmojiPicker onEmojiClick={(e) => setText(prev => `${prev}${e.emoji}`)}/>}>

                    <IconButton onClick={()=>setEmoji(prev=>!prev)}>
                      <TagFaces />
                    </IconButton>
                  </Tooltip>
                  <Button sx={{ height: "100%" }} variant='contained' startIcon={<Send />}>Send</Button>
                </Stack>

              </Stack>
            </Paper>


          </Grid>
        </Grid>
      </Paper>

    </Container>
  )
}

export default MessagePages