import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Chip, IconButton, Stack, Typography } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PostStepper from './PostStepper';
import { ArrowDropDown, ArrowDropUp, Comment, Favorite, FavoriteBorder, FavoriteBorderOutlined, HeartBroken, HeartBrokenOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useThemeConfig } from '../../contexts/ThemeConfigProvider';

const CommunityPost = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [text, setText] = useState("")
    const [textSee, setTextSee] = useState("")
    const [moreText, setMoreText] = useState(true)
    const [textSize, setTextSize] = useState(false)
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDislikesCount] = useState(0)
    const [comments, setComments] = useState([]);
    const { themeConfig } = useThemeConfig()
    useEffect(() => {
        setText(data.comment)
    }, []);



    const {
        postBgColor,
        postTextColor,
        postButtonColor,
        postBorderColor,
        postBorderSize,
        postButtonTextColor
    } = themeConfig.postBar;
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

    }, [moreText,text]);
    const displayName = data.account.accountRole 
    ? `${data.account.firstname} ${data.account.lastname}`
    : data.account.name;

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
        <Card sx={{ borderRadius: 3,bgcolor:postBgColor,border:`${postBorderSize}px solid`, borderColor:postBorderColor }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">


                    <Stack direction="row" alignItems="start" spacing={1}>
                        <Box>
                            <Avatar src="https://avatars.githubusercontent.com/u/81866624?v=4" />
                        </Box>
                        <Stack direction="column">
                            <Typography color={postTextColor} variant="body1">{displayName}</Typography>
                        </Stack>

                    </Stack>
                    <Chip sx={{ bgcolor: "primary.main", color: "secondary.main" }} label={<Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color={postTextColor} variant='subtitle2'>Community:</Typography>
                        <Chip sx={{ bgcolor: "secondary.main", color:postTextColor }} icon={<Avatar src={`http://localhost:8080${data.community.profileImageUrl}`} sx={{ width: 20, height: 20 }} />} label={<Link to={`/community/${data.community.id}`}>{data.community.name}</Link>}></Chip>
                    </Stack>}></Chip>

                </Stack>
            </CardContent>
            <CardContent className='animate__slideOutDown'>
                <Stack direction="row" textAlign="start" spacing={1}>
                    <Typography color={postTextColor}>{textSee}{textSize && <Button size='small' startIcon={(moreText ? <ArrowDropDown /> : <ArrowDropUp />)} onClick={() => setMoreText(prev => !prev)} style={{color:postTextColor}} variant='text'>See More</Button>}</Typography>
                </Stack>

            </CardContent>
            <CardContent>
                <Stack spacing={1}>
                    <Stack>
                        <PostStepper media={slides} />
                    </Stack>
                    <Stack direction="row" borderRadius={3}>
                        <ButtonGroup fullWidth size='small' >
                            <Button style={{backgroundColor:postButtonColor,color:postButtonTextColor ,opacity:like ? 1 : 0.6}} variant={like ? 'contained' : 'outlined'} startIcon={like ? <Favorite sx={{color:postButtonTextColor}}/> : <FavoriteBorderOutlined sx={{color:postButtonTextColor}}/>} onClick={handleLike}>
                                Like {likesCount}
                            </Button>
                            <Button style={{backgroundColor:postButtonColor,color:postButtonTextColor,opacity:dislike ? 1 : 0.6}} variant={dislike ? 'contained' : 'outlined'} startIcon={dislike ? <HeartBroken sx={{color:postButtonTextColor}}/> : <HeartBrokenOutlined sx={{color:postButtonTextColor}}/>} onClick={handleDislike}>
                                Dislike {dislikesCount}
                            </Button>
                            <Button style={{backgroundColor:postButtonColor,color:postButtonTextColor}} startIcon={<Comment sx={{color:postButtonTextColor}}/>} onClick={handleComment}>
                                Comment {comments.length}
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </Stack>

            </CardContent>
        </Card>
    );
};

export default CommunityPost;
