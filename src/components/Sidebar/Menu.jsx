import { ContentCut, Explore, Home, Language, Message, MessageSharp, Notifications, Search, Settings } from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <Paper elevation={2} sx={{ borderRadius: 3 }}>
            <Stack boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={3}>

                <MenuList>
                    <Link to="/home">
                        <MenuItem>

                            <ListItemIcon>
                                <Home fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>

                        </MenuItem>
                    </Link>
                    <Link to="/home/search">
                        <MenuItem>
                            <ListItemIcon>
                                <Search fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Search</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link to="/home/notifications">
                        <MenuItem>
                            <ListItemIcon>
                                <Notifications fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Notifications</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link to="/messages">
                        <MenuItem>
                            <ListItemIcon>
                                <Message fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Messages</ListItemText>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Stack>
        </Paper>
    )
}

export default Menu