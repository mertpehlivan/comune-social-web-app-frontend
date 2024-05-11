import { Avatar, Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useThemeConfig } from '../../../contexts/ThemeConfigProvider'
import { Settings } from '@mui/icons-material'
import Banner from '../../../assets/banner.png'
const CommunityBar = () => {
  const { themeConfig } = useThemeConfig()
  if (!themeConfig || !themeConfig.communityBar) {
    return null; // Veya bir yedek bileşen veya hata mesajı gösterebilirsiniz
  }

  const communityBarColor = themeConfig.communityBar.bgColor;
  return (
    <Paper elevation={3} sx={{ height: 210, bgcolor: communityBarColor,mt:1 }}>
      <Stack>
        <Box component="img" src={Banner} height={130} />
          
       
        <Stack alignItems="center" p={1}>
          <Box position="absolute" top={30} >
            <Avatar sx={{ width: 140, height: 140 }} />
          </Box>
          <Stack>
            <Typography variant='h6' mt={4}>Zirrat Bankası</Typography>
          </Stack>

        </Stack>
      </Stack>
    </Paper>
  )
}

export default CommunityBar