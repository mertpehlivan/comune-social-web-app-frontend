import { Avatar, Box, Button, Grid, IconButton, Paper, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useThemeConfig } from '../../../contexts/ThemeConfigProvider'
import { JoinFull, Settings } from '@mui/icons-material'
import Banner from '../../../assets/banner.png'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../../auth/AuthProvider'
import { getCommunityFetch } from '../../../services/CommunityService'
const CommunityBar = () => {
  const { themeConfig } = useThemeConfig()
  const [data,setData] = useState([])
  const { id } = useParams()
  const { token } = useUserContext()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const response = await getCommunityFetch(token, id)
      setLoading(false)
      setData(response.data)
      console.log(response.data)
    }
    fetch()

  }, []);
  if (loading) {
    return <Skeleton width="100%" height={310}/>
  }

  const profileBgColor = themeConfig.communityBar.bgColor;
  const profileTextColor = themeConfig.communityBar.textColor;
  const joinButtonColor = themeConfig.communityBar.joinButtonColor;
  const joinButtonTextColor = themeConfig.communityBar.joinButtonTextColor;
  const border = themeConfig.communityBar.border;
  const borderColor = themeConfig.communityBar.borderColor;

  const {
    aboutBgColor,
    aboutTextColor,
    aboutBorderSize,
    aboutBorderColor
  } = themeConfig.aboutBar;



  return (
    <Grid container spacing={2}>
    
      <Box position="fixed" top={0} left={0} width="100%" height="100%" bgcolor={themeConfig.background.bgColor} zIndex={-1000}></Box>
      <Grid item xs={8}>
        <Paper elevation={3} sx={{ border: (`${border}px solid`), borderColor: { borderColor }, height: 310, bgcolor: profileBgColor, mt: 1 }}>
          <Stack>
            <Box component="img" src={Banner} height={130} />


            <Stack alignItems="center" p={1}>
              <Box position="absolute" top={30} >
                <Avatar sx={{ width: 140, height: 140 }} />
              </Box>
              <Stack>
                <Typography textAlign="center" variant='h6' color={profileTextColor} mt={4}>{data.name}</Typography>
                <Typography sx={{ opacity: 0.4 }} color={profileTextColor} >{data.id}</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Grid container>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                  <Stack direction="row" justifyContent="center" spacing={2} borderRadius={3}>
                    <Stack alignItems="center">
                      <Typography color={profileTextColor}>
                        Members
                      </Typography>
                      <Typography color={profileTextColor}>
                        4
                      </Typography>
                    </Stack>
                    <Stack alignItems="center">
                      <Typography color={profileTextColor}>
                        Events
                      </Typography >
                      <Typography color={profileTextColor}>
                        4
                      </Typography>
                    </Stack>
                    <Stack alignItems="center">
                      <Typography color={profileTextColor}>
                        Voiting
                      </Typography>
                      <Typography color={profileTextColor}>
                        4
                      </Typography>
                    </Stack>
                    <Stack alignItems="center">
                      <Typography color={profileTextColor}>
                        Post
                      </Typography>
                      <Typography color={profileTextColor}>
                        4
                      </Typography>
                    </Stack>

                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack alignItems="center" justifyContent="center" direction="row" spacing={3}>
                    <Button sx={{ color: joinButtonTextColor, bgcolor: joinButtonColor }} size="small" variant='contained' startIcon={<JoinFull />}>
                      Join the community
                    </Button>

                  </Stack>

                </Grid>
              </Grid>


            </Stack>
          </Stack>
          <Stack>

          </Stack>

        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} sx={{ border: (`${aboutBorderSize}px solid`), borderColor: aboutBorderColor, height: 310, bgcolor: aboutBgColor, mt: 1 }}>
          <Stack height="310px">
            <Typography textAlign="center" variant='h6'>
              Purpose of the community</Typography>
            <Stack height="100%" sx={{ overflowY: "auto" }} p={3}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus sagittis est nec rutrum. Sed lacus lacus, tincidunt vitae fringilla nec, egestas ac turpis. Duis sit amet nunc quis justo luctus laoreet non a massa. Vestibulum hendrerit faucibus viverra. Sed pulvinar sapien mauris, id euismod turpis porta ut. Cras ut orci id nibh gravida gravida. In pulvinar justo risus.

                Morbi et augue enim. Nullam sagittis nec odio a tristique. Phasellus vitae tellus et diam dignissim pretium. Phasellus ut viverra nibh, eget fermentum orci. Curabitur ornare quis urna non cursus. Aliquam consectetur tortor ac egestas viverra. Morbi et accumsan ligula, porta vulputate ipsum. Vivamus ornare vehicula neque, eget vulputate diam semper eget. Aenean in pulvinar est. Duis in dolor gravida, fermentum eros quis, accumsan risus. Proin dapibus congue tellus, a bibendum urna consectetur non. Sed vel congue risus. Maecenas lorem mi, posuere at interdum sit amet, sodales et diam. Integer egestas elementum mi vitae commodo.
              </Typography>
            </Stack>
          </Stack>

        </Paper>

      </Grid>
    </Grid>

  )
}

export default CommunityBar