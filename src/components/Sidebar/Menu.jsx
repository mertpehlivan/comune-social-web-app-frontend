import { ContentCut, Explore, Home, Language, MessageSharp, Notifications, Search, Settings } from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Stack } from '@mui/material'
import React from 'react'

const Menu = () => {
    return (
        <Paper elevation={2} sx={{ borderRadius: 3 }}>
            <Stack boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={3}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <Home fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Explore fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Explore</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Search fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Search</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Notifications fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Notifications</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <MessageSharp fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Messages</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </MenuItem>
                </MenuList>
            </Stack>
        </Paper>
    )
}

export default Menu