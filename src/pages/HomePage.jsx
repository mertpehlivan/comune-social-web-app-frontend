import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/2.svg'
import { ArtTrack, Biotech, CalendarMonth, ConnectWithoutContact, DownhillSkiing, Gamepad, HealthAndSafety, MoreVert, MoreVertOutlined, People, Public, Schedule, Search, Sports, TravelExplore } from '@mui/icons-material'
import BannerImage from '../assets/Online world-cuate.svg'
import { Link } from 'react-router-dom'
import ImageView from '../assets/image.jpg'
import Pone from '../assets/Conversation-pana.svg'
const HomePage = () => {
  return (
    <Stack>


      <Stack height="100vh">
        <Stack direction="row" justifyContent="space-between" alignItems="center" >
          <Stack direction="row" alignItems="center" spacing={4} >
            <Box component="img" src={Logo} width={100} />
            <Stack direction="row">
              <TextField placeholder='Search events...' sx={{ width: 500 }} size='small' type='search' />
              <Button variant='contained' startIcon={<Search />}>
                Search
              </Button>
            </Stack>
            <Stack>

            </Stack>
          </Stack>


          <Stack direction="row" height={40}>
            <Link to="/login"><Button>Login</Button></Link>
            <Link to="/signup"><Button variant='contained'>Sign up</Button></Link>
          </Stack>

        </Stack>
        <Divider />
        <Container >
          <Stack>

            <Stack height={600} alignItems="center" direction="row">
              <Stack spacing={2}>
                <Typography variant='h2'>We are stronger together!</Typography>
                <Typography width={400}>Welcome to the Comune family! We are stronger together because we believe that the strength of communities lies in acting together. Comune is a platform for everyone to embrace, support and lift each other forward.</Typography>
                <Link to="/signup-community"> 
                  <Button sx={{ width: 300, height: 50 }} startIcon={<People />} variant='outlined'>
                    Create Community
                  </Button>
                </Link>

              </Stack>

              <Box component="img" src={BannerImage} width={600} />
            </Stack>

          </Stack>
        </Container>
      </Stack>
      <Container maxWidth="lg">



        <Stack p={2} spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="end">
            <Typography color="primary.main" variant='h5'>Populer events</Typography>
            <Stack direction="row" alignItems="center">
              <Public sx={{ color: "primary.main" }} />
              <Link style={{ color: "#EE6C4D" }}>View all</Link>
            </Stack>
          </Stack>

          <Divider />
          <Stack>
            <Stack p={1}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          R
                        </Avatar>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={ImageView}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack width="100%" spacing={2}>
                        <Stack spacing={1}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <CalendarMonth />
                            <Typography>
                              12.08.2023
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Schedule />
                            <Typography>
                              09:34
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Button alignItems="flex-end" variant='contained' size="small">Learn More</Button>
                        </Stack>

                      </Stack>

                    </CardActions>
                  </Card>

                </Grid>

                <Grid item xs={3}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          R
                        </Avatar>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={ImageView}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack width="100%" spacing={2}>
                        <Stack spacing={1}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <CalendarMonth />
                            <Typography>
                              12.08.2023
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Schedule />
                            <Typography>
                              09:34
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Button alignItems="flex-end" variant='contained' size="small">Learn More</Button>
                        </Stack>

                      </Stack>

                    </CardActions>
                  </Card>

                </Grid>
                <Grid item xs={3}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          R
                        </Avatar>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={ImageView}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack width="100%" spacing={2}>
                        <Stack spacing={1}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <CalendarMonth />
                            <Typography>
                              12.08.2023
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Schedule />
                            <Typography>
                              09:34
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Button alignItems="flex-end" variant='contained' size="small">Learn More</Button>
                        </Stack>

                      </Stack>

                    </CardActions>
                  </Card>

                </Grid>
                <Grid item xs={3} height={280}>
                  <CardHeader
                    avatar={
                      <Avatar>
                        R
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={ImageView}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack width="100%" spacing={2}>
                        <Stack spacing={1}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <CalendarMonth />
                            <Typography>
                              12.08.2023
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Schedule />
                            <Typography>
                              09:34
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Button alignItems="flex-end" variant='contained' size="small">Learn More</Button>
                        </Stack>
                      </Stack>
                    </CardActions>
                  </Card>

                </Grid>

              </Grid>

            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" bgcolor="#fdf6f5" p={2} borderRadius={3}>
            <Typography>
              People use Comune to make new friends, increase their knowledge
              and experience, find support, break the norm, and pursue their passions together. Membership is completely free.
            </Typography>
            <Box component="img" src={Pone} width={400} />
          </Stack>
        </Stack>

      </Container>
      <Container maxWidth="lg">



        <Stack p={2} spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="end">
            <Typography color="primary.main" variant='h5'>Explore top categories</Typography>
            <Divider />
          </Stack>
          <Stack>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <TravelExplore sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Travel and Outdoor</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <ConnectWithoutContact sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Socail Activities</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <DownhillSkiing sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Hobbies and Passions</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <Sports sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Sports and Fitness</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <HealthAndSafety sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Health and Wellbeing</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <Biotech sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Technology</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack p={1}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <ArtTrack sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Art and Culture</Typography>
                  </Stack>
                </Stack>

              </Grid>
              <Grid item xs={3}>
                <Stack p={1} borderRadius={3}>
                  <Stack p={2} alignItems="center" bgcolor="#fdf6f5">
                    <Gamepad sx={{ width: 50, height: 50, color: "primary.main" }} />
                    <Typography color="primary.main">Games</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default HomePage