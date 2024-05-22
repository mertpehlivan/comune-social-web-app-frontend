import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Chip, IconButton, Stack, Typography } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PostStepper from './PostStepper';
import { ArrowDropDown, ArrowDropUp, Comment, Event, EventAvailable, Favorite, FavoriteBorder, FavoriteBorderOutlined, HeartBroken, HeartBrokenOutlined, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@mui/x-date-pickers';

const CommunityEvents = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus semper neque, cursus ultrices tortor posuere vel. Etiam placerat tempor sem, pulvinar fringilla quam sagittis nec. Mauris ultricies vulputate lobortis. In sit amet ornare justo, maximus volutpat eros. Nullam eget imperdiet tellus. Fusce venenatis, orci vitae rutrum vehicula, est magna maximus nibh, vel bibendum justo sapien vel eros. Nunc in dapibus lorem. Nullam nisl enim, pellentesque quis massa at, congue laoreet tortor. Aliquam maximus id lectus at tristique. Suspendisse dignissim consectetur sapien, at auctor justo auctor sed. Phasellus tincidunt tincidunt eleifend. In ac bibendum ipsum. Nam cursus augue ligula, ut mattis lorem volutpat nec. Fusce eget ex eu ligula molestie lacinia. Maecenas hendrerit maximus ipsum, in elementum felis ultricies id.")
    const [textSee, setTextSee] = useState("")
    const [moreText, setMoreText] = useState(true)
    const [textSize, setTextSize] = useState(false)
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDislikesCount] = useState(0)
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        if (like) {
            setLike(false)
            setLikesCount(likesCount - 1);
        } else if (!like && dislike) {
            setLike(true)
            setLikesCount(likesCount + 1);
            setDislike(false)
            setDislikesCount(dislikesCount - 1);
        } else if (!like) {
            setLike(true)
            setLikesCount(likesCount + 1);
        }

    };

    const handleDislike = () => {
        if (dislike) {
            setDislike(false)
            setDislikesCount(dislikesCount - 1);
        } else if (!dislike && like) {
            setDislike(true)
            setDislikesCount(dislikesCount + 1);
            setLike(false)
            setLikesCount(likesCount - 1);
        } else if (!like) {
            setDislike(true)
            setDislikesCount(likesCount + 1);
        }
    };

    const handleComment = () => {
        // Burada yorum ekleme işlemleri yapılabilir.
    };
    useEffect(() => {
        setTextSize(text.length > 200)
        if (moreText) {
            setTextSee(text.substring(0, 200) + "...")
        } else {
            setTextSee(text)
        }

    }, [moreText]);


    const slides = [
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { type: 'image', src: 'https://cdn.cetas.com.tr/Delivery/Public/Image/-1x-1/HANGI_ARABA_HANGI_ULKE_02_sp5zy3n1im.jpg' },
        { type: 'image', src: 'https://kutay2.com.tr/upload/news/637ca440b5514.png' },
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };



    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">


                    <Stack direction="row" alignItems="start" spacing={1}>
                        <Box>
                            <Avatar src="https://avatars.githubusercontent.com/u/81866624?v=4" />
                        </Box>
                        <Stack direction="column">
                            <Typography variant="body1">Mark Zoe</Typography>
                            <Typography color="gray" variant="body2">@markzoe</Typography>

                        </Stack>

                    </Stack>

                    <Chip sx={{ bgcolor: "primary.main", color: "secondary.main" }} label={<Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant='subtitle2'>Community:</Typography>
                        <Chip sx={{ bgcolor: "secondary.main", color: "primary.main" }} icon={<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhZIRKxDV0YgFzApUuusOMjLyqM7LJi_raNS7iOuHpQ&s' sx={{ width: 20, height: 20 }} />} label={<Link to="/community">zirratbank</Link>}></Chip>
                    </Stack>}></Chip>

                </Stack>
            </CardContent>
            <CardContent className='animate__slideOutDown'>
                <Stack direction="row" spacing={1} p={1}>
                    <Chip icon={<Event color="background.default" />} sx={{ bgcolor: "primary.main", color: "secondary.main" }} label="Event" />
                    <Chip icon={<ClockIcon color="background.default" />} sx={{ bgcolor: "primary.main", color: "secondary.main" }} label="12.32" />
                    <Chip icon={<LocationOn color="background.default" />} sx={{ bgcolor: "primary.main", color: "secondary.main" }} label="Sakarya, Arifiye" />
                </Stack>

                <Stack spacing={1} alignItems="center" border="1px solid" borderColor="primary.main" borderRadius={3} p={1}>
                    <Typography>{textSee}{textSize && <Button size='small' startIcon={(moreText ? <ArrowDropDown /> : <ArrowDropUp />)} onClick={() => setMoreText(prev => !prev)} variant='text'>See More</Button>}</Typography>
                    <Button variant='contained' fullWidth  startIcon={<EventAvailable/>}>Join the event</Button>
                </Stack>

            </CardContent>
            <CardContent>
                <Stack spacing={1}>
                    <Stack>

                        <PostStepper media={slides} />

                    </Stack>
                    
                    <Stack direction="row" borderRadius={3}>
                        <ButtonGroup fullWidth size='small' >
                            <Button variant={like ? 'contained' : 'outlined'} startIcon={like ? <Favorite /> : <FavoriteBorderOutlined />} onClick={handleLike}>
                                Like {likesCount}
                            </Button>
                            <Button variant={dislike ? 'contained' : 'outlined'} startIcon={dislike ? <HeartBroken /> : <HeartBrokenOutlined />} onClick={handleDislike}>
                                Dislike {dislikesCount}
                            </Button>
                            <Button startIcon={<Comment />} onClick={handleComment}>
                                Comment {comments.length}
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </Stack>

            </CardContent>
        </Card>
    );
};

export default CommunityEvents;
