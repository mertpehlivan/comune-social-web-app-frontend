import React, { useState, useEffect } from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';
import VideoPlayer from './VideoPlayer';

function PostStepper({ media }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loadedMedia, setLoadedMedia] = useState([]);
    const [isGalerys, setIsGalerys] = useState(false)
    useEffect(() => {

        if (media.length > 1) {
            setIsGalerys(true)
        }
    }, [media]);
    useEffect(() => {
        if (media.length > 0 && !loadedMedia.includes(activeIndex)) {
            setLoadedMedia((prevLoadedMedia) => [...prevLoadedMedia, activeIndex]);
        }
        if (media.length > 1) {
            setIsGalerys(true)
        }
    }, [activeIndex, media, loadedMedia]);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
    };

    return (
        <Stack
            height={350}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
        >
            {isGalerys && <IconButton
                style={{ position: 'absolute', left: 5, zIndex: 1, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                onClick={handlePrev}
                color="primary"
            >
                <ArrowCircleLeft />
            </IconButton>}
            {media.map((item, index) => (
                <Stack
                    key={index}
                    style={{
                        display: index === activeIndex ? 'flex' : 'none',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',

                    }}
                >
                    {item.type === 'video' ? (
                        <VideoPlayer item={item} />
                    ) : (
                        <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} /> // Kenar yuvarlatma
                    )}
                </Stack>
            ))}
            {isGalerys && <IconButton
                style={{ position: 'absolute', right: 5, zIndex: 1, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                onClick={handleNext}
                color="primary"
            >
                <ArrowCircleRight />
            </IconButton>}
            {isGalerys && <Stack direction="row" spacing={2} position="absolute" top={10} width="100%" justifyContent="center" zIndex={1000}>
                {media.map((_, index) => (
                    <Box
                        key={index}
                        width={10}
                        height={10}
                        borderRadius="50%"
                        bgcolor={index === activeIndex ? 'secondary.main' : 'grey'}
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)" // Hafif gölgelendirme
                    />
                ))}
            </Stack>}
        </Stack>
    );
}

export default PostStepper;
