import { Avatar, Box, Button, Container, Paper, Slide, Stack, TextField, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import Photo from '../assets/team.svg'
import { Add, Cancel, Create, NextPlan } from '@mui/icons-material'
import ImageButton from '../components/buttons/ImageButton'
import { Link } from 'react-router-dom'
import ProfileView from '../components/view/ProfileView'
import { registerCommunityFetch } from '../services/AuthService'
const CommunitySignUpPage = () => {
    const [slide, setSlide] = useState(false)
    const [selectedProfileImage, setSelectedProfileImage] = useState(null);
    const [selectedBannerImage, setSelectedBannerImage] = useState(null);
    const [selectedProfileImageObject, setSelectedProfileImageObject] = useState(null);
    const [selectedBannerImageObject, setSelectedBannerImageObject] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');

    const handleRegister= async () =>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('location', location);
        formData.append('profileImage', selectedProfileImage);
        formData.append('bannerImage', selectedBannerImage);
        try {
            const response = await registerCommunityFetch(formData);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const isFormValid = name !== '' && email !== '' && password !== '' && location !== '';
    return (
        <Container>
            <Stack direction="row" height="100vh" width="100%" alignItems="center">
                <Slide direction='left' in={!slide} style={{ transitionDelay: '200ms', display: slide && "none" }}>
                    <Paper elevation={5} >
                        <Stack direction="row" alignItems="center" height={700}>
                            <Box component="img" width={400} height={400} src={Photo} />
                            <Stack spacing={1} p={3}>
                                <Typography color="primary.main" variant='h3'>Create your community</Typography>
                                <Typography variant='h5'>Let's Build our community together and start a new family with people who have something in common with us.</Typography>
                                <Stack>
                                    <Stack alignItems="center" direction="row" spacing={3}>
                                        <Link to="/">
                                            <Button variant='outlined' startIcon={<Cancel />}>Cancel</Button>
                                        </Link>

                                        <Button onClick={() => setSlide(true)} fullWidth variant='contained' startIcon={<NextPlan />}>Next</Button>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>

                    </Paper>
                </Slide>
                <Slide in={slide} direction='right' style={{ width: "100%", transitionDelay: '200ms', display: !slide ? "none" : "flex" }}>
                    <Paper elevation={5} >

                        <Stack direction="row" alignItems="center" height={700} width="100%" >

                            <Box component="img" width={400} height={400} src={Photo} />
                            <Stack spacing={3} p={3} width="100%">
                                <Stack alignItems="center" spacing={1}>
                                    <Stack width="100%">
                                        <ProfileView selectedProfileImage={selectedProfileImageObject} selectedBannerImage={selectedBannerImageObject} />
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                        <ImageButton text="Profile Image" setObejct={setSelectedProfileImageObject} setSelectedImage={setSelectedProfileImage} selectedImage={selectedProfileImage} />
                                        <ImageButton text="Banner Image" setObejct={setSelectedBannerImageObject} setSelectedImage={setSelectedBannerImage} selectedImage={selectedBannerImage} />
                                    </Stack>

                                </Stack>
                                <Stack spacing={2} width="100%">
                                    <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth label="Community name" size='small' />
                                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth label="E-mail" size='small' />
                                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} fullWidth label="Password" size='small' />
                                    <TextField value={location} onChange={(e) => setLocation(e.target.value)} fullWidth label="Location" size='small' />
                                </Stack>
                                <Stack>
                                    <Stack direction="row" spacing={3}>
                                        <Link to="/">
                                            <Button variant='outlined' startIcon={<Cancel />}>Cancel</Button>
                                        </Link>

                                        <Button onClick={handleRegister} disabled={!isFormValid} fullWidth variant='contained' startIcon={<Add />}>Create</Button>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>

                    </Paper>
                </Slide>
            </Stack>
        </Container>
    )
}

export default CommunitySignUpPage