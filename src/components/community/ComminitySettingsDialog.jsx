import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Checkbox, Chip, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, Stack, Typography, styled } from '@mui/material';
import { Close, Edit, LiveHelp, LiveTv } from '@mui/icons-material';
import { useThemeConfig } from '../../contexts/ThemeConfigProvider';

const communityAccount = () => {
    return (
        <Stack spacing={2}>
            <Divider><Chip label="Account Settings" /></Divider>
            <Stack alignItems="center" spacing={0.5}>
                <Avatar sx={{ width: 100, height: 100 }} />
                <Button variant='outlined'>Change Profile Photo</Button>
            </Stack>
            <Stack alignItems="center" border="1px solid" p={3} borderRadius={3}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography>E-mail</Typography>
                    <IconButton>
                        <Edit />
                    </IconButton>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography>Password</Typography>
                    <IconButton>
                        <Edit />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider><Chip label="Privacy settings" /></Divider>
            <Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Checkbox defaultChecked />
                    <Typography>Allow others to see community</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Checkbox defaultChecked />
                    <Typography>Can anyone submit a request to join?</Typography>
                </Stack>
            </Stack>
            <Divider><Chip label="Who can share events" /></Divider>
            <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography>Who can share events?</Typography>
                <Select fullWidth size='small' defaultValue={"Just admins"}>
                    <MenuItem value={"Just admins"}>Just admins</MenuItem>
                    <MenuItem value={"Admins and helpers"}>Admins and helpers</MenuItem>
                    <MenuItem value={"All members"}>Just members</MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                </Select>
            </Stack>
        </Stack>
    )
}
const postSettings = (themeConfig, setThemeConfig) => {
    return (
        <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.postBar.postBgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        postBar: { ...prev.postBar, postBgColor: e.target.value }
                    }))}
                />
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.postBar.postTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        postBar: { ...prev.postBar, postTextColor: e.target.value }
                    }))}
                />
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Button color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.postBar.postButtonColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        postBar: { ...prev.postBar, postButtonColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Button text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.postBar.postButtonTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        postBar: { ...prev.postBar, postButtonTextColor: e.target.value }
                    }))} />
            </Stack>
            <Divider><Chip label="Border settings" /></Divider>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.postBar.postBorderColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        postBar: { ...prev.postBar, postBorderColor: e.target.value }
                    }))} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border size</Typography>
                <TextField sx={{ width: 150 }} size="small" type='number'
                    value={themeConfig.postBar.postBorderSize}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        postBar: { ...prev.postBar, postBorderSize: e.target.value }
                    }))} />
            </Stack>
            <Divider />

        </Stack>
    )
}
const backgroundSettings = (themeConfig,setThemeConfig) => {
    return (
        <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background color</Typography>
                <TextField sx={{ width: 150 }} size="small" type='color'
                    value={themeConfig.background.bgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        background: { ...prev.background, bgColor: e.target.value }
                    }))} />
            </Stack>
        </Stack>
    )
}
const membersSettings = () => {
    return (
        <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background color</Typography>
                <TextField sx={{ width: 150 }} size="small" type='color' />
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }} size="small" type='color' />
            </Stack>
            <Divider><Chip label="Border settings" /></Divider>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Color</Typography>
                <TextField sx={{ width: 150 }} size="small" type='color' />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border size</Typography>
                <TextField sx={{ width: 150 }} size="small" type='number' />
            </Stack>
            <Divider />

        </Stack>
    )
}
const calenderSettings = (themeConfig, setThemeConfig) => {
    return (
        <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background color</Typography>
                <TextField
                    sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.calenderBar.calenderBgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBgColor: e.target.value }
                    }))}
                />
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.calenderBar.calenderTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderTextColor: e.target.value }
                    }))}
                />
            </Stack>
            <Divider><Chip label="Border settings" /></Divider>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.calenderBar.calenderBorderColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBorderColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border size</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='number'
                    value={themeConfig.calenderBar.calenderBorderSize}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBorderSize: e.target.value }
                    }))}
                />
            </Stack>
            <Divider><Chip label="Select Date Box" /></Divider>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background Color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.calenderBar.calenderBoxBgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBoxBgColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.calenderBar.calenderBoxTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBoxTextColor: e.target.value }
                    }))}
                />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border size</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='number'
                    value={themeConfig.calenderBar.calenderBoxBorderSize}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBoxBorderSize: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Border color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.calenderBar.calenderBoxBorderColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        calenderBar: { ...prev.calenderBar, calenderBoxBorderColor: e.target.value }
                    }))}
                />
            </Stack>
        </Stack>
    )
}
const shareBoxSettings = (themeConfig, setThemeConfig) => {
    return (
        <Stack spacing={2}>

            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background Color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.shareBar.shareBgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        shareBar: { ...prev.shareBar, shareBgColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.shareBar.shareTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        shareBar: { ...prev.shareBar, shareTextColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Button color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.shareBar.shareButtonColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        shareBar: { ...prev.shareBar, shareButtonColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Button text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.shareBar.shareButtonTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        shareBar: { ...prev.shareBar, shareButtonTextColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.shareBar.shareBorderColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        shareBar: { ...prev.shareBar, shareBorderColor: e.target.value }
                    }))}
                />
                <Typography>Border size</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='number'
                    value={themeConfig.shareBar.shareBorderSize}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        shareBar: { ...prev.shareBar, shareBorderSize: e.target.value }
                    }))}
                />
            </Stack>

        </Stack>
    )
}
const profileSettings = (themeConfig, setThemeConfig) => {

    return (
        <Stack spacing={2}>

            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background Color</Typography>
                <TextField
                    sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.communityBar.bgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        communityBar: { ...prev.communityBar, bgColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.communityBar.textColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        communityBar: { ...prev.communityBar, textColor: e.target.value }
                    }))} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Join button color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.communityBar.joinButtonColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        communityBar: { ...prev.communityBar, joinButtonColor: e.target.value }
                    }))} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Join button text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.communityBar.joinButtonTextColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        communityBar: { ...prev.communityBar, joinButtonTextColor: e.target.value }
                    }))} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Border color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.communityBar.borderColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        communityBar: { ...prev.communityBar, borderColor: e.target.value }
                    }))} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border size</Typography>
                <TextField
                    sx={{ width: 150 }}
                    size="small"
                    type='number'
                    value={themeConfig.communityBar.border}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        communityBar: { ...prev.communityBar, border: e.target.value }
                    }))}
                />

            </Stack>

        </Stack>
    )
}
const aboutSettings = (themeConfig, setThemeConfig) => {
    return (
        <Stack spacing={1}>

            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Background Color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.aboutBar.bgColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        aboutBar: { ...prev.aboutBar, aboutBgColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Text color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.aboutBar.textColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        aboutBar: { ...prev.aboutBar, aboutTextColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography >Border color</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='color'
                    value={themeConfig.aboutBar.borderColor}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        aboutBar: { ...prev.aboutBar, aboutBorderColor: e.target.value }
                    }))}
                />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5} justifyContent="space-between">
                <Typography>Border size</Typography>
                <TextField sx={{ width: 150 }}
                    size="small"
                    type='number'
                    value={themeConfig.aboutBar.borderSize}
                    onChange={(e) => setThemeConfig(prev => ({
                        ...prev,
                        aboutBar: { ...prev.aboutBar, aboutBorderSize: e.target.value }
                    }))}
                />
            </Stack>
        </Stack>
    )
}


export default function CommunitySettingsDialog({ handleClickOpen, handleClose, open }) {
    const { themeConfig, setThemeConfig } = useThemeConfig()
    const [currentPage, setCurrentPage] = React.useState("Community Account")

    const changePage = () => {// Sayfa değiştiğinde dialog penceresini açık olarak ayarla
        if (currentPage === "Community Account") {
            return communityAccount(themeConfig, setThemeConfig);
        } else if (currentPage === "Post Settings") {
            return postSettings(themeConfig, setThemeConfig);
        } else if (currentPage === "Calender Settings") {
            return calenderSettings(themeConfig, setThemeConfig);
        } else if (currentPage === "About Settings") {
            return aboutSettings(themeConfig, setThemeConfig);
        } else if (currentPage === "Profile Settings") {
            return profileSettings(themeConfig, setThemeConfig);
        } else if (currentPage === "Share Box Settings") {
            return shareBoxSettings(themeConfig, setThemeConfig);
        } else if (currentPage === "Members Box Settings") {
            return membersSettings(themeConfig, setThemeConfig);
        }
        else if (currentPage === "Background Settings") {
            return backgroundSettings(themeConfig, setThemeConfig);
        }
    }

    const BootstrapBackdrop = styled('div')(({ theme }) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1040,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.5
    }));

    return (
        <div>
            {open &&
                <React.Fragment>
                    <BootstrapBackdrop onClick={handleClose} />
                    <Dialog
                        fullWidth
                        maxWidth="lg"
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2, mr: 1 }} id="customized-dialog-title">
                            Community Settings

                        </DialogTitle>
                        <Button variant='contained' onClick={handleClose} startIcon={<LiveTv />}>View live</Button>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <Close />
                        </IconButton>
                        <DialogContent dividers sx={{ width: "90%", height: 700 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={4}>
                                    <Stack border="1px solid" borderRadius={3}>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Community Account" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Community Account")}>
                                                    <ListItemText primary="Community Account" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Post Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Post Settings")}>
                                                    <ListItemText primary="Post Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Calender Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Calender Settings")}>
                                                    <ListItemText primary="Calender Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "About Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("About Settings")}>
                                                    <ListItemText primary="About Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Profile Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Profile Settings")}>
                                                    <ListItemText primary="Profile Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Share Box Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Share Box Settings")}>
                                                    <ListItemText primary="Share Box Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Members Box Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Members Box Settings")}>
                                                    <ListItemText primary="Members Box Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListItem sx={{ bgcolor: currentPage == "Background Settings" && 'ButtonFace' }}>
                                                <ListItemButton onClick={() => setCurrentPage("Background Settings")}>
                                                    <ListItemText primary="Background Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </Stack>
                                </Grid>

                                <Grid item xs={8}>
                                    {changePage()}
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>}
        </div>
    );
}
